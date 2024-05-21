<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>










<svelte:head>
    <title>Berndt Education: Personalisierte Sprachkurse für Sie</title>
    <link rel="icon" href="/favicon.png" />
    <meta name="description" content="Personalisierte Sprachkurse in Deutsch, Englisch, Spanisch und Französisch. Maßgeschneidert auf Ihre Bedürfnisse für effektives Lernen.">
    <meta name="keywords" content="sprache, bildung, kurse, lernen, online, englisch, deutsch, französisch, spanisch, personalisiert, virtuelle klassen, zoom">
    <link rel="icon" type="image/png" href="/favicon.png">

    <meta property="og:title" content="Berndt Education: Personalisierte Sprachkurse für Sie" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education: Personalisierte Sprachkurse für Sie" />
    <meta property=“og:description“ content="Personalisierte Sprachkurse in Deutsch, Englisch, Spanisch und Französisch. Maßgeschneidert auf Ihre Bedürfnisse für effektives Lernen." />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head>  

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