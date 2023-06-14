import { redis } from "$lib/server/redis";
export const POST = async({request,url}) => {
    const path_api = "http://128.199.241.112:5058/api/episode"
    const object =  await request.json();
    const PATH = url.origin
    const cached = await redis.get(PATH+"-token")
    const temp_cached = JSON.parse(cached)
    const cached_episode = await redis.get("EPISODE-"+object.slug+"-"+object.season_id)
    let token = temp_cached.token
   
    if(cached_episode){
        console.log("CACHE EPISODE-"+object.slug+"-"+object.season_id)
        const temp_cached_episode_cached = JSON.parse(cached_episode)
        return new Response(JSON.stringify(temp_cached_episode_cached),{
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
                "season_id": parseInt(object.season_id),
            }),
        });
        // console.log(object)
        const jsondata = await resdata.json();
        redis.set("EPISODE-"+object.slug+"-"+object.season_id, JSON.stringify(jsondata), "EX",86400);
        return new Response(JSON.stringify(jsondata),{
            headers:{
                "Content-Type":"application.json"
            },
        });
    }
}