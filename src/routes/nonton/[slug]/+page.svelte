<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_genre,list_movie,slug, seo_url} = data;

    let movie_type = ""
    let movie_title = ""
    let movie_descp = ""
    let movie_img = ""
    let movie_genre = []
    let movie_source = []
    let movie_listmoviegenre = []
    let movie_listmovienew = []
    let movie_listseason = []
    let source_movie = ""
    let listepisode = [];
    let panel_moviegenre = true 
    let panel_movienew = false
    movie_type = list_movie[0].movie_type
    movie_title = list_movie[0].movie_title
    movie_descp = list_movie[0].movie_descp
    movie_img = list_movie[0].movie_img
    source_movie = list_movie[0].movie_src
    if(movie_genre = list_movie[0].movie_genre != null){
        movie_genre = list_movie[0].movie_genre
    }
    if(list_movie[0].movie_video != null) {
        movie_source = list_movie[0].movie_video
    }
    if(list_movie[0].movie_listvideogenre != null) {
        movie_listmoviegenre = list_movie[0].movie_listvideogenre
    }  
    if(list_movie[0].movie_listvideonew != null) {
        movie_listmovienew = list_movie[0].movie_listvideonew
    }
    if(list_movie[0].movie_listseason != null) {
        movie_listseason = list_movie[0].movie_listseason
    }
    console.log(slug)
    // console.log(seo_url)
    // console.log(movie_type)
    // console.log(movie_listseason)
    const call_movie = (e) => {
        source_movie = e
    };
    const change_aside = (e) => {
        switch(e){
            case "GENRE":
                panel_moviegenre = true 
                panel_movienew = false
                break;
            case "NEW":
                panel_moviegenre = false 
                panel_movienew = true
                break;
        }
    }
    const call_episode = (event) => {
        if(event.target.value != ""){
            fetch_episode(event.target.value)
        }
	};
    const handleSelectEpisode = (event) => {
        if(event.target.value != ""){
            source_movie = event.target.value
        }
    };
    async function fetch_episode(e) {
		listepisode = [];
		const resdata = await fetch("/api/listepisode", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                slug: slug,
                season_id: parseInt(e)
            }),
        });
        if (!resdata.ok) {
            const pasarMessage = `An error has occured: ${resdata.status}`;
            throw new Error(pasarMessage);
        }else{
            const jsondata = await resdata.json();
            if (jsondata.status == 200) {
                let record = jsondata.record;
                if (record != null) {
                    for (var i = 0; i < record.length; i++) {
                        if(parseInt(i) == 0){
                            source_movie = record[i]["episode_src"]
                        }
                        listepisode = [
                        ...listepisode,
                            {
                                episode_id: record[i]["episode_id"],
                                episode_title: record[i]["episode_title"],
                                episode_src: record[i]["episode_src"],
                            },
                        ];
                    }
                } else {
                    alert("Error");
                }
            }
		}
	}
    const loaded = new Map();
    function lazy(node, data) {
		if (loaded.has(data.src)) {
			node.setAttribute('src', data.src);
		} else {
			// simulate slow loading network
			setTimeout(() => {
				const img = new Image();
				img.src = data.src;
				img.onload = () => {
					loaded.set(data.src, img);
					node.setAttribute('src', data.src); 
				};
			}, 100);
		}

		return {
			destroy(){} // noop
		};
	}

</script>
<Seo 
    title="ISBFILM Nonton {movie_title} Film dan Series Streaming Download Movie Cinema21 Bioskop Subtitle Indonesia &raquo; Layarkaca21 HD Dunia21 IndoXXI [1]" 
    descp="ISBFILM Nonton {movie_title} Film dan Series Streaming Download Movie Cinema21 Bioskop Subtitle Indonesia &raquo; Layarkaca21 HD Dunia21 IndoXXI [1]" 
    url="{seo_url}"
    type="Website" />
<div class="text-sm breadcrumbs px-1 lg:px-0">
    <ul>
        <li><a href="/">Home</a></li> 
        <li>{movie_title}</li>
    </ul>
