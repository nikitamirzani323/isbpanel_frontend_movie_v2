<script>
    import { page } from "$app/stores";

    $: routeId = $page.route.id;
</script>
<div class="navbar bg-base-100">
    <div class="navbar-start">
        
        
    </div>
    <div class="navbar-center justify-center lg:flex">
        <a href="/" class="btn btn-ghost w-1/2">
            <img class="w-[100%]" src="https://isbfilm.xyz/isbfilm.png" alt="">
        </a>
    </div>
    <div class="navbar-end p-2">
        <div class="hidden lg:flex justify-end p-2 bg-base-200 w-1/2 cursor-pointer rounded-lg">
            <p class="pr-2">Quick Search</p>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>          
        </div>
    </div>
</div>