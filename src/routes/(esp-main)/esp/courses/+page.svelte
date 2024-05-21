<script>
	
import Course from "$lib/components/sub-sites/education-travel/course3.svelte";
    
</script>










<div class="main-container">
    <div class="page-title-container">
        <h1>Nuestros Cursos De BE</h1>
        <h3>Aquí puede consultar nuestro catálogo de cursos de Berndt Education.</h3>
    </div>
    <div class="boxes">
        <Course 
            box_lang_title="BE Alemán" 
            background_img="/img/flags/ger.png"
            p1="Aprenda Alemán desde casa a través de Zoom con y 
            un atractivo sistema de aprendizaje."
            p2="Grupos reducidos"
            p3="4 veces por semana"
            p4="De lunes a jueves"
            link="/esp/contact"
            button="Únete Ahora" 
        />
        <Course 
            box_lang_title="BE Español" 
            background_img="/img/flags/esp.png"
            p1="Aprenda Español desde casa a través de Zoom con y 
            un atractivo sistema de aprendizaje."
            p2="Grupos reducidos"
            p3="4 veces por semana"
            p4="De lunes a jueves"
            link="/esp/contact"
            button="Únete Ahora" 
        />
        <Course 
            box_lang_title="BE Inglés" 
            background_img="/img/flags/uk.png"
            p1="Aprenda Inglés desde casa a través de Zoom con y 
            un atractivo sistema de aprendizaje."
            p2="Grupos reducidos"
            p3="4 veces por semana"
            p4="De lunes a jueves"
            link="/esp/contact"
            button="Únete Ahora" 
        />
        <Course 
            box_lang_title="BE Francés" 
            background_img="/img/flags/frn.png"
            p1="Aprenda Francés desde casa a través de Zoom con y 
            un atractivo sistema de aprendizaje."
            p2="Grupos reducidos"
            p3="4 veces por semana"
            p4="De lunes a jueves"
            link="/esp/contact"
            button="Únete Ahora" 
        />
    </div>
</div>

    








<style>

.main-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
}

.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

.boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
}

</style>