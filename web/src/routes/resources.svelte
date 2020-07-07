<script context="module">
  import client from '../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "resource"]{ title, "downloadUrl": document.asset->url}'
    ).then(refs => {
			return { refs };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
    import ResourceCard from '../components/ResourceCard.svelte';

    export let refs;
</script>

<h1>Resources</h1>

<h2>Archive Of Downloadable Documents</h2>

{#each refs as ref}
    <ResourceCard title={ref.title} downloadUrl={ref.downloadUrl} />
{/each}

<style>

</style>