<script>

    import "../../styles.css";

    import Services from "../comp library/Services.svelte";
    
</script>
    
    <section>

        <div class="title"> 
            <h1>Consultoría de Admisiones Universitarias</h1>
        </div>

        <br>
        <br>
        <br>

        <div class="sub-title">
            <!-- <p>Here you can see our Berndt Education course catalogue.</p> -->
        </div>

        <div>

            <div class="info-box">
                <img src="/img/uni-admissions/1.jpg" alt="Img">
                <p>
                    Berndt Education ofrece apoyo integral y personalizado para ayudar a los estudiantes a acceder a 
                    las mejores universidades del mundo. Nuestro equipo de consultores experimentados tiene un historial 
                    probado de resultados satisfactorios para nuestros clientes.
                </p>
            </div>

            <div class="info-box">
                <p>
                    13 años de experiencia como consultor y líder de programas educativos de alto nivel en el Reino Unido, 
                    y ha trabajado con cientos de estudiantes en instituciones instituciones de clase mundial como Oxford, 
                    Cambridge, Londres y la Universidad de Harvard. Los tutores de Berndt Education diseñarán exitosos planes 
                    académicos y profesionales personalizados para los estudiantes. En nuestra consultoría, nos enorgullecemos 
                    de nuestro equipo de consultores experimentados. Todos nuestros tutores han sido responsables de admisiones 
                    y/o han impartido clases para la Universidad de Oxford. Esto proporciona una visión única y apoyo en el 
                    proceso de admisión de las mejores universidades, lo que nos permite ofrecer un enfoque integral y estratégico 
                    de las admisiones universitarias.
                </p>
                <img src="/img/uni-admissions/2.jpg" alt="Img">
            </div>

            <div class="info-box">
                <img src="/img/uni-admissions/3.jpg" alt="Img">
                <p>
                    Nuestro equipo de asesores con experiencia en admisiones en Oxford se dedica a proporcionar apoyo personalizado a cada 
                    estudiante, cubriendo todos los aspectos del proceso de universidad, experiencia laboral, preparación de entrevistas, 
                    preparación de exámenes de admisión, solicitud de becas y mucho más. experiencia laboral, preparación de entrevistas, 
                    preparación de exámenes de admisión, solicitud de becas y mucho más. Su profundo Su profundo conocimiento y experiencia 
                    nos permiten desarrollar planes académicos y profesionales personalizados para los estudiantes, maximizando sus posibilidades 
                    de admisión en las mejores universidades de todo el mundo. Nuestro equipo de experimentados consultores, con su amplia 
                    experiencia y conocimientos, ofrece una oferta única a los estudiantes de todo el mundo. una oferta única para estudiantes de todo el mundo.
                </p>
            </div>
        </div>

    </section>

    <br>
    <br>
    <br>

    <section class="services-container">
        <Services />
    </section>
    
    <br>
    <br>
    <br>

    
    <style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
    }
    
    .title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 50px;
            padding: 0px 50px 0px 50px;
    }

    .sub-title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 20px;
            padding: 0px 50px 0px 50px;
    }

    .info-box {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        align-items: center;
        /* padding: 10px; */
        /* max-height: 800px; */
        background-color: beige;
        border-top: 5px solid #cfbaa7;
        border-bottom: 5px solid #cfbaa7;
    }

    .info-box:nth-child(even) {
        background-color: azure;
        border: none;
    }

    .info-box > img {
        width: 100%;
        height: auto;
        max-height: 400px; 
    }

    .info-box:nth-child(2) > img {
        width: 100%;
        height: auto;
        max-height: 570px; 
    }

    .info-box > p {
        font-size: 20px;
        font-weight: 500;
        padding: 25px 10%;
    }

    .services-container {
        display: grid;
        justify-items: center;
        align-items: end;
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 550px) and (max-width: 775px) {

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto auto;
        }
    }

    @media (min-width: 1px) and (max-width: 450px) {

        .title {
            margin-top: 150px;
        }
    }

    @media (min-width: 371px) and (max-width: 549px) {

        .info-box {
            grid-template-columns: auto;
        }

        .info-box:nth-child(2) > p {
            grid-row: 2/2;
        }

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto;
        }
    }

    @media (min-width: 1px) and (max-width: 370px) {

        .info-box {
            grid-template-columns: auto;
        }

        .info-box:nth-child(2) > p {
            grid-row: 2/2;
        }

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto;
        }
    }

    
    </style>