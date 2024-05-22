<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>





<div class="app">
	
	<Header 
		mail_us="Mail Us:"
		call_us="Call Us:"
		link1="Home" 
		link2="BE Courses"
		sublink2_1="Education Travel" 
		link3="Corporate Clients"
		sublink3_1="Translation"
		sublink3_2="Interpretation"
		sublink3_3="Company Courses"
		link4="University Admissions"
		link5="Blog"
		link6="About Us" 
		link7="Contact"
	/> 

	<main>
		<slot />
	</main>
	
	<Footer 
		contact_us="Contact us"
		country1="Spain"
		country2="United Kingdom"
		privacy_policy="Privacy Policy"
	/>

</div>





<style>
</style>