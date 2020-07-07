<script>
    export let onClick = () => {};
    export let text = 'text';
</script>

<button on:click={onClick}>{ text }</button>

<style>
    button {
        border: none;
        border-radius: 7px;
        padding: .5em .7em;
        margin: 1em;
        background-color: var(--primary-color);
        color: var(--extra-light);
    }
</style>

