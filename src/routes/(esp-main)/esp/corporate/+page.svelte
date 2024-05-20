<script>
	
import PrivCourses from "$lib/components/sub-sites/corporate-clients/private-courses1.svelte";

</script>
    









<div class="main-container">
    <div class="page-title-container"> 
        <h1>Nuestros cursos de BE para empresas</h1>
    </div>
    <div class="comp">
        <PrivCourses
            title="Cursos individuales en línea"
            point1="Aprende a tu ritmo"
            point2="Apoyo personal"
            point3="Consultas individuales en vivo con su profesor"
            level="Nivel"
            level_text="A1, A2, B1, B2, C1, C2"
            start="Inicio"
            start_text="En cualquier momento"
            duration="Duración"
            duration_text="4 semanas por subnivel; A1 y A2 12 semanas cada uno"
            hours="Horas por semana"
            hours_text="8 horas de autoaprendizaje por semana 2-4 clases en directo 
            después de la consulta"
            participants="Participantes"
            participants_text="Solo tú y tu profesor"
            platform="Acceso a la plataforma de aprendizaje"
            platform_text="Duración de todo el curso"
            button="Contacte Con Nosotros"
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

.comp {
    margin: 50px 0px;
}

</style>