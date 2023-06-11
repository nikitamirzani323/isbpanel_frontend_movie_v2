import { redis } from "$lib/server/redis";

export const prerender = true;

export const load = async({params,url}) => {
    const PATH = url.origin
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    

    const [res_listmovie,res_listgenre] = await Promise.all([
        fetch(PATH+"/api/moviegenre", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:"hostname_client",
                movie_page:0,
                slug:params.slug,
            }),
        }),
        fetch(PATH+"/api/navgenre", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:"hostname_client",
            }),
        }),
    ]);
    const record_listgenre= await res_listgenre.json();
    const record_listmovie= await res_listmovie.json();
    
    return {
        list_genre : record_listgenre,
        list_movie : record_listmovie,
        slug: params.slug,
    }
}