<script>
    import EmployeeCard from "$lib/components/sub-sites/about-us/employee-card1.svelte";
</script>

<div class="main-container">
    <div class="page-title-container">
        <h1>El Team BE</h1>
        <h3>Te ayudamos a alcanzar tus objetivos</h3>
    </div>
    <div class="employee-cards-container">
        <EmployeeCard
            name="Denny Berndt"
            title="CEO & Educador (DE, EN, ES)"
            description="Soy el fundador de Berndt Education. Soy originario de Alemania y tengo un B.A. 
            en Traducción Técnica y un máster de la Texas Tech University en Literatura y Lengua Alemana con especialización en 
            literatura española. Me he especializado en la enseñanza de idiomas, la escuela y la educación gestión de programas, 
            así como en el desarrollo de planes de estudio para el lenguaje y para niños con 
            implantes cocleares colaborando con las instalaciones y el personal de alto nivel del Centro Educativo Sada de Kuwait."
            src="../img/DennyProfile.jpg"
            alt="Denny-profile-photo"
        />
        <EmployeeCard
            name="Anne-Sophie"
            title="Educador (DE, FR)"
            description="Enseño alemán y francés a interesados en los idiomas y soy traductora diplomada 
            por el Instituto Francés de Traducción y Gestión Intercultural (ISIT). Después de 5 años estudiando literatura, 
            lengua y cultura alemana e inglesa en París, Viena y Múnich, me trasladé a Berlín hace unos 3 años. 
            Tuve la oportunidad de hacer contactos increíbles en Alemania y de trabajar en equipos alemanes e internacionales 
            como traductora en el mercado de lujo. Estaré encantada de ayudar en tu aprendizaje, 
            tanto si eres nuevo en el alemán y el francés como si quieres dominarlos a la perfección."
            src="../img/SophieProfile.jpg"
            alt="Sophie-profile-photo"
        />
        <EmployeeCard
            name="Aneela Shah"
            title="Redactor y Educador (EN)"
            description="Soy licenciada por la Universidad de Oxford y estudié 
            Filología Inglesa. Me encanta la lectura y la poesía, y enseñar la 
            lengua inglesa es una de mis pasiones. También trabajo como redactora 
            para una empresa de marketing con sede en Oxford."
            src="../img/AneelaProfile.jpg"
            alt="Aneela-profile-photo"
        />
        <EmployeeCard
            name="Christian Blanco"
            title="Educador (ES, DE, EN, FR)"
            description="Tengo la nacionalidad francesa y española y el español y 
            el francés son mis lenguas maternas y tengo un certificado B2-C1 en inglés y un C1.2 en alemán. 
            Doy clases de inglés y francés y alemán, he hecho los cursos ELE en el Instituto Cervantes de Viena y tengo 
            la acreditación DELE en el Instituto Cervantes de Zagreb para enseñar y examinar oficialmente la lengua española. 
            Soy Licenciado en Historia del Arte por la Universidad Autónoma de Madrid (España), Máster en Filosofía Teórica y Práctica 
            por la UNED y la Universidad de Jena (Alemania), Máster en Historia y Filosofía de la Ciencia por la Universidad de Viena 
            (Austria) y la École Normale Supérieure de París (Francia); MA. en Unión Europea: 
            European Multilevel Integration and Fundamental Rights en la UNED y en breve comenzaré un doctorado en Filosofía."
            src="../img/ChristianProfile.jpg"
            alt="Christian-profile-photo"
        />
        <EmployeeCard
            name="Adam Fierst"
            title="Educador (EN)"
            description="Soy Adam, educador de inglés en Berndt Education. Comencé mi viaje de enseñanza en 2018. Originario de los 
            Estados Unidos, soy un hablante nativo de inglés con un profundo conocimiento del idioma. Actualmente radicado en España, 
            me he sumergido en la cultura y el idioma español durante los últimos cinco años. Hablo español con fluidez y aporto a 
            mi enseñanza un conocimiento de primera mano de las costumbres y coloquialismos españoles. También estudié alemán durante 
            mi licenciatura en Estudios Globales e Internacionales, pasando tiempo en Alemania para perfeccionar mis habilidades. 
            Con más de 5.000 horas de experiencia docente, ofrezco clases de inglés personalizadas y adaptadas a las necesidades de cada 
            alumno. Mi estilo de enseñanza paciente y atractivo crea un ambiente de aprendizaje de apoyo donde los estudiantes pueden 
            prosperar."
            src="../img/AdamProfile.jpeg"
            alt="Adam-profile-photo"
        />
        <EmployeeCard
            name="Oliver Goodall"
            title="Tutor de Matemáticas y Física"
            description="Soy Oliver, licenciado en Física por la Universidad de Oxford, con un máster en Física de Partículas y 
            Astrofísica. Tengo experiencia como tutor de matemáticas, física y química, y me encanta compartir mis conocimientos de 
            estas materias con los demás. Estoy a punto de empezar un doctorado en Física Teórica de Partículas, junto con mi pasión 
            por la enseñanza."
            src="../img/OliverProfile.jpg"
            alt="Oliver-profile-photo"
        />
        <EmployeeCard
            name="Kelsey"
            title="Educador (EN)"
            description="Kelsey es una profesora de inglés con más de una década de experiencia en la enseñanza internacional. 
            Originaria de Massachusetts, ha pasado los últimos diez años enseñando inglés en Taiwán y España, sumergiéndose en sus 
            culturas y sistemas educativos únicos. A lo largo de su carrera, Kelsey ha trabajado con estudiantes de todos los niveles, 
            desde niños a adultos, y ahora disfruta impartiendo cursos de inglés comercial que mejoran las habilidades lingüísticas y 
            la confianza de los estudiantes."
            src="../img/KelseyProfile.jpg"
            alt="Kelsey-profile-photo"
        />
    </div>
    <div class="logo-container">
        <div>
            <h3>Colaboración con:</h3>
            <a href="https://www.sada-center.org/">
                <img src="/img/logos/Sada.png" alt="Sada-Logo" />
            </a>
            <p>SADA es un centro integrado de habilitación y educación.</p>
            <br />
            <p>
                Nuestro enfoque es único porque promovemos la alegría mientras
                jugamos, aprendemos y exploramos. Nuestro objetivo es
                desarrollar las capacidades comunicativas del niño a través de
                la logopedia, a la vez que desarrollamos el amor por el
                aprendizaje.
            </p>
        </div>
    </div>
    <br />
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

    .employee-cards-container {
        display: flex;
        justify-content: center;
        /* align-items: start; */
        flex-wrap: wrap;
        gap: 50px;
        margin: 0px 0px 100px 0px;
    }

    .logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo-container > div {
        display: grid;
        justify-items: center;
    }

    .logo-container > div > p {
        text-align: center;
        max-width: 450px;
        font-size: 15px !important;
        font-weight: 500 !important;
    }

    .logo-container > div > a > img {
        width: 350px;
        height: 220px;
        cursor: pointer;
        transition-duration: 0.4s;
    }

    .logo-container > div > a > img:hover {
        transform: scale(1.02);
        transition-duration: 0.4s;
    }

    .logo-container > div > h3 {
        margin: 0px !important;
    }

    p {
        padding: 0px 5px;
    }

    @media (min-width: 301px) and (max-width: 375px) {
        .logo-container > div > a > img {
            width: 200px;
            height: 120px;
        }
    }

    @media (min-width: 0px) and (max-width: 300px) {
        .logo-container > div > a > img {
            width: 200px;
            height: 120px;
        }
    }
</style>
