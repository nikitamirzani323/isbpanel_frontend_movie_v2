import { redis } from "$lib/server/redis";
export const POST = async({request,url}) => {
    const path_api = "http://128.199.241.112:5058/api/moviesearch"
    const object =  await request.json();
    const PATH = url.origin
    const cached = await redis.get(PATH+"-token")
    const temp_cached = JSON.parse(cached)
    const cached_moviesearch = await redis.get("MOVIESEARCH-"+object.name)
    let token = temp_cached.token
   
    if(cached_moviesearch){
        console.log("CACHE MOVIESEARCH-"+object.name)
        const temp_cached_moviesearch_cached = JSON.parse(cached_moviesearch)
        return new Response(JSON.stringify(temp_cached_moviesearch_cached),{
            headers:{
                "Content-Type":"application.json"
            },
        });
    }else{
        const resdata = await fetch(path_api, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token,
            },
            body: JSON.stringify({
                "client_hostname": url.host,
                "movie_search": object.name,
            }),
        });
        console.log(object)
        const jsondata = await resdata.json();
        redis.set("MOVIESEARCH-"+object.name, JSON.stringify(jsondata), "EX",172800);//2 DAY
        return new Response(JSON.stringify(jsondata),{
            headers:{
                "Content-Type":"application.json"
            },
        });
    }
}