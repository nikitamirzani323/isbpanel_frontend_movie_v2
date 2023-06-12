<script>
    import { page } from "$app/stores";
    export let title;
    export let descp;
    export let type;
    // export let url;
    

    $: url = $page.url.href;

    // console.log($page.url.href)
</script>
<svelte:head>
    <title>{title}</title>
    <meta name="description" content="{descp}">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
    <meta name="author" content="resultsdbs.com">
    <link rel="canonical" href="{url}" />
    <meta name="theme-color" content="#2b2a33" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{descp}">
    <meta property="og:image" content="https://i.ibb.co/7Ypydpk/Screenshot-2.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{url}">
    <meta property="twitter:title" content="{title}">
    <meta property="twitter:description" content="{descp}">
    <meta property="twitter:image" content="https://i.ibb.co/7Ypydpk/Screenshot-2.png">
    {@html `<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "${type}",
            "name": "${title}",
            "url": "${url}",
        }
    </script>`}
</svelte:head>