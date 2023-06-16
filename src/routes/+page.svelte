<script>
    import Seo from "$lib/Seo.svelte";
    import CardPanel from "$lib/Card.svelte";
    export let data;
    const {list_genre, list_movie_new,list_movie_update,list_movie_random,seo_url} = data;
</script>
<Seo 
    title="ISBFILM Nonton Film dan Series Streaming Movie Layarkaca21 Dunia21 Bioskop Cinema21 Box Office Subtitle Indonesia Gratis Online Download - ISBFILM - LK21 - Layarkaca21 - Dunia21" 
    descp="ISBFILM Nonton Film dan Series Streaming Movie Layarkaca21 Dunia21 Bioskop Cinema21 Box Office Subtitle Indonesia Gratis Online Download - ISBFILM- LK21 - Layarkaca21 - Dunia21 Box Office Cinema21 Bioskop Terlengkap Terbaru" 
    url="{seo_url}"
    type="Website" />

<CardPanel 
    card_title="ISBFILM Movie Terbaru"
    card_data={list_movie_new.record}/>
<CardPanel 
    card_title="ISBFILM Movie Rekomendasi"
    card_data={list_movie_random.record}/>
<CardPanel 
    card_title="ISBFILM Movie Update"
    card_data={list_movie_update.record}/>
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