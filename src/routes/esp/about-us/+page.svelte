<script>

    import '../../styles.css';
    import EmployeeCard from "../comp library/EmployeeCard.svelte";

    //src={"img/DennyProfil.jpg"}
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>
        <div class="title"> 
            <h1>El Team BE</h1>
        </div>
        <div class="sub-title">
            <p>Le ayudamos a alcanzar sus objetivos</p>
        </div>
        <EmployeeCard />
        <div class="logo-container">
            <div>
                <h3>Colaboración con:</h3>
                <a href="https://www.sada-center.org/"><img src="/img/logos/Sada.png" alt="Sada-Logo"></a>

                <p>SADA es un centro integrado de habilitación y educación.</p>
                <br>
                <p>
                    Nuestro enfoque es único porque promovemos la alegría mientras jugamos, 
                    aprendemos y exploramos. Nuestro objetivo es desarrollar las capacidades comunicativas 
                    del niño a través de la logopedia, a la vez que desarrollamos el amor por el aprendizaje.
                </p>
            </div>
        </div>
        <br>
    </main>
    
    







    
    <style>

        .title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 50px;
            padding: 0px 50px 10px 50px;
        }

        .sub-title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 20px;
            padding: 0px 50px 0px 50px;
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

        h3 {
            margin: 0px !important;
        }

        p {
            padding: 0px 5px;
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

            .logo-container > div > a > img {
                width: 200px;
                height: 120px;
            }
        }

    @media (min-width: 301px) and (max-width: 375px) {

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }

        .logo-container > div > a > img {
            width: 200px;
            height: 120px;
        }
    }

    @media (min-width: 371px) and (max-width: 449px) {

        h1 {
            font-size: 40px;
        }

        p {
            font-size: 20px;
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
    
    </style>
