<script>
    import Seo from "$lib/Seo.svelte";
    import CardPanel from "$lib/Card.svelte";
    export let data;
    const {list_genre,list_movie,slug,seo_url} = data;
    // const genre = list_movie.genre
    const genre = list_movie.genre.charAt(0).toUpperCase() + list_movie.genre.toLowerCase().slice(1)
    let seo_title = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"
    let seo_descp = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"


    
</script>
<Seo 
    title="{seo_title}" 
    descp="{seo_descp}" 
    url="{seo_url}"
    type="Website" />



<CardPanel 
    card_title="ISBFILM - Kumpulan Film {genre} Terbaru dan Terlengkap"
    card_data={list_movie.record}/>
<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full">
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">ISBFILM</h3>
        <p class="text-xs lg:text-[14px]">Kumpulan film <strong>{genre}</strong>  streaming download terbaru dan terlengkap gratis subtitle indonesia.	Nonton film dengan resolusi 360p, 720p dan atau 1080p gratis. </p>
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
            <a data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs m-1">{rec.movie_genre}</a>
        {/each}
    </section>
</article>