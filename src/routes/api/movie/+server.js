import { json } from '@sveltejs/kit'
// export const GET = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await res.json(); 
//     return new Response(JSON.stringify(data),{
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });
// }
export const POST = async({request}) => {
    const object =  await request.json();
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json(); 
    console.log(object)
    return new Response(JSON.stringify(data),{
        headers: {
            "Content-Type": "application/json"
        },
    });
}
// export async function POST({request}){
//     const path_api = "https://jsonplaceholder.typicode.com/"
//     const object =  await request.json();
//     const resdata = await fetch(path_api+"photos", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             "client_Device": "WEBSITE",
//             "client_hostname": "host",
//         }),
//     });
//     const jsondata = await resdata.json();
//     const status = jsondata.status;
//     const message = jsondata.message;
//     return json(jsondata);

// }