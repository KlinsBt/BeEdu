<script>
	import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import '../styles.css';
	// import { Analytics } from '@vercel';
	import { dev } from '$app/environment';

</script>

<div class="app">
	<Header />
    <Navbar />

	<main>
		<slot />
	</main>
	
	<Footer />

</div>

<style>
</style>