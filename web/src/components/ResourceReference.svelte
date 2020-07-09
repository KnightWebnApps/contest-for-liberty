<script>
    import ResourceCard from './ResourceCard.svelte';

    export let title;
    export let downloadUrl;
    export let link;
</script>

<div class="resource">
    <ResourceCard {title} {downloadUrl} {link} />
</div>

<style>
    .resource {
        margin: 1em 0;
    }
</style>

