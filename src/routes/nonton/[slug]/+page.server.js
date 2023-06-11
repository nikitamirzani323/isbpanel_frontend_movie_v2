import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

// export const prerender = false;

export const load = async({params,url}) => {
    const PATH = url.origin
    const seo_url = url.href
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    
    console.log(seo_url)
    const [res_listmovie] = await Promise.all([
        fetch("http://128.199.241.112:5058/api/moviedetail", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
            },
            body: JSON.stringify({
                "client_hostname": PATH,
                "slug": params.slug,
            }),
        }),
    ]);
    const record_listmovie= await res_listmovie.json();
    
    // console.log(record_listmovie.record)
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