<script>
    import Button from '../widgets/Button.svelte';

    export let title;
    export let downloadUrl = '';
    export let link = '';
</script>

<div class="card">
    <h3>{ title }</h3>

    {#if downloadUrl !== ''}
        <a href={downloadUrl} download >Download It</a>
    {/if}

    {#if link !== ''}
        <a href={ link }>View Original Source</a>
    {/if}
</div>

<style>
    .card {
        padding: 1em;
        background-color: var(--primary-color);
        border-radius: 7px;
        margin: 1em 0;
        /* height: 100px; */
        /* text-align: center; */
    }

    h3 {
        margin-top: 0;
    }

    a {
        padding: .5em .7em;
        background-color: var(--secondary-color);
        border-radius: 7px;
        text-decoration: none;
        cursor: pointer;
    }
</style>

