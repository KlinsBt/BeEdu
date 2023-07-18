<script>
	import Header from './Header.svelte';
    import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import '../styles.css';
	import { Analytics } from '@vercel/analytics';
	import { dev } from '$app/environment';

	inject({
		mode: dev ? 'development' : 'production',
	});
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