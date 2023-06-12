import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({url}) => {
    const PATH_API = "http://128.199.241.112:5058/"
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get(PATH+"-token")
    let token = "";

    if(cached){
        const temp_cached = JSON.parse(cached)
        token = temp_cached.token
    }else{
        const [res_init] = await Promise.all([
            fetch(PATH+"/api/init", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "client_hostname": PATH,
                }),
            }),
        ]);
        const init= await res_init.json();
        token = init.token
        redis.set(PATH+"-token", JSON.stringify(init), "EX",86400);
    }
    
    

    let {list_genre,list_movie_new,list_movie_update} = await loadData (PATH_API,PATH,token);
    // console.log(list_genre)
    if(list_genre.status == 400){
        throw error(404, {
            message: 'Not found'
        });
    }
    return {
        list_genre : list_genre.record,
        list_movie_new : list_movie_new,
        list_movie_update : list_movie_update,
        seo_url: seo_url,
    }
}
async function loadData(path_api,path_host,auth_bearer){
    const [res_listgenre,res_listmovie_new,res_listmovie_update] = await Promise.all([
        fetch(path_api+"api/genre", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+auth_bearer,
            },
            body: JSON.stringify({
                "client_hostname": path_host,
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
                "movie_tipe":"NEW",
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
                "movie_page":0,
            }),
        }),
    ]);
    const record_listgenre= await res_listgenre.json();
    const record_listmovie_new= await res_listmovie_new.json();
    const record_listmovie_update= await res_listmovie_update.json();
    // console.log(record_listgenre)
    return {
        list_genre : record_listgenre,
        list_movie_new : record_listmovie_new,
        list_movie_update : record_listmovie_update,
    }
}