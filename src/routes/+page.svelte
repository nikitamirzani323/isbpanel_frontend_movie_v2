<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_genre, list_movie_new,list_movie_update,list_movie_random,seo_url} = data;

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
    title="ISBFILM Nonton Film dan Series Streaming Movie Layarkaca21 Dunia21 Bioskop Cinema21 Box Office Subtitle Indonesia Gratis Online Download - ISBFILM - LK21 - Layarkaca21 - Dunia21" 
    descp="ISBFILM Nonton Film dan Series Streaming Movie Layarkaca21 Dunia21 Bioskop Cinema21 Box Office Subtitle Indonesia Gratis Online Download - ISBFILM- LK21 - Layarkaca21 - Dunia21 Box Office Cinema21 Bioskop Terlengkap Terbaru" 
    url="{seo_url}"
    type="Website" />




<article class="glass2 xl:rounded-lg p-2 mb-5">
    <h1 class="p-2 mb-2 font-bold">ISBFILM Movie Terbaru</h1>
    <section class="grid grid-cols-2 lg:grid-cols-8 gap-2">
        {#each list_movie_new.record as rec}
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
<article class="glass2 xl:rounded-lg p-2 mb-2">
    <h1 class="p-2 mb-2 font-bold">ISBFILM Movie Rekomendasi</h1>
    <section class="grid grid-cols-2 lg:grid-cols-8 gap-2">
        {#each list_movie_random.record as rec}
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
<article class="glass2 xl:rounded-lg p-2 mb-2">
    <h1 class="p-2 mb-2 font-bold">ISBFILM Movie Update</h1>
    <section class="grid grid-cols-2 lg:grid-cols-8 gap-2">
        {#each list_movie_update.record as rec}
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
<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full">
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">ISBFILM</h3>
        <p class="text-xs lg:text-[14px]">
            <strong>Layarkaca21 – LK21 – Dunia21</strong>  adalah sebuah website hiburan yang menyajikan streaming film atau download movie gratis. Subtitle Indonesia.
        </p>
        <p class="text-xs lg:text-[14px]">
            Perlu diketahui, film-film yang terdapat pada web ini didapatkan dari web pencarian di internet. Kami tidak menyimpan file film tersebut di server sendiri dan kami hanya menempelkan link-link tersebut di website kami.
        </p>
        
    </section>
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">KATEGORI FILM</h3>
        {#each list_genre as rec}
            <a href="genre/{rec.movie_slug}" class="btn btn-xs m-1">{rec.movie_genre}</a>
        {/each}
    </section>
</article>