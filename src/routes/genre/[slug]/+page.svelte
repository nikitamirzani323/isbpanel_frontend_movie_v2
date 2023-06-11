<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_movie} = data;

    let list_genre = [
        {slug:"action",name:"Action"},
        {slug:"scifi",name:"Sci-fi"},
        {slug:"horror",name:"Horror"},
        {slug:"thailand",name:"Thailand"},
        {slug:"chinese",name:"Chinese"},
        {slug:"indonesia",name:"Indonesia"},
        {slug:"animation",name:"Animation"},
        {slug:"adventure",name:"Adventure"},
        {slug:"drama",name:"Drama"},
        {slug:"documentary",name:"Documentary"},
        {slug:"thriller",name:"Thriller"},
        {slug:"war",name:"War"},
        {slug:"family",name:"Family"},
        {slug:"fantasy",name:"Fantasy"},
        {slug:"western",name:"Western"},
        {slug:"porn",name:"porn"},
    ]
    // console.log(list_movie)

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
    title="Kumpulan Film Action Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21" 
    descp="Kumpulan Film Action Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21" 
    type="Website" />

<article class="mb-3">
    {#each list_genre as rec}
        <a href="{rec.slug}" class="btn btn-xs btn-outline btn-success m-1">{rec.name}</a>
    {/each}
</article>

<article class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</article>
{#each list_movie as rec}
    <article class="glass2 xl:rounded-lg p-2 mb-2">
        <h1 class="p-2 mb-2 font-bold">ISBFILM {rec.movie_category}</h1>
        <section class="grid grid-cols-8 gap-2">
        {#each rec.movie_list as rec2}
            <a href="/nonton/{rec2.movie_slug}" class="card bg-base-200 shadow-xl rounded-md cursor-pointer">
                <img
                    style="border: 1px solid #1e152e;background-color: none;"
                    class="img-thumbnail"
                    alt="{rec2.movie_title}"
                    src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                    use:lazy="{{src: rec2.movie_thumbnail}}">
                <figure class="card-body p-2 w-full">
                    <h2 class="text-xs w-full text-center font-mono">{rec2.movie_title}</h2>
                </figure>
            </a>
        {/each}
        </section>  
    </article>
{/each}