// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const load = async() => {
    const getPosts = async() => {
        // const res = await fetch("http://localhost:5173/api/movie");
        // const data = await res.json();
        // const filteredData = data.slice(0,20)
        // return filteredData
        const res = await fetch('http://localhost:5173/api/movie', {
            method: 'POST',
            body: JSON.stringify({ 
                hostname:"hostname_client",
                keluaran_id:"slug",
             }),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();
        // const filteredData = data.slice(0,20)
        return data
    };
    

    return {
        posts : getPosts()
    }
}