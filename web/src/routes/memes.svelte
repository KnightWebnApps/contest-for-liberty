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

{#each memes as meme}
    <img src={meme.url} alt={meme.image.alt}>
{:else}
    <h2>Coming Soon!</h2>
{/each}


<style>
    img {
        width: 100%;
    }
</style>

