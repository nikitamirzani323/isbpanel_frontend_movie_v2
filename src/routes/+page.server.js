import { redis } from "$lib/server/redis";

export const prerender = true;

export const load = async() => {
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    

    const [res_listmovie_new,res_listmovie_update,res_listgenre] = await Promise.all([
        fetch("http://localhost:5173/api/movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:"hostname_client",
                movie_search:"",
                movie_tipe:"NEW",
                movie_page:0,
            }),
        }),
        fetch("http://localhost:5173/api/movie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                hostname:"hostname_client",
                movie_search:"",
                movie_tipe:"UPDATE",
                movie_page:0,
            }),
        }),
        fetch("http://localhost:5173/api/navgenre", {
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
    const record_listmovie_new= await res_listmovie_new.json();
    const record_listmovie_update= await res_listmovie_update.json();
    
    // console.log(record_listmovie_new)

   
    

    return {
        list_genre : record_listgenre,
        list_movie_new : record_listmovie_new,
        list_movie_update : record_listmovie_update,
    }
}