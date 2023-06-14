<script>
    import "../app.css";
    import BannerTop from "$lib/Banner_top.svelte";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "./Navbar.svelte";

    export let data;
    const {list_genre,list_banner} = data;
    // console.log(list_genre)
    // console.log(list_banner)
</script>
<header class="container mx-auto lg:px-1 xl:mt-0 max-w-screen-xl pb-2 ">
    <Navbar data_genre={list_genre} />
</header>
<main class="container mx-auto lg:px-2 text-base-content xl:mt-2 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5">
    <BannerTop data_banner={list_banner} />
    <slot />
</main>
<Footer />