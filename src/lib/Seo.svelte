<script>
    import { page } from "$app/stores";
    export let title;
    export let descp;
    export let type;
    
    $: url = $page.url.href;
</script>
<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{descp}">
    {@html `<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "${type}",
            "name": "${title}",
            "url": "${url}",
        }
    </script>`}
</svelte:head>