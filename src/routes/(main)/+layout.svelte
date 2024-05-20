<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>





<div class="app">
	
	<Header 
		currentLanguage=0
		mail_us="Mail Us:"
		call_us="Call Us:"
		link1_text="Home" 
		link1="/" 
		link2_text="BE Courses"
		link2="/courses"
		sublink2_text_1="Education Travel"
		sublink2_1="/education-travel" 
		link3_text="Corporate Clients"
		link3="/corporate"
		sublink3_text_1="Translation"
		sublink3_1="/coming-soon"
		sublink3_text_2="Interpretation"
		sublink3_2="/coming-soon"
		sublink3_text_3="Company Courses"
		sublink3_3="/coming-soon"
		link4_text="University Admissions"
		link4="/uni-admissions"
		link5_text="Blog"
		link5="/blog"
		link6_text="About Us"
		link6="/about-us" 
		link7_text="Contact"
		link7="/contact" 
	/> 

	<main>
		<slot />
	</main>
	
	<Footer 
		contact_us="Contact us"
		country1="Spain"
		country2="United Kingdom"
		privacy_policy="Privacy Policy"
		privacy_policy_link="/privacy-policy"
	/>

</div>





<style>
</style>