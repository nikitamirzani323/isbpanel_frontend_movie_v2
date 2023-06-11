<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_genre,list_movie,slug} = data;
    // const genre = list_movie.genre
    const genre = list_movie.genre.charAt(0).toUpperCase() + list_movie.genre.toLowerCase().slice(1)
    let seo_title = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"
    let seo_descp = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"


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
    title="{seo_title}" 
    descp="{seo_descp}" 
    type="Website" />

<article class="mb-3">
    {#each list_genre as rec}
        <a data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs btn-outline btn-success m-1">{rec.movie_genre}</a>
    {/each}
</article>

<article class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</article>

<article class="glass2 xl:rounded-lg p-2 mb-5">
    <h1 class="p-2 mb-2 font-bold">ISBFILM - Kumpulan Film {genre} Terbaru dan Terlengkap</h1>
    <section class="grid grid-cols-8 gap-2">
        {#each list_movie.record as rec}
        <a href="/nonton/{rec.movie_slug}" class="card bg-base-200 shadow-xl rounded-md cursor-pointer p-1">
            <img
                style="border: 1px solid #1e152e;background-color: none;"
                class="object-cover rounded-md"
                alt="{rec.movie_title}"
                src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                use:lazy="{{src: rec.movie_thumbnail}}">
            <figure class="card-body p-2 w-full">
                <h2 class="text-xs w-full text-center font-mono">{rec.movie_title}</h2>
            </figure>
        </a>
        {/each}
    </section>  
</article>