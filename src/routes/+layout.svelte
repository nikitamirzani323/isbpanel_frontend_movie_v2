<script>
    import "../app.css";
    import Navbar from "./Navbar.svelte";
</script>
<Navbar />
<main class="p-0 lg:p-3 lg:max-w-6xl lg:mx-auto">
    <slot />
</main>