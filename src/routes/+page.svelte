<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {posts} = data;
</script>
<Seo 
    title="Home" 
    descp="ini halaman home" 
    type="Website" />

<section class="mb-3">
    <a class="btn btn-sm btn-outline btn-primary">ACTION</a>
    <a class="btn btn-sm btn-outline btn-primary">SCI-FI</a>
    <a class="btn btn-sm btn-outline btn-primary">HORROR</a>
    <a class="btn btn-sm btn-outline btn-primary">THAILAND</a>
    <a class="btn btn-sm btn-outline btn-primary">CHINESE</a>
    <a class="btn btn-sm btn-outline btn-primary">INDONESIA</a>
    <a class="btn btn-sm btn-outline btn-primary">ANIMATION</a>
    <a class="btn btn-sm btn-outline btn-primary">ADVENTURE</a>
    <a class="btn btn-sm btn-outline btn-primary">DRAMA</a>
    <a class="btn btn-sm btn-outline btn-primary">DOCUMENTARY</a>
    <a class="btn btn-sm btn-outline btn-primary">THRILLER</a>
    <a class="btn btn-sm btn-outline btn-primary">WAR</a>
    <a class="btn btn-sm btn-outline btn-primary">FAMILY</a>
    <a class="btn btn-sm btn-outline btn-primary">FANTASY</a>
    <a class="btn btn-sm btn-outline btn-primary">WESTERN</a>
    <a class="btn btn-sm btn-outline btn-primary">PORN</a>
</section>

<section class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</section>
<section class="glass2 xl:rounded-lg p-2">
    <h1>ISBMovie Terbaru</h1>
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
</section>

<h1>ISBMovie Popular</h1>