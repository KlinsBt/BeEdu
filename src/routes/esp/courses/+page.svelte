<script>
	
    import Course from "../comp library/Course3.svelte";
    import '../../styles.css';
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>

        <div class="title"> 
            <h1>Nuestros cursos de BE</h1>
        </div>

        <div class="sub-title">
            <p>
                Aquí puede consultar nuestro catálogo de cursos de Berndt 
                Education. 
            </p>
                </div>
        <div class="boxes">
            <Course lang="Alemán" background="/img/flags/ger.png" />
            <Course lang="Español" background="/img/flags/esp.png"/>
            <Course lang="Inglés" background="/img/flags/uk.png"/>
            <Course lang="Francés" background="/img/flags/frn.png"/>
        </div>

    </main>
    
    







    
    <style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
    }

    .boxes {
        margin: 50px 0px 50px 0px;
        display: flex;
        justify-content: center;
        /*display: grid;
        grid-template-columns: auto auto auto;*/
        transform: scale(0.9);
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

    @media (max-width: 450px) {
            .title {
                margin-top: 150px;
            }
        }

    @media (min-width: 50px) and (max-width: 300px) {
        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }
    }

    @media (min-width: 301px) and (max-width: 370px) {

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }
    }

    @media (min-width: 371px) and (max-width: 449px) {

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }
    }

    /* @media (min-width: 450px) and (max-width: 570px) {

        h1 {
            font-size: 70px;
        }

        p {
            font-size: 25px;
        }
    } */

    @media (max-width: 729px) {

        .boxes {
            margin: -100px 0px 50px 0px;
            display: grid;
            grid-template-columns: auto;
        } 
    }

    @media (min-width: 730px) and (max-width: 1049px) {

        .boxes {
            margin: 0px 0px 50px 0px;
            display: grid;
            grid-template-columns: auto auto;
        } 
    }

    @media (min-width: 1050px) and (max-width: 1345px) {

        .boxes {
            margin: 0px 0px 50px 0px;
            display: grid;
            grid-template-columns: auto auto auto;
        } 
    }

    
    </style>