<script>
	import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import '../styles.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	
	inject({ mode: dev ? 'development' : 'production' });
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