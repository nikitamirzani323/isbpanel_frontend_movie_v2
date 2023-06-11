<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_movie} = data;

    let movie_title = ""
    let movie_descp = ""
    let movie_img = ""
    let movie_genre = []
    let movie_source = []
    let source_movie = ""

    for(let i=0;i<list_movie.length;i++){
        movie_title = list_movie[i].movie_title
        movie_descp = list_movie[i].movie_descp
        movie_img = list_movie[i].movie_img
        source_movie = list_movie[i].movie_src
        movie_genre = list_movie[i].movie_genre
        movie_source = list_movie[i].movie_video
    }

    const call_movie = (e) => {
        source_movie = e
    };
</script>
<Seo 
    title="LK21 Nonton Fast X (2023) Film dan Series Streaming Download Movie Cinema21 Bioskop Subtitle Indonesia &raquo; Layarkaca21 HD Dunia21 IndoXXI [1]" 
    descp="LK21 Nonton Fast X (2023) Film dan Series Streaming Download Movie Cinema21 Bioskop Subtitle Indonesia &raquo; Layarkaca21 HD Dunia21 IndoXXI [1]<" 
    type="Website" />
<div class="text-sm breadcrumbs">
    <ul>
        <li><a href="/">Home</a></li> 
        <li>{movie_title}</li>
    </ul>
  </div>
<article class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</article>
<article class="lg:flex justify-between w-full gap-2">
    <section class="w-full">
        <iframe width="100%" height="500" src="{source_movie}" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <section class="flex justify-normal gap-1 py-2 w-full">
            <section class="flex justify-start gap-1 w-1/2 ">
                {#each movie_source as recvideo}
                    <button on:click={() => {
                        call_movie(recvideo.movie_src);
                      }} class="btn btn-info btn-xs">{recvideo.movie_title}</button>
                {/each}
            </section>
            <section class="flex justify-end gap-1 w-1/2 ">
                <a href="https://api.whatsapp.com/send/?text=http://localhost:5173/nonton/red-notice-2021&app_absent=0" class="btn btn-primary btn-xs">Whatsapp</a>
            <a href="https://telegram.me/share/url?url=http://localhost:5173/nonton/red-notice-2021&text=Nonton Film Red Devil" class="btn btn-primary btn-xs">Telegram</a>
            </section>
        </section>
        <center class="w-full mt-2">
            <img src="https://s1.makimbo.xyz/assets/below-player-jun.gif" alt="">
        </center>
        <section class="w-full bg-base-200 p-2 mt-3">
            <h1 class="text-xs lg:text-lg font-medium mb-5">
                ISBFILM NONTON {movie_title} FILM SUBTITLE INDONESIA STREAMING MOVIE DOWNLOAD GRATIS ONLINE
            </h1>
            <section class="flex justify-items-start gap-1 mb-5">
                <section class="w-1/3">
                    <img src="{movie_img}" alt="ISBFILM Nonton {movie_title}" />
                </section>
                <section class="w-full ml-10">
                    <p class="text-md justify-normal">
                        {movie_descp}
                    </p>
                    {#each movie_genre as recgenre}
                        <a data-sveltekit-reload href="/genre/{recgenre.movie_slug}" class="btn btn-xs btn-outline btn-success m-1">{recgenre.movie_genre}</a>
                    {/each}
                </section>
            </section>
        </section>
        <section class="w-full bg-base-200 p-2 mt-3">
            <p>comment</p>
        </section>
    </section>
    <aside class="w-full lg:w-1/2">
        <center class="mb-5">
            <img src="https://s1.makimbo.xyz/assets/xlbola-.gif" alt="">
        </center>
        <section class="grid grid-cols-2 gap-1 mb-5">
            <img src="https://image.tmdb.org/t/p/w780//ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg" alt="">
            <section>
                <h2>Super Mario Bros 2</h2>
                <span class="text-xs text-cyan-200">123k View</span>
            </section>
        </section>
        <section class="grid grid-cols-2 gap-1 mb-5">
            <img src="https://image.tmdb.org/t/p/w780//ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg" alt="">
            <section>
                <h2>Super Mario Bros 2</h2>
            </section>
        </section>
        <section class="grid grid-cols-2 gap-1 mb-5">
            <img src="https://image.tmdb.org/t/p/w780//ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg" alt="">
            <section>
                <h2>Super Mario Bros 2</h2>
            </section>
        </section>
        <section class="grid grid-cols-2 gap-1 mb-5">
            <img src="https://image.tmdb.org/t/p/w780//ceYZCBfwbBwSpGJ6PapNVw5jqLG.jpg" alt="">
            <section>
                <h2>Super Mario Bros 2</h2>
            </section>
        </section>
    </aside>
</article>