import { json } from '@sveltejs/kit'

export const POST = async({request,url}) => {
    const path_api = "http://128.199.241.112:5058/api/moviedetail"
    const object =  await request.json();
    const resdata = await fetch(path_api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY1MzI3NTQsIm5hbWUiOiI_KSlYaF5eXFwsK2xcXD8sSil8NzAifQ.ZnEJe4TQUPv0b4HFsRad63znw73anBr2CN42BE1osYQ',
        },
        body: JSON.stringify({
            "client_hostname": url.host,
            "slug": object.slug,
        }),
    });
    const jsondata = await resdata.json();
    return new Response(JSON.stringify(jsondata.record),{
        headers:{
            "Content-Type":"application.json"
        },
    });
}