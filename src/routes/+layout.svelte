<script>
    import "../app.css";
    import Navbar from "./Navbar.svelte";
</script>
<Navbar />
<main class="container mx-auto lg:px-2 text-base-content xl:mt-7 max-w-screen-xl bg-opacity-60 pb-5 xl:pb-5">
    <slot />
</main>