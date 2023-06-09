<script>
    export let data;
    const {slug,content} = data;
</script>
<section class="grid grid-cols-2 gap-1 mb-3">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
    <img src="https://s1.makimbo.xyz/assets/player-single.gif" alt="">
</section>
<article class="lg:flex justify-between w-full gap-2">
    <section class="w-full">
        <iframe width="100%" height="500" src="https://dooood.com/e/kv01syii877b" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h1>{slug}</h1>
            <p>{content}</p>
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