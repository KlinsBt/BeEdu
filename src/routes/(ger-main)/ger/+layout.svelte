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
		currentLanguage=1
		mail_us="Mail Uns:"
		call_us="Ruf Uns An:"
		link1_text="Home" 
		link1="/ger" 
		link2_text="BE-Kurse"
		link2="/ger/courses"
		sublink2_text_1="Bildung und Reisen"
		sublink2_1="/ger/education-travel" 
		link3_text="Firmenkunden"
		link3="/ger/corporate"
		sublink3_text_1="Übersetzung"
		sublink3_1="/ger/coming-soon"
		sublink3_text_2="Dolmetschen"
		sublink3_2="/ger/coming-soon"
		sublink3_text_3="Frimenkurse"
		sublink3_3="/ger/coming-soon"
		link4_text="Universitätszulassungen"
		link4="/ger/uni-admissions"
		link5_text="Blog"
		link5="/ger/blog"
		link6_text="Über Uns"
		link6="/ger/about-us" 
		link7_text="Kontakt"
		link7="/ger/contact" 
	/>   

	<main>
		<slot />
	</main>
	
	<Footer 
		contact_us="Kontakt"
		country1="Spanien"
		country2="Vereinigtes Königreich"
		privacy_policy="Datenschutzerklärung"
		privacy_policy_link="/ger/privacy-policy"
	/>

</div>





<style>
</style>