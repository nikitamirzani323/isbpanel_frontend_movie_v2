<script>
    export let card_title = "";
    export let card_data = [];

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
<article class="bg-none lg:glass xl:rounded-lg p-2 mb-5">
    <h1 class="mb-2 font-bold">{card_title}</h1>
    <section class="grid grid-cols-2 lg:grid-cols-8 gap-2">
        {#each card_data as rec}
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