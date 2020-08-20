<svelte:head>
	<title>Memes</title>
</svelte:head>

<script context="module">
    import client from '../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "meme"]{ image, "url": image.asset->url}').then(memes => {
			return { memes };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
    export let memes;
</script>

<h1>Memes</h1>
<div class="memes">
    {#each memes as meme}
        <a class="meme-container" href={meme.url} download >
            <img src={meme.url} alt={meme.image.alt}>
        </a>
    {:else}
        <h2>Coming Soon!</h2>
    {/each}
</div>


<style>
    .memes {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
        gap: 1.5em;
    }

    img {
        width: 100%;
        height: 400px;
    }
</style>

