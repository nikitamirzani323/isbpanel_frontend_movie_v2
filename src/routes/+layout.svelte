<script>
    import "../app.css";
    import Footer from "$lib/Footer.svelte";
    import Navbar from "./Navbar.svelte";
</script>
<main class="container mx-auto lg:px-1 xl:mt-0 max-w-screen-xl pb-2 ">
    <Navbar />
</main>
<main class="container mx-auto lg:px-2 text-base-content xl:mt-2 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5">
    <slot />
</main>
<Footer />