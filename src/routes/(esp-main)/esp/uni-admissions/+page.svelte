<script>

import ImgBoxes from "$lib/components/sub-sites/uni-admissions/img-text-boxes.svelte";
import Services from "$lib/components/sub-sites/uni-admissions/services.svelte";
    
</script>


    
    
    
    
    
    
    
    
<section>

    <div class="page-title-container"> 
        <h1>Consultoría de Admisiones Universitarias</h1>
    </div>

    <ImgBoxes 
        box_1_text="Berndt Education ofrece apoyo integral y personalizado 
        para ayudar a los estudiantes a acceder a las mejores universidades del 
        mundo. Nuestro equipo de consultores experimentados tiene un historial 
        probado de resultados satisfactorios para nuestros clientes."

        box_2_text="13 años de experiencia como consultor y líder de programas educativos de alto nivel en el Reino Unido, 
        y ha trabajado con cientos de estudiantes en instituciones instituciones de clase mundial como Oxford, Cambridge, Londres 
        y la Universidad de Harvard. 
        Los tutores de Berndt Education diseñarán exitosos planes académicos y profesionales personalizados para los estudiantes. 
        En nuestra consultoría, nos 
        enorgullecemos de nuestro equipo de consultores experimentados. Todos 
        nuestros tutores han sido responsables de admisiones y/o han impartido 
        clases para la Universidad de Oxford. Esto proporciona una visión única 
        y apoyo en el proceso de admisión de las mejores universidades, lo que 
        nos permite ofrecer un enfoque integral y estratégico de las admisiones 
        universitarias."

        box_3_text="Nuestro equipo de asesores con experiencia en admisiones 
        en Oxford se dedica a proporcionar apoyo personalizado a cada estudiante, 
        cubriendo todos los aspectos del proceso de universidad, experiencia 
        laboral, preparación de entrevistas, preparación de exámenes de admisión, 
        solicitud de becas y mucho más. experiencia laboral, preparación de 
        entrevistas, preparación de exámenes de admisión, solicitud de becas y 
        mucho más. Su profundo Su profundo conocimiento y experiencia nos permiten 
        desarrollar planes académicos y profesionales personalizados para los 
        estudiantes, maximizando sus posibilidades de admisión en las mejores 
        universidades de todo el mundo. Nuestro equipo de experimentados consultores, 
        con su amplia experiencia y conocimientos, ofrece una oferta única a 
        los estudiantes de todo el mundo. una oferta única para estudiantes de 
        todo el mundo."
    />

    <div class="services-container">
        <Services 
            bronze_title="Bronce"
            bronze_info="Apoyo personalizado adaptado a las necesidades y al presupuesto."
            bronze_bulletpoint_1="- Selección de curso y universidad/colegi"
            bronze_bulletpoint_2="- Experiencia laboral"
            bronze_bulletpoint_3="- Preparación de la entrevista"
            bronze_bulletpoint_4="- Preparación del examen de admisión"
            bronze_bulletpoint_5="- Solicitud de becas"
            bronze_bulletpoint_6="... y más"

            silver_title="Plata"
            silver_info="Apoyo estratégico integral en el proceso de solicitud adaptado a 
            cada estudiante."
            silver_bulletpoint_1="- Selección de curso y universidad/colegi"
            silver_bulletpoint_2="- Experiencia laboral"
            silver_bulletpoint_3="- Preparación de la entrevista"
            silver_bulletpoint_4="- Preparación del examen de admisión"
            silver_bulletpoint_5="- Solicitud de becas"
            silver_bulletpoint_6="... y más"

            gold_title="Oro"
            gold_info="Apoyo estratégico integral en el proceso de solicitud adaptado a 
            cada estudiante."
            gold_bulletpoint_1="- Selección de curso y universidad/colegi"
            gold_bulletpoint_2="- Experiencia laboral"
            gold_bulletpoint_3="- Preparación de la entrevista"
            gold_bulletpoint_4="- Preparación del examen de admisión"
            gold_bulletpoint_5="- Solicitud de becas"
            gold_bulletpoint_6="- Comprobación de las solicitudes UCAS, que incluye asesoramiento 
            sobre el informe del tutor, la declaración personal, áreas complementarias como 
            voluntariado, experiencia laboral, concursos, y más."

            application_check="Verificación de la solicitud"
            button="Contacto"
            button_link="/esp/contact"
        />
    </div>
</section>










<style>

.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

.services-container {
    display: grid;
    justify-items: center;
    align-items: end;
    grid-template-columns: auto auto auto;
    margin: 50px 0px;
}

@media (min-width: 550px) and (max-width: 775px) {
    .services-container {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 371px) and (max-width: 549px) {
    .services-container {
        grid-template-columns: auto;
    }
}

@media (min-width: 0px) and (max-width: 370px) {
    .services-container {
        grid-template-columns: auto;
    }
}

    
</style>