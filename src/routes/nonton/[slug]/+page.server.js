import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({params,url}) => {
    const PATH_API = "http://128.199.241.112:5058/"
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get(PATH+"-token")
    const cached_movie = await redis.get(params.slug)
    let token = "";
    
    if(cached){
        const temp_cached = JSON.parse(cached)
        token = temp_cached.token
        if(cached_movie){
            console.log("CACHE "+params.slug)
            const temp_data_cached = JSON.parse(cached_movie) 
            return {
                list_movie : temp_data_cached.record,
                slug: params.slug,
                seo_url: seo_url,
            }
        }else{
            console.log("SERVER "+params.slug)
            const [res_listmovie] = await Promise.all([
                fetch(PATH_API+"api/moviedetail", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+token,
                    },
                    body: JSON.stringify({
                        "client_hostname": PATH,
                        "slug": params.slug,
                    }),
                }),
            ]);
            const record_listmovie= await res_listmovie.json();
            redis.set(params.slug, JSON.stringify(record_listmovie), "EX",86400);
            // console.log(record_listmovie)
            if (!record_listmovie) {
                throw error(404, {
                    message: 'Not found'
                });
            }
        
            return {
                list_movie : record_listmovie.record,
                slug: params.slug,
                seo_url: seo_url,
            }
        }
    }else{
        throw redirect(307, '/');
    }
}