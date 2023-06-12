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
    
    

    let {list_genre} = await loadData (PATH_API,PATH,token);
    // console.log(list_genre)
    if(list_genre.status == 400){
        throw error(404, {
            message: 'Not found'
        });
    }
    return {
        list_genre : list_genre.record,
    }
}
async function loadData(path_api,path_host,auth_bearer){
    const cached_gender = await redis.get("GENDER")
    if(cached_gender){
        console.log("CACHE GENDER")
        const temp_data_gender_cached = JSON.parse(cached_gender)
        return {
            list_genre : temp_data_gender_cached,
        }
    }else{
        console.log("SERVER GENRE")
        const [res_listgenre] = await Promise.all([
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
        ]);
        const record_listgenre= await res_listgenre.json();
        // console.log(record_listgenre)
        
        redis.set("GENDER", JSON.stringify(record_listgenre), "EX",86400);
        return {
            list_genre : record_listgenre,
        }
    }

    
}