<script>
	
    import '../../styles.css';
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>

        <div class="title"> 
            <div>
                <h1 style="text-shadow: 1px 1px 0px white;">Bildung und Reisen</h1>
            </div>
        </div>

        <div class="comp" style="margin-top:50px;">

            <div style="
            display:flex; 
            justify-content:center; 
            text-align:center; padding:0px 10px;">

                <div style="
                max-width:500px; 
                border-radius:15px; 
                border:1px solid black; 
                box-shadow: 1px 1px 20px rgba(247, 92, 45, 0.15);">

                    <h3  style="margin:10px;">Studieren wie ein richtiger britischer Student</h3>
                    <h4 style="margin:10px;">- Sich selbst herausfordern</h4>
                    <h4 style="margin:10px;">- Ziele Erreichen</h4>

                    <p style="margin:10px 10px 0px 10px; font-size:17px;">
                        Leben und studieren Sie im Zentrum von Oxford, Cambridge und London und erleben 
                        Sie das Leben in einem traditionellen britischen Internat oder an einer Universität. 
                        Erkunden Sie die berühmten Sehenswürdigkeiten Großbritanniens - Buckingham Palace, 
                        Cambridge, Windsor und vieles mehr.
                    </p>
                    <p style="margin:10px; font-size:17px;">
                        Entdecken Sie das Vereinigte Königreich und seine verborgenen Geheimnisse. Lernen 
                        Sie von Weltklasse-Lehrern. Bereiten Sie sich auf Ihre Zukunft vor und schließen 
                        Sie lebenslange Freundschaften mit Menschen aus der ganzen Welt.
                    </p>
                </div>

            </div>

        </div>

        <div>

            <img src="../img/pexels-vjapratama-935835.jpg" alt="Summer Camp" 
            style="
            max-width:100%;
            height:auto;
            opacity:0.5;
            z-index:-1;">

            <div style="
            display:flex; 
            justify-content:center;
            margin-top:0px;">
                <div style="
                display:grid; 
                justify-items:center; 
                text-align:center;
                max-width: 450px;
                margin-bottom: 100px;">
                    <p style="margin:10px; font-size:17px;">Genießen Sie den Sommer Ihres Lebens!</p>
                    <p style="margin:10px; font-size:17px;">Kontaktieren Sie uns für weitere Informationen über das Programm, die Orte und die Termine:</p>
                    <a itemprop="email" href="mailto:info@berndteducation.com"><button class="button-5">BERATUNG BUCHEN</button></a>
                    <!-- <button style="margin:10px; font-size:17px;">Book a consultation</button> -->
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
    
    .title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 50px;
            padding: 0px 50px 0px 50px;
    }

    .comp {
        margin: 50px 0px;
    }

    .button-5 {
        align-items: center;
        background-clip: padding-box;
        background-color: #fa6400;
        border: 1px solid transparent;
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-flex;
        font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 3rem;
        padding: calc(.875rem - 1px) calc(1.5rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        width: auto;
    }

    .button-5:hover,
    .button-5:focus {
        background-color: #fb8332;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    .button-5:hover {
        transform: translateY(-1px);
    }

    .button-5:active {
        background-color: #c85000;
        box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
        transform: translateY(0);
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
            font-size: 15px !important;
        }
    }

    @media (min-width: 301px) and (max-width: 370px) {

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px !important;
        }
    }

    @media (min-width: 371px) and (max-width: 449px) {

        h1 {
            font-size: 30px;
        }

        p {
            font-size: 15px !important;
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