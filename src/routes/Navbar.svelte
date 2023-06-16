<script>
    import { page } from "$app/stores";

    
    export let data_genre = [];
   
    let isModal_search = false;
    let isModal_category = false;
    let filterMovieSearch = [];
    let listMovieSearch = [];
    let searchMovie = "";
    // $: routeId = $page.route.id;

    const call_genre = () => {
        isModal_category = true
        // fetch_resultall()
	};
    const call_sarchmovie = () => {
        isModal_search = true
        // fetch_resultall()
	};
    async function fetch_moviesearch() {
        listMovieSearch = [];
        let flag_search = false;
        if(searchMovie != ""){
            flag_search = true;
        }
        if(searchMovie.length > 2){
            flag_search = true;
        }
        if(flag_search){
            const res = await fetch("/api/moviesearch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: searchMovie.toLowerCase(),
                }),
            });
            const json = await res.json();
            if (json.status == 200) {
                let record = json.record;
                if (record != null) {
                    for (var i = 0; i < record.length; i++) {
                        listMovieSearch = [
                            ...listMovieSearch,
                            {
                                movie_slug: record[i]["movie_slug"],
                                movie_thumbnail: record[i]["movie_thumbnail"],
                                movie_title: record[i]["movie_title"],
                            },
                        ];
                    }
                }
            } 
        }
        
    }
    const handleKeyboardsearchmovie_checkenter = (e) => {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 13) {
            filterMovieSearch = [];
            listMovieSearch = [];
            fetch_moviesearch();
        }  
    };
    $: {
        if (searchMovie) {
            filterMovieSearch = listMovieSearch.filter((item) =>
                item.movie_title
                    .toLowerCase()
                    .includes(searchMovie.toLowerCase())
            );
            console.log(filterMovieSearch.length)
        } else {
            filterMovieSearch = [...listMovieSearch];
        }
    }

    const loaded = new Map();
    function lazy(node, data) {
		if (loaded.has(data.src)) {
			node.setAttribute('src', data.src);
		} else {
			// simulate slow loading network
			setTimeout(() => {
				const img = new Image();
				img.src = data.src;
				img.onload = () => {
					loaded.set(data.src, img);
					node.setAttribute('src', data.src); 
				};
			}, 100);
		}

		return {
			destroy(){} // noop
		};
	}
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
        <div on:click={() => {
                call_sarchmovie();
            }} class="hidden lg:flex justify-end p-2 bg-base-200 w-1/2 cursor-pointer rounded-lg">
            <p class="pr-2">Quick Search</p>
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
        <svg on:click={() => {
                call_genre();
            }}    
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg> 
    </div>
</div>

<div on:click={() => {
    call_sarchmovie();
    }} class="flex lg:hidden justify-center p-2  bg-base-200 w-full cursor-pointer rounded-md px-2">
    <p class="pr-2">Quick Search</p>
    <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
</div>

<input type="checkbox" id="my-modal-moviesearch" class="modal-toggle" bind:checked={isModal_search}>
<div class="modal" on:click|self={()=>isModal_search = false}>
    <div class="modal-box relative select-none max-w-full lg:max-w-xl lg:h-[600px] h-full  rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-moviesearch" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">QUICK SEARCH MOVIE</h3>
        <section class="mt-5">
            <input
                bind:value={searchMovie} 
                on:keypress={handleKeyboardsearchmovie_checkenter}
                type="text" placeholder="Search Movie + Enter" class="input input-bordered w-full rounded-md input-sm" />
            {#if filterMovieSearch != ""}
                <div class="flex flex-col justify-start mt-4 h-screen  lg:h-[450px]  max-w-full overflow-y-scroll" >
                    {#each filterMovieSearch as rec}
                    <a data-sveltekit-reload href="/nonton/{rec.movie_slug}" class="cursor-pointer bg-base-200 mb-2 rounded-lg p-2">
                        <div class="flex flex-row">
                            <div class="flex w-[3rem] text-center ">
                                <img
                                    style="border: 1px solid #1e152e;background-color: none;"
                                    class="object-cover rounded-md w-[50px]"
                                    alt="{rec.movie_title}"
                                    src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                                    use:lazy="{{src: rec.movie_thumbnail}}">
                            </div>
                            <div class="flex flex-1">
                                <p class="p-1 text-xs lg:text-sm text-justify">
                                    {rec.movie_title}
                                </p>
                            </div>
                        </div>
                    </a>
                    {/each}
                </div>
            {:else}
                <div class="flex mt-4 text-center justify-center p-4 text-sm">
                    No results "{searchMovie}"
                </div>
            {/if}
        </section>
    </div>
</div>
<input type="checkbox" id="my-modal-moviecategory" class="modal-toggle" bind:checked={isModal_category}>
<div class="modal" on:click|self={()=>isModal_category = false}>
    <div class="modal-box relative select-none max-w-full lg:max-w-xl  rounded-none lg:rounded-lg p-2 lg:p-4 overflow-hidden">
        <label for="my-modal-moviecategory" class="btn btn-xs lg:btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-xs lg:text-sm font-bold mt-1">GENRE</h3>
        <section class="mt-2">
            {#each data_genre as rec}
                <a  data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs btn-outline btn-success m-1">{rec.movie_genre}</a>
            {/each}
        </section>
    </div>
</div>