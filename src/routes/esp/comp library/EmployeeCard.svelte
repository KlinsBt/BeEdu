<script>

    //export let name = ""
    //export let title = ""
    //export let description = ""
    //export let src = "img/DennyProfil.jpg"

</script>

<main>

    <div class="card">
        <div class="circle">
            <div class="imgBox">
                <img src="../img/DennyProfile.jpg" alt="Profile">
            </div>
        </div>
        <div class="content">
            <h3>Denny Berndt</h3>
            <div class="textIcon">
                <h4>CEO & Educador (DE, EN, ES)</h4>
            </div>
            <div>
                <p>
                    Soy el fundador de Berndt Education. Soy originaria de Alemania y tengo un B.A. en 
                    Traducción Técnica y un máster de la Texas Tech University en Literatura y Lengua 
                    Alemana con especialización en literatura española. Me he especializado en la enseñanza 
                    de idiomas, la escuela y la educación gestión de programas, así como en el desarrollo 
                    de planes de estudio para el lenguaje y para niños con implantes cocleares colaborando 
                    con las instalaciones y el personal de alto nivel del Centro Educativo Sada de Kuwait.
                </p>
            </div>
        </div>
    </div>

    <div class="card" id="custom1">
        <div class="circle">
            <div class="imgBox">
                <img src="../img/SophieProfile.jpg" alt="Profile">
            </div>
        </div>
        <div class="content">
            <h3>Anne-Sophie</h3>
            <div class="textIcon">
                <h4>Educador (DE, FR)</h4>
            </div>
            <div>
                <p ><!---style="font-size: 9px !important"--->
                    Enseño alemán y francés a aficionados a los idiomas y soy traductora diplomada por el <i>
                    Instituto Francés de Traducción y Gestión Intercultural (ISIT)</i>. 
                    Después de 5 años estudiando literatura, lengua y cultura alemana e inglesa en París, 
                    Viena y Múnich, me trasladé a Berlín hace unos 3 años. y cultura en París, Viena y Múnich, 
                    me trasladé a Berlín hace unos 3 años. Tuve la oportunidad de hacer contactos increíbles 
                    en Alemania y de trabajar en equipos alemanes e internacionales como traductora en el mercado 
                    del lujo. Estaré encantada de en su aprendizaje, tanto si es nuevo en el alemán y el francés 
                    como si quiere dominarlos a la perfección.
                </p>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="circle">
            <div class="imgBox">
                <img src="../img/AneelaProfile.jpg" alt="Profile">
            </div>
        </div>
        <div class="content">
            <h3>Aneela Shah</h3>
            <div class="textIcon">
                <h4>Redactor y Educador (EN)</h4>
            </div>
            <div>
                <p>
                    Soy licenciada por la Universidad de Oxford y estudié Filología Inglesa. Me encanta la lectura y 
                    la poesía, y enseñar la lengua inglesa es una de mis pasiones. También trabajo como redactora para 
                    una empresa de marketing con sede en Oxford.
                </p>
            </div>
        </div>
    </div>

</main>

<style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        min-height: 70vh;
        width: 100%;
        /*background: radial-gradient(#777,#1C1D25);*/
    }

    .card {
        position: relative;
        width: 340px;
        height: 650px;
        background: #fff;
        overflow: hidden;
        border-radius: 10px;
        margin: 50px 25px;
        box-shadow: 1px 1px 15px 1px rgb(160, 157, 157);
    }

    .circle {
        position: absolute;
        top: -190px;
        left: 50%;
        width: 500px;
        height: 500px;
        transform: translateX(-50%);
        clip-path: circle();
    }
    .circle::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -16px;
        width: 100%;
        height: 100%;
        box-shadow: 0 0 0 20px rgba(214,177,140,0.7);
        border-radius: 50%;
        z-index: 2;
        pointer-events: none;
    }

    .imgBox {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 340px;
        height: 310px;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
    }

    .content {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 330px;
        padding: 0px 20px;
    }

    h3 {
        font-size: 1.4em;
        color: #333;
        margin-top: 7px;
        margin-bottom: 2px;
    }

    .textIcon {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    h4 {
        color: #d6b18c;
        font-weight: 500;
        /*text-shadow: 1px 1px 15px #7c7c7c73;*/
    }

    p {
        padding: 20px 0px 0px 0px;
        font-size: 0.8em;
        font-weight: 400;
    }

    @media (min-width: 250px) and (max-width: 340px) {

        .card {
            height: 750px;
        }

        .content {
            height: 420px !important;
        }

        #custom1 > .circle > .imgBox > img {
            margin-left: -25px;
        }
    }



    
</style>