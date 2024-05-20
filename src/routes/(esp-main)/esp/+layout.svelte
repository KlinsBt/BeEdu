<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>










<svelte:head>
    <title>Berndt Education: Cursos de idiomas personalizados para usted</title>
    <link rel="icon" href="/favicon.png" />
    <meta name="description" content="Cursos de idiomas personalizados en alemán, inglés, español y francés. Adaptados a sus necesidades para un aprendizaje eficaz.">
    <meta name="keywords" content="idiomas, educación, cursos, aprender, online, inglés, alemán, francés, español, personalizado, clases virtuales, zoom">
    <link rel="icon" type="image/png" href="/favicon.png">

    <meta property="og:title" content="Berndt Education: Cursos de idiomas personalizados para usted" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education: Cursos de idiomas personalizados para usted" />
    <meta property=“og:description“ content="Cursos de idiomas personalizados en alemán, inglés, español y francés. Adaptados a sus necesidades para un aprendizaje eficaz." />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head>   

<div class="app">
	
	<Header
		currentLanguage=2
		mail_us="Envíenos Un Correo:"
		call_us="Llámenos:"
		link1_text="Inicio" 
		link1="/esp" 
		link2_text="Coursos BE"
		link2="/esp/courses"
		sublink2_text_1="Aprender, Inspirar Y Explorar"
		sublink2_1="/esp/education-travel" 
		link3_text="Particulares Y Empresas"
		link3="/esp/corporate"
		sublink3_text_1="Traducción"
		sublink3_1="/esp/coming-soon"
		sublink3_text_2="Interpretación"
		sublink3_2="/esp/coming-soon"
		sublink3_text_3="Empresa Cursos"
		sublink3_3="/esp/coming-soon"
		link4_text="Admisiones Universitarias"
		link4="/esp/uni-admissions"
		link5_text="Blog"
		link5="/esp/blog"
		link6_text="Quiénes Somos"
		link6="/esp/about-us" 
		link7_text="Contacto"
		link7="/esp/contact" 
	/>   

	<main>
		<slot />
	</main>
	
	<Footer 
		contact_us="Contacto"
		country1="España"
		country2="Reino Unido"
		privacy_policy="Política De Privacidad"
		privacy_policy_link="/esp/privacy-policy"
	/>

</div>










<style>
</style>