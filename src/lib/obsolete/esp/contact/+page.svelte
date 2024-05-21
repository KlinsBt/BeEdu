<script>
	
    import Form from "../comp library/Form.svelte";
	import '../../styles.css';
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>

        <div class="title"> 
            <h1>Envíenos su consulta</h1>
        </div>

        <div class="sub-title">
            <p>
                Envíenos un mensaje para concertar una reunión de consulta gratis de 15 minutos.
                <br>
                Estaremos encantados de ayudarle a alcanzar sus objetivos lingüísticos, 
                desarrollar su currículo de aprendizaje y resolver cualquier reto que 
                pueda tener en cuanto a soluciones lingüísticas, es decir, traducción e 
                interpretación, así como cursos de oratoria y gestión en el idioma deseado.
            </p>
        </div>
        <div class="add-form">
            <div class="address-container">
                <address>
                    <span>Berndt Education
                        <br>
                        Calle Barcenillas 8
                        <br>
                        29012, Malaga
                        <br>
                        España
                    </span>
                    <span>
                        Berndt Education
                        <br>
                        7 Bell Yard
                        <br>
                        London WC2A 2JR
                        <br>
                        Reino Unido
                    </span>
                    <div class="info">
                        <p><a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a></p>
                        <p><a href="tel:+34631896435">+34 631896435</a></p>
                        <p><a href="tel:+442038852772">+442038852772</a></p>
                    </div>
                </address>
            </div>
            <Form />
        </div>
        
    </main>
    
    







    
    <style>
    
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

    @media (min-width: 1300px) {

        .add-form {
            display: flex;
            justify-content: center;
        }

        .address-container {
            display: flex !important;
            justify-content: center !important;
            margin: 200px 0px 0px 100px !important;
        }

        .info {
            margin: 0px;
            padding: 10px 0px 0px 0px !important;
        }

        .info > p {
            padding: 0px !important;
        }
        
    }

    .address-container {
        display: flex;
        justify-content: center;
        margin: 150px 0px 0px 0px;
    }

    address {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        text-align: center;
        margin-top: 0px;
        max-height: 200px;
    }

    address > span {
        text-align: center; 
        display: grid;
        width: 185px;
    }

    .info > p > a {
        margin: 0px;
        color: rgb(90, 90, 90);
        font-size: 13px;
        font-weight: 400;
    }

    .info > p {
        margin: 0px;
        font-size: 13px !important;
    }

    .info {
        padding: 10px 0px 0px 0px;
        grid-column: 1/3;
    }

    .info > p > a:hover  {
        color: #d6b18c;
    }
    
    </style>
