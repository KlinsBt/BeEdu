<script>
	
    import Form from "../comp library/Form.svelte";
    import '../../styles.css';
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>

        <div class="title"> 
            <h1>Send us an Inquiry</h1>
        </div>

        <div class="sub-title">
            <p>Send us a message for a free 15-minute consultation meeting.<br>
                We are happy to help you achieve your language goals, develop your learning curriculum and solve 
                any challenges you may have in terms of language solutions, i.e., translation and interpretation, 
                as well as courses on public speaking and management in the desired language.
            </p>
        </div>
        <div class="add-form">
            <div class="address-container">
                <address>
                    <span>Berndt Education
                        <br>
                        Calle Salamanca, 31
                        <br>
                        Planta Tercera, Puerta 1   
                        <br>
                        29013, Malaga
                        <br>
                        Spain
                        <div>
                        <div class="info">
                            <p><a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a></p>
                            <p><a href="tel:+34631896435">+34 631896435</a></p>
                            <p><a href="tel:+447922489668">+447922489668</a></p>
                        </div>
                    </span>
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
        text-align: left;
        margin-top: 0px;
    }

    address > span {
        text-align: left; 
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
    }

    .info > p > a:hover  {
        color: #d6b18c;
    }
    
    </style>
