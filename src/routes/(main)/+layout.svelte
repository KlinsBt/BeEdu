<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>










<svelte:head>
    <title>Berndt Education: Personalized Language Courses for You</title>
    <link rel="icon" href="/favicon.png" />
    <meta name="description" content="Personalized language courses in German, English, Spanish, and French. Tailored to your needs for effective learning and achieving your goals.">
    <meta name="keywords" content="language, education, courses, learn, online, english, german, french, spanish, personalized, virtual classes, zoom">
    <link rel="icon" type="image/png" href="/favicon.png">

    <meta property="og:title" content="Berndt Education: Personalized Language Courses for You" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education: Personalized Language Courses for You" />
    <meta property=“og:description“ content="Personalized language courses in German, English, Spanish, and French. Tailored to your needs for effective learning and achieving your goals." />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head>  

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