import { redis } from "$lib/server/redis";

export const prerender = true;

export const load = async() => {
    let listmovie = []
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    

    const [res_listmovie] = await Promise.all([
        fetch("http://localhost:5173/api/movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:"hostname_client",
                keluaran_id:"slug",
            }),
        }),
    ]);
    const record_listmovie= await res_listmovie.json();
    
    

   
    

    return {
        list_movie : record_listmovie
    }
}