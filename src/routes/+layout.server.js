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
    
    

    let {list_genre,list_banner} = await loadData (PATH_API,PATH,token);
    // console.log(list_genre)
    if(list_genre.status == 400){
        throw error(404, {
            message: 'Not found'
        });
    }
    return {
        list_genre : list_genre.record,
        list_banner : list_banner.record,
    }
}
async function loadData(path_api,path_host,auth_bearer){
    const cached_gender = await redis.get("GENDER")
    const cached_banner = await redis.get("BANNER")
    if(cached_gender &&  cached_banner){
        console.log("CACHE GENDER")
        console.log("CACHE BANNER")
        const temp_data_gender_cached = JSON.parse(cached_gender)
        const temp_data_banner_cached = JSON.parse(cached_banner)
        // console.log(temp_data_banner_cached)
        return {
            list_genre : temp_data_gender_cached,
            list_banner : temp_data_banner_cached,
        }
    }else{
        console.log("SERVER GENRE")
        console.log("SERVER BANER")
        const [res_listgenre,res_listbanner] = await Promise.all([
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
            fetch(path_api+"api/banner", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+auth_bearer,
                },
                body: JSON.stringify({
                    "client_hostname": path_host,
                }),
            }),
        ]);
        const record_listgenre= await res_listgenre.json();
        const record_listbaner= await res_listbanner.json();
        // console.log(record_listbaner)
        
        redis.set("GENDER", JSON.stringify(record_listgenre), "EX",86400);
        redis.set("BANNER", JSON.stringify(record_listbaner), "EX",86400);
        return {
            list_genre : record_listgenre,
            list_banner : record_listbaner,
        }
    }

    
}