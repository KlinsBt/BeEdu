<script>
    import TopSection from "$lib/components/landing-page/top-section.svelte";
    import SubSection from "$lib/components/landing-page/sub-section.svelte";
    import BenefitsSection from "$lib/components/landing-page/benefits-section.svelte";
</script>










<main>
    <TopSection 
        main_title="BERNDT EDUCATION: Tu puerta de acceso a los mejores cursos de idiomas en línea"
        main_subtitle="Domina tu idioma con las clases personalizadas de Berndt Education"
        main_descr="En Berndt Education, ofrecemos cursos de idiomas personalizados de aprendizaje individual y 
        clases en grupo para empresas, creando las condiciones ideales para que aprendas el idioma deseado de la forma más rápida 
        y eficaz posible. Educadores profesionales crearán un programa a medida que se adapte a tu conciliación de la vida laboral 
        y te ayude a mejorar tu inteligencia en idiomas después de cada sesión. Con nuestro enfoque innovador, disfruta de 
        flexibilidad y comodidad con acceso en línea 24 horas al día, 7 días a la semana. Practica español, francés, alemán y otros idiomas con 
        nuestros profesores expertos.Empieza hoy mismo y descubre la satisfacción de dominar tus idiomas."
        button1="Contacto"
        button1_link="/esp/contact"
        button2="Cursos"
        button2_link="/esp/courses"
    />

    <SubSection 
        title="El SISTEMA BE DE APRENDIZAJE"
        subtitle="ACTIVO"
        paragraph="El método para aprender con éxito Con Berndt Education, 
        tú o tu empresa se benefician de un atractivo concepto de aprendizaje que explota la interconexión a 
        través de los medios de comunicación junto con los métodos de aprendizaje clásicos. 
        Los educadores de BE están especializados en estrategias neurolingüísticas para que 
        su experiencia de aprendizaje sea envolvente y la retención del material permanente."
    />

    <BenefitsSection 
        title="Nuestras Ventajas"
        box_title1="PROGRAMAS HECHOS A MEDIDA"
        box1_descr="Los educadores diseñan el programa individual tras una reunión de consulta 
        para fijar objetivos, elegir un horario y materiales didácticos."
        box_title2="APRENDIZAJE AUTÓNOMO"
        box2_descr="Basándose en el nivel y la velocidad de aprendizaje del alumno, los 
        educadores de BE capacitarán al cliente para trabajar de forma proactiva en su 
        desarrollo lingüístico dentro de las sesiones en línea y más allá mediante proyectos 
        de deberes y sesiones de comentarios constructivos."
        box_title3="DESARROLLO DE HABILIDADES DE COMUNICACIÓN FLEXIBLE"
        box3_descr="Los participantes y el profesor utilizan el Berndt Education Learning System 
        para comunicarse con facilidad y confianza mediante una formación adaptada en la 
        lengua de aprendizaje."
        box_title4="FEEDBACK PARA EL ÉXITO"
        box4_descr="Los educadores ofrecen comentarios constructivos en línea y supervisan 
        el uso de la lengua para garantizar el éxito del aprendizaje."
        box_title5="AVANCE ESPECÍFICO"
        box5_descr="Los clientes aprenden más allá de los Cursos BE independientemente del 
        Educador BE con los materiales proporcionados y, por lo tanto, logran el máximo 
        éxito en el aprendizaje."
    /> 
</main>










<style>
    
main {
    font-family: 'Poppins', sans-serif;
    margin: 0;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}

</style>
