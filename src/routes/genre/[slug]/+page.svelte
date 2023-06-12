<script>
    import Seo from "$lib/Seo.svelte";
    export let data;
    const {list_genre,list_movie,slug,seo_url} = data;
    // const genre = list_movie.genre
    const genre = list_movie.genre.charAt(0).toUpperCase() + list_movie.genre.toLowerCase().slice(1)
    let seo_title = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"
    let seo_descp = "Kumpulan Film "+genre+" Streaming Movie Subtitle Indonesia Download Terlengkap dan Terbaru- ISBFILM - LK21 - Layarkaca21 - Dunia21"


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
<Seo 
    title="{seo_title}" 
    descp="{seo_descp}" 
    url="{seo_url}"
    type="Website" />


<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-3 w-full">
    <img src="https://res.cloudinary.com/indosuperbet/image/upload/v1655385218/ADV/banner-gift_wp9tdh.gif" alt="ISB388">
    <img src="https://res.cloudinary.com/indosuperbet/image/upload/v1655440892/ADV/banner-isb388_dxz3im.gif" alt="ISB388">
</article>

<article class="glass2 xl:rounded-lg p-2 mb-5">
    <h1 class="p-2 mb-2 font-bold">ISBFILM - Kumpulan Film {genre} Terbaru dan Terlengkap</h1>
    <section class="grid grid-cols-2 lg:grid-cols-8 gap-2">
        {#each list_movie.record as rec}
        <a href="/nonton/{rec.movie_slug}" class="card bg-base-200 shadow-xl rounded-md cursor-pointer p-1">
            <img
                style="border: 1px solid #1e152e;background-color: none;"
                class="object-cover rounded-md"
                alt="{rec.movie_title}"
                src="https://imagedelivery.net/W-Usm3AjeE17sxpltvGRNA/fd0287a2-353d-4b47-9a6c-9c8df2ab3f00/public"
                use:lazy="{{src: rec.movie_thumbnail}}">
            <figure class="card-body p-2 w-full">
                <h2 class="text-xs w-full text-center font-mono">{rec.movie_title}</h2>
            </figure>
        </a>
        {/each}
    </section>  
</article>
<article class="grid grid-cols-1 lg:grid-cols-2 gap-1 w-full">
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">ISBFILM</h3>
        <p class="text-xs lg:text-[14px]">
            <strong>Layarkaca21 – LK21 – Dunia21</strong>  adalah sebuah website hiburan yang menyajikan streaming film atau download movie gratis. Subtitle Indonesia.
        </p>
        <p class="text-xs lg:text-[14px]">
            Perlu diketahui, film-film yang terdapat pada web ini didapatkan dari web pencarian di internet. Kami tidak menyimpan file film tersebut di server sendiri dan kami hanya menempelkan link-link tersebut di website kami.
        </p>
        <p class="text-xs lg:text-[14px]">
            <a href="/">ANTV Live Streaming</a>
            <a href="/">Apa itu Layarkaca21 / Lk21 / Dunia21 ?</a>
            <a href="/">Bioskopkeren – Nonton Streaming Koleksi Film Terlengkap Bioskop keren</a>
            <a href="/">Cara menginstall Opera VPN – Gratis</a>
            <a href="/">Daftar Playlist</a>
            <a href="/">Dashboard Anggota</a>
            <a href="/">Digital Millennium Copyright Act (DMCA)</a>
            <a href="/">Film dengan Komentar Terbanyak</a>
            <a href="/">Film Terpopuler 2 Bulan Belakangan Ini – Nonton Streaming Download Movie</a>
            <a href="/">Film Unggulan Hari Ini</a>
            <a href="/">Halaman Anggota</a>
            <a href="/">IDLIX Streaming Film / Download Movie Sub Indo</a>
            <a href="/">IndoXX1 – Nonton Movie 21, Download Film INDOXX1 Ganool LK21</a>
            <a href="/">IndoXX1 – Streaming Online</a>
            <a href="/">Layarkaca21 – Nonton Streaming Subtitle Indonesia</a>
            <a href="/">Lk 21 – Nonton Streaming Film Box Office dan Download</a>
            <a href="/">Lk21 – Nonton Streaming Film Box Office dan Download</a>
            <a href="/">Lk21 Rebahin Online Streaming</a>
            <a href="/">LK21 XXI Online Indonesia – Nonton Koleksi Film LK 21 .ME LK21 .TV Terbaru</a>
            <a href="/">NET.TV Live Streaming</a>
            <a href="/">Nonton Film Baru Saja Diupload Download Streaming Movie Subtitle Indonesia</a>
            <a href="/">Nonton Film Berdasarkan Rating IMDb Tertinggi – Terendah Streaming Gratis Download</a>
            <a href="/">Pemasangan Iklan</a>
            <a href="/">Pertanyaan Yang Sering Diajukan – Frequently Asked Questions</a>
            <a href="/">Petunjuk Cara Download Film</a>
            <a href="/">Privacy Policy</a>
            <a href="/">RCTI Live Streaming</a>
            <a href="/">Rekomendasi Film Pintar</a>
            <a href="/">Series Upload Terbaru Lk21</a>
            <a href="/">Streaming Download Film Gratis Sub Indonesia</a>
            <a href="/">Urutan Film Berdasarkan Judul Movie Subtitle Indonesia Streaming Download</a>
            <a href="/">Urutan Film Berdasarkan Tahun Pembuatan Nonton Download Streaming Movie</a>
            <a href="/">YMTV Live Streaming</a>
            <a href="/">You are the Heroes !</a>
        </p>
    </section>
    <section class="w-full p-1">
        <h3 class="text-xs lg:text-[14px]">KATEGORI FILM</h3>
        {#each list_genre as rec}
            <a data-sveltekit-reload href="/genre/{rec.movie_slug}" class="btn btn-xs m-1">{rec.movie_genre}</a>
        {/each}
    </section>
</article>