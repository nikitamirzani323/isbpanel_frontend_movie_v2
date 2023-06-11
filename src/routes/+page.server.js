import { error } from '@sveltejs/kit';
import { redis } from "$lib/server/redis";

export const prerender = true;

export const load = async({url}) => {
    const PATH = url.origin
    const cached = await redis.get("LISTMOVIE_FRONTEND_ISBPANEL")
    // const c_json = JSON.parse(cached);
    // console.log(url.origin)

    const [res_listmovie_new,res_listmovie_update,res_listgenre] = await Promise.all([
        fetch("http://128.199.241.112:5058/api/movie", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
            },
            body: JSON.stringify({
                "client_hostname": url.host,
                "movie_search":"",
                "movie_tipe":"New",
                "movie_page":0,
            }),
        }),
        fetch("http://128.199.241.112:5058/api/movie", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
            },
            body: JSON.stringify({
                "client_hostname": url.host,
                "movie_search":"",
                "movie_tipe":"UPDATE",
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
                "client_hostname": url.host,
            }),
        }),
    ]);
    const record_listgenre= await res_listgenre.json();
    const record_listmovie_new= await res_listmovie_new.json();
    const record_listmovie_update= await res_listmovie_update.json();
    
    // console.log(record_listgenre)

    if (!record_listgenre || !record_listmovie_new || !record_listmovie_update) {
        throw error(404, {
            message: 'Not found'
        });
    }
    

    return {
        list_genre : record_listgenre.record,
        list_movie_new : record_listmovie_new,
        list_movie_update : record_listmovie_update,
    }
}