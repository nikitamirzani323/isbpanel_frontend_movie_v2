import { redis } from "$lib/server/redis";

export const prerender = true;

export const load = async({params,url}) => {
    const PATH = url.origin
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    

    const [res_listmovie] = await Promise.all([
        fetch(PATH+"/api/moviedetail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:PATH,
                slug:params.slug,
            }),
        }),
    ]);
    const record_listmovie= await res_listmovie.json();
    
    // console.log(record_listmovie)

    return {
        list_movie : record_listmovie,
        slug: params.slug,
    }
}