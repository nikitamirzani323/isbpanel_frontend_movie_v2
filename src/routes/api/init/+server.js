export const POST = async({request,url}) => {
    const path_api = "http://128.199.241.112:5058/api/init"
    const object =  await request.json();
    const resdata = await fetch(path_api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "client_hostname": url.host,
        }),
    });
    const jsondata = await resdata.json();
    // console.log(jsondata)
    return new Response(JSON.stringify(jsondata),{
        headers:{
            "Content-Type":"application.json"
        },
    });
}