<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {posts} = data;
</script>
<Seo 
    title="Home" 
    descp="ini halaman home" 
    type="Website" />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each posts as rec}
    <div class="p-1">
        <img src="{rec.thumbnailUrl}" alt="">
        <p>{rec.title}</p>
    </div>
{/each}