import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({url,parent}) => {
    const PATH_API = "http://128.199.241.112:5058/"
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get(PATH+"-token")
    const { list_genre } = await parent();
    let token = "";

    if(cached){
        const temp_cached = JSON.parse(cached)
        token = temp_cached.token
    }
    

    let {list_movie_new,list_movie_update,list_movie_random} = await loadData (PATH_API,PATH,token);
    // console.log(list_genre)
    
    return {
        list_gender : list_genre,
        list_movie_new : list_movie_new,
        list_movie_update : list_movie_update,
        list_movie_random : list_movie_random,
        seo_url: seo_url,
    }
}
async function loadData(path_api,path_host,auth_bearer){
    const cached_movienew = await redis.get("MOVIE_NEW")
    const cached_movieupdate = await redis.get("MOVIE_UPDATE")
    const cached_movierandom = await redis.get("MOVIE_RANDOM")
    if(cached_movienew && cached_movieupdate && cached_movierandom){
        console.log("CACHE MOVIE NEW")
        console.log("CACHE MOVIE UPDATE")
        console.log("CACHE MOVIE RANDOM")
        const temp_data_movienew_cached = JSON.parse(cached_movienew)
        const temp_data_movieupdate_cached = JSON.parse(cached_movieupdate)
        const temp_data_movierandom_cached = JSON.parse(cached_movierandom)
        return {
            list_movie_new : temp_data_movienew_cached,
            list_movie_update : temp_data_movieupdate_cached,
            list_movie_random : temp_data_movierandom_cached,
        }
    }else{
        console.log("SERVER MOVIE NEW")
        console.log("SERVER MOVIE UPDATE")
        console.log("SERVER MOVIE RANDOM")
        const [res_listmovie_new,res_listmovie_update,res_listmovie_random] = await Promise.all([
            fetch(path_api+"api/movie", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+auth_bearer,
                },
                body: JSON.stringify({
                    "client_hostname": path_host,
                    "movie_search":"",
                    "movie_tipe":"NEW",
                    "movie_perpage":40,
                    "movie_page":0,
                }),
            }),
            fetch(path_api+"api/movie", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+auth_bearer,
                },
                body: JSON.stringify({
                    "client_hostname": path_host,
                    "movie_search":"",
                    "movie_tipe":"UPDATE",
                    "movie_perpage":16,
                    "movie_page":0,
                }),
            }),
            fetch(path_api+"api/movie", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+auth_bearer,
                },
                body: JSON.stringify({
                    "client_hostname": path_host,
                    "movie_search":"",
                    "movie_tipe":"RANDOM",
                    "movie_perpage":16,
                    "movie_page":0,
                }),
            }),
        ]);
        const record_listmovie_new= await res_listmovie_new.json();
        const record_listmovie_update= await res_listmovie_update.json();
        const record_listmovie_random= await res_listmovie_random.json();
        // console.log(record_listgenre)

        redis.set("MOVIE_NEW", JSON.stringify(record_listmovie_new), "EX",86400);
        redis.set("MOVIE_UPDATE", JSON.stringify(record_listmovie_update), "EX",86400);
        redis.set("MOVIE_RANDOM", JSON.stringify(record_listmovie_random), "EX",86400);
        return {
            list_movie_new : record_listmovie_new,
            list_movie_update : record_listmovie_update,
            list_movie_random : record_listmovie_random,
        }
    }

    
}