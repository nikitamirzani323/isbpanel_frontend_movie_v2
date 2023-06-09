<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {posts} = data;

    let list_genre = [
        {slug:"action",name:"Action"},
        {slug:"scifi",name:"Sci-fi"},
        {slug:"horror",name:"Horror"},
        {slug:"thailand",name:"Thailand"},
        {slug:"chinese",name:"Chinese"},
        {slug:"indonesia",name:"Indonesia"},
        {slug:"animation",name:"Animation"},
        {slug:"adventure",name:"Adventure"},
        {slug:"adventure",name:"Drama"},
        {slug:"adventure",name:"Documentary"},
        {slug:"adventure",name:"Thriller"},
        {slug:"adventure",name:"War"},
        {slug:"adventure",name:"Family"},
        {slug:"adventure",name:"Fantasy"},
        {slug:"adventure",name:"Western"},
        {slug:"adventure",name:"porn"},
    ]
</script>
<Seo 
    title="Home" 
    descp="ini halaman home" 
    type="Website" />

<section class="mb-3">
    {#each list_genre as rec}
        <a href="genre/{rec.slug}" class="btn btn-sm btn-outline btn-success m-1">{rec.name}</a>
    {/each}
</section>

<section class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</section>
<section class="glass2 xl:rounded-lg p-2">
    <section class="grid grid-cols-6 gap-3">
    {#each posts as rec}
        <a href="/nonton/super-mario-bross" class="card bg-base-200 shadow-xl rounded-md cursor-pointer">
            <figure>
                <img src="https://image.tmdb.org/t/p/w780/{rec.poster_path}" alt="{rec.title}" />
            </figure>
            <div class="card-body p-2 w-full">
                <h2 class="text-xs w-full text-center font-mono">{rec.title}</h2>
            </div>
        </a>
    {/each}
    </section>
    <center class="mt-5">
        <button class="btn btn-primary w-[320px]">Tampilkan Lainnya</button>
    </center>
</section>