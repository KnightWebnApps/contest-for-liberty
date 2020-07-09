<script>
    import Link from './Link.svelte';

    const year = new Date().getFullYear()
</script>

<footer>
    <p>&copy; Contest For Liberty, LLC { year }</p>
    <div class="links">
        <Link href="/">Home</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/thanks"> Thanks</Link>
    </div>
</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin:0;
        padding: 0;
        width: 100%;
    }

    .links {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: .5em;
    }
</style>

