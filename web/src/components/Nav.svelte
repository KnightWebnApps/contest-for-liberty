<script>
	import DonationDropdown from '../components/DonationDropdown.svelte';

	import Modal from 'svelte-simple-modal';

	export let segment;
</script>

<style>
	nav {
		border-bottom: 3px solid var(--secondary-color);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.brand {
		float: right;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--primary-color);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	@media(max-width: 460px){
		.brand {
			display: none;
		}

	}

	@media(max-width: 360px){
		nav {
			padding: 0 .3em;
		}

		a {
			padding: 1em .3em;
		}
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
		<li><a class='{segment === "resources" ? "selected" : ""}' href='resources'>Resources</a></li>
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Blog</a></li>
		<li><a class='{segment === "podcast" ? "selected" : ""}' href='podcast'>Podcast</a></li>
		<li > <Modal> <DonationDropdown /> </Modal> </li>
		<li class="brand">LOGO</li>
	</ul>
</nav>

<Modal></Modal>