<script>
    import { page } from "$app/stores";

    
    export let data_genre = [];
   
    let isModal_category = false;
    $: routeId = $page.route.id;

    const call_genre = () => {
        isModal_category = true
        // fetch_resultall()
	};
    
</script>
<div class="navbar bg-base-100">
    <div class="navbar-start">
        
        
    </div>
    <div class="navbar-center justify-center lg:flex">
        <a href="/" class="btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent w-1/2">
            <img class="w-1/2 lg:w-[100%]" src="https://isbfilm.xyz/isbfilm.png" alt="">
        </a>
    </div>
    <div class="navbar-end p-2 gap-1">
        <div class="hidden lg:flex justify-end p-2 bg-base-200 w-1/2 cursor-pointer rounded-lg">
            <p class="pr-2">Quick Search</p>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
                
        </div>
        <svg
            on:click={() => {
                call_genre();
            }}    
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg> 
    </div>
</div>

<input type="checkbox" id="my-modal-resulttogel" class="modal-toggle" bind:checked={isModal_category}>
<div class="modal" on:click|self={()=>isModal_category = false}>
    <div class="modal-box relative select-none max-w-full lg:max-w-xl  rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-resulttogel" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">GENRE</h3>
        <section class="">
            {#each data_genre as rec}
                <a  data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs btn-outline btn-success m-1">{rec.movie_genre}</a>
            {/each}
        </section>
    </div>
</div>