import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({params,url}) => {
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    
    // console.log(seo_url)

    const [res_listmovie,res_listgenre] = await Promise.all([
        fetch("http://128.199.241.112:5058/api/moviegenre", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
            },
            body: JSON.stringify({
                "client_hostname": PATH,
                "slug":params.slug,
                "movie_page":0,
            }),
        }),
        
        fetch("http://128.199.241.112:5058/api/genre", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
            },
            body: JSON.stringify({
                "client_hostname": PATH,
            }),
        }),
    ]);
    const record_listgenre= await res_listgenre.json();
    const record_listmovie= await res_listmovie.json();
    
    if (!record_listgenre || !record_listmovie) {
        throw error(404, {
            message: 'Not found'
        });
    }

    return {
        list_genre : record_listgenre.record,
        list_movie : record_listmovie,
        slug: params.slug,
        seo_url: seo_url,
    }
}