</div>
<article class="lg:flex w-full gap-2 px-1 lg:px-0">
    <section class="w-full">
        {#if movie_type == "serie"}
        <section class="flex justify-center gap-2 w-full mb-2">
            <select on:change={call_episode}
                name="" id="" class="w-1/2 p-2 rounded-md text-md">
                <option value="">--Select Season--</option>
                {#each movie_listseason as rec}
                    <option value="{rec.season_id}">{rec.season_title}</option>
                {/each}
            </select>
            <select
                on:change={handleSelectEpisode} 
                name="" id="" class="w-1/2 rounded-md text-md">
                <option value="">--Select Episode--</option>
                {#each listepisode as rec}
                    <option value="{rec.episode_src}">{rec.episode_title}</option>
                {/each}
            </select>
        </section>
        {/if}
        <iframe class="aspect-auto w-full h-[250px] lg:h-[500px]" src="{source_movie}" 
            title="{movie_title}" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <section class="lg:flex justify-normal  py-2 w-full">
            <section class="flex justify-center lg:justify-start gap-1 w-full lg:w-1/2 ">
                {#each movie_source as recvideo}
                    <button on:click={() => {
                        call_movie(recvideo.movie_src);
                      }} class="btn btn-info btn-xs text-[11px] lg:text-[12px]">{recvideo.movie_title}</button>
                {/each}
            </section>
            <section class="flex justify-center lg:justify-end gap-1 w-full lg:w-1/2 mt-2 lg:mt-0">
                <a href="https://api.whatsapp.com/send/?text={seo_url}&app_absent=0" class="btn btn-primary btn-xs text-[11px] lg:text-[12px]">Whatsapp</a>
                <a href="https://telegram.me/share/url?url={seo_url}&text=Nonton Film {movie_title}" class="btn btn-primary btn-xs text-[11px] lg:text-[12px]">Telegram</a>
            </section>
        </section>
        <section class="w-full bg-base-200 p-2 mt-2">
            <h1 class="text-[11px] lg:text-lg lg:font-medium mb-5">
                ISBFILM NONTON {movie_title} FILM SUBTITLE INDONESIA STREAMING MOVIE DOWNLOAD GRATIS ONLINE
            </h1>
            <section class="w-full flex mt-3">
                <img
                    style="border: 1px solid #1e152e;background-color: none;"
                    class="object-cover w-[80px] lg:w-[150px]"
                    alt="{movie_title}"
                    src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                    use:lazy="{{src: movie_img}}">
                <section class="w-full ml-10 p-1">
                    <p class="text-xs lg:text-md justify-normal">
                        {movie_descp}
                    </p>
                    {#each movie_genre as recgenre}
                        <a href="/genre/{recgenre.movie_slug}" class="btn btn-xs btn-outline btn-success m-1">{recgenre.movie_genre}</a>
                    {/each}
                </section>
            </section>
        </section>
    </section>
    <aside class="w-full mt-2 lg:mt-0 lg:w-1/3">
        <section class="mb-2 w-full text-center">
            <button on:click={() => {
                change_aside("GENRE");
              }} class="btn btn-success btn-xs text-[11px] lg:text-[12px]">By Genre</button>
            <button on:click={() => {
                change_aside("NEW");
              }} class="btn btn-success btn-xs text-[11px] lg:text-[12px]">Terbaru</button>
        </section>
        <section class="bg-base-200 w-full p-2">
        {#if panel_moviegenre}
            {#each movie_listmoviegenre as rec}
                <a data-sveltekit-reload href="{rec.movie_slug}" class="flex w-full   gap-1 mb-2 ">
                    <img
                        style="border: 1px solid #1e152e;background-color: none;"
                        class="object-cover rounded-md w-[80px] lg:w-[100px]"
                        alt="{rec.movie_title}"
                        src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                        use:lazy="{{src: rec.movie_thumbnail}}">
                    <figure>
                        <h2 class="text-xs w-full font-mono">{rec.movie_title}</h2>
                    </figure>
                </a>
            {/each}
        {/if}
        {#if panel_movienew}
            {#each movie_listmovienew as rec}
                <a data-sveltekit-reload href="{rec.movie_slug}" class="flex w-full   gap-1 mb-2 ">
                    <img
                        style="border: 1px solid #1e152e;background-color: none;"
                        class="object-cover rounded-md w-[80px] lg:w-[100px]"
                        alt="{rec.movie_title}"
                        src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                        use:lazy="{{src: rec.movie_thumbnail}}">
                    <figure>
                        <h2 class="text-xs w-full font-mono">{rec.movie_title}</h2>
                    </figure>
                </a>
            {/each}
        {/if}
        </section>
    </aside>
</article>
<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full px-1 lg:px-0">
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">{movie_title}</h3>
        <p class="text-xs lg:text-[14px]">
            Streaming download film nonton {movie_title} online. Full movie gratis subtitle indonesia resolusi 360 480 720 1080 kualitas Bluray, WebDL. Bioskopkeren {movie_title} Indoxxi {movie_title} Cinemaindo {movie_title} Lk21 {movie_title} Layarkaca21 {movie_title} Nonton {movie_title} Download {movie_title} Gratis
        </p>
    </section>
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">KATEGORI FILM</h3>
        {#each list_genre as rec}
            <a data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs m-1">{rec.movie_genre}</a>
        {/each}
    </section>
</article>