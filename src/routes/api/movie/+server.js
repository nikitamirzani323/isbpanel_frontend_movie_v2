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
// export const POST = async({request}) => {
//     const object =  await request.json();
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await res.json(); 
//     const filteredData = data.slice(0,20)
//     console.log(object)
//     return new Response(JSON.stringify(filteredData),{
//         headers: {
//             "Content-Type": "application/json"
//         },
//     });
// }
// export const POST = async({request}) => {
//     const path_api = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
//     const object =  await request.json();
//     const resdata = await fetch(path_api, {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGFmNzZjNjg5NTNmOGZiZWQwNDhlZWJkYzM2MmM0ZiIsInN1YiI6IjYwNDkzMzQwNjZhMGQzMDA1YTdmYzM5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nUY7trq1Wr0TLMSJcmL0lLPtDfDF0uH9PgHBblnockg',
//         },
//     });
//     const jsondata = await resdata.json();
//     const filteredData = jsondata.results.slice(0,12)
//     console.log(jsondata.results)
//     console.log(object)
//     return new Response(JSON.stringify(filteredData),{
//         headers:{
//             "Content-Type":"application.json"
//         },
//     });
// }
export const POST = async({request,url}) => {
    const path_api = "http://128.199.241.112:5058/api/movie"
    const object =  await request.json();
    const resdata = await fetch(path_api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODY0Nzg1MTEsIm5hbWUiOiI4dXVKJHZ2NlZaWDY4Vmp1fDk1In0.-LS3xyNcWe8KSN9LJDkh-5iMP0XH6eJQmrlUNYYA2gU',
        },
        body: JSON.stringify({
            "client_hostname": url.host,
        }),
    });
    const jsondata = await resdata.json();
    // console.log(jsondata.record)
    // window.localStorage.setItem("token",jsondata.token)
    
    // const filteredData = jsondata.results.slice(0,12)
    // console.log(jsondata.results)
    // console.log(object)
    return new Response(JSON.stringify(jsondata.record),{
        headers:{
            "Content-Type":"application.json"
        },
    });
}