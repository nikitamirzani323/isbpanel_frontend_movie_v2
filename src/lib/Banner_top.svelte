<script>
    export let data_banner = [];
</script>
<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-3 w-full px-1 lg:px-0">
    {#each data_banner as rec}
        {#if rec.banner_device == "WEB" && rec.banner_posisi == "TOP"}
        <a href="{rec.banner_urlwebsite}" target="_blank">
            <img src="{rec.banner_url}" alt="ISB138">
        </a>    
        {/if}
    {/each}
</article>