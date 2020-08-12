<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	
	export let segment;
</script>

<style>
	main {
		position: relative;
		box-sizing: border-box;
		padding: 0;
		margin: 0 auto;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		max-width: 56em;
	}
</style>


<main>

	<Nav {segment}/>

	<div>
		<slot></slot>
	</div>

	<Footer/>

</main>
