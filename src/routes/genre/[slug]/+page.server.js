import { redirect } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({params,url}) => {
    const PATH_API = "http://128.199.241.112:5058/"
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get(PATH+"-token")
    let token = "";

    if(cached){
        const temp_cached = JSON.parse(cached)
        token = temp_cached.token
        const [res_listmovie,res_listgenre] = await Promise.all([
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
            
            fetch(PATH_API+"api/genre", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token,
                },
                body: JSON.stringify({
                    "client_hostname": PATH,
                }),
            }),
        ]);
        const record_listgenre= await res_listgenre.json();
        const record_listmovie= await res_listmovie.json();
        
        if(record_listgenre.status == 400){
            throw redirect(307, '/');
        }
    
        return {
            list_genre : record_listgenre.record,
            list_movie : record_listmovie,
            slug: params.slug,
            seo_url: seo_url,
        }
    }else{
        throw redirect(307, '/');
    }
}