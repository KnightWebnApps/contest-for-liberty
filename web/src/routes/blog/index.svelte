<svelte:head>
	<title>Blog</title>
</svelte:head>

<script context="module">
  import client from '../../sanityClient'
	export function preload({ params, query }) {
    return client.fetch('*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)').then(posts => {
			return { posts };
		}).catch(err => this.error(500, err));
	}
</script>

<script>
	import ResourceCard from '../../components/ResourceCard.svelte'

	export let posts;

	function formatDate(date) {
		return new Date(date).toLocaleDateString()
	}
</script>



<h1>Recent Posts</h1>

<ul>
	{#each posts as post}
		<li>
			<a rel='prefetch' href='blog/{post.slug.current}'>
				<ResourceCard title={post.title}/>
			</a> 
		</li>
	{/each}
</ul>

<style>
	ul {
		margin: 0;
		padding: 0;
		line-height: 1.5;
		list-style: none;
	}

	li {
		margin: 1em 0;
	}

	a {
		text-decoration: none;
	}
</style>