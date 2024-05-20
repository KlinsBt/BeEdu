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