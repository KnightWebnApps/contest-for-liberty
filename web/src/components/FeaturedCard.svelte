<script>
    export let href = '/blog';
    export let title = 'Title';
</script>

<a {href}>
    <div class="card">
        <h2>Featured Post</h2>
        <h3>{ title }</h3>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .card {
        padding: .7em;
        background-color: var(--primary-color);
        border-radius: 7px;
        height: 150px;
        text-align: center;
    }

    h3 {
        margin-top: 0;
    }
</style>

