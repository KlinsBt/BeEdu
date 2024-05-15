<script>
import Header from "./Header.svelte";
import Navbar from "./Navbar.svelte";
import Footer from "./Footer.svelte";
import "../styles.css";
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
	.app {
		min-height: 100vh;
		background-color: #1c1d25;
	}
</style>