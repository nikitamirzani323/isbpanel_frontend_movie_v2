import { redirect } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({params,url,parent}) => {
    const PATH_API = "http://128.199.241.112:5058/"
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get(PATH+"-token")
    const cached_moviegender = await redis.get("MOVIEGENDER-"+params.slug)
    const cached_gender = await redis.get("GENDER")
    const { list_genre } = await parent();
    let token = "";
    

    if(cached){
        if(cached_moviegender){
            console.log("CACHE movieGENDER-"+params.slug)
            const temp_moviegender_cached = JSON.parse(cached_moviegender)
            return {
                list_genre : list_genre,
                list_movie : temp_moviegender_cached,
                slug: params.slug,
                seo_url: seo_url,
            }
        }else{
            console.log("SERVER GENRE")
            console.log("SERVER MOVIE GENRE "+params.slug)
            const temp_cached = JSON.parse(cached)
            token = temp_cached.token
            const [res_listmovie] = await Promise.all([
                fetch(PATH_API+"api/moviegenre", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token,
                    },
                    body: JSON.stringify({
                        "client_hostname": PATH,
                        "slug":params.slug,
                        "movie_page":0,
                    }),
                }),
            ]);
            const record_listmovie= await res_listmovie.json();
            const temp_datagender_cached = JSON.parse(cached_gender)
            redis.set("MOVIEGENDER-"+params.slug, JSON.stringify(record_listmovie), "EX",86400);

            if(record_listmovie.status == 400){
                throw redirect(307, '/');
            }
        
            return {
                list_genre : list_genre,
                list_movie : record_listmovie,
                slug: params.slug,
                seo_url: seo_url,
            }
        }
    }else{
        throw redirect(307, '/');
    }
}