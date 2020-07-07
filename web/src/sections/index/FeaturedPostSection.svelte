<script>
    import client from '../../sanityClient';

    import FeaturedCard from '../../components/FeaturedCard.svelte';
</script>

<section id="featured-post">

{#await client.fetch('*[_type == "post"][0]')}
    <FeaturedCard href="/" title="...Loading"/>
{:then value}
    <FeaturedCard href={`/blog/${value.slug.current}`} title={value.title} />
    
{:catch error}
    <FeaturedCard title="Failed To Load" />
{/await}

</section>

<style>
    /* your styles go here */
</style>

