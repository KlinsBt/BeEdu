<script>
	
    import "../../styles.css";

    import Services from "../comp library/Services.svelte";
    
</script>
    



    <section>

        <div class="title"> 
            <h1>Beratung für die Zulassung an Universitäten</h1>
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
                    Berndt Education bietet eine umfassende und persönliche Unterstützung, um Studenten die 
                    Zulassung zu den besten Universitäten weltweit zu ermöglichen. Unser Team aus Beraterteam 
                    kann auf eine nachweisliche Erfolgsbilanz für unsere Kunden verweisen.
                </p>
            </div>

            <div class="info-box">
                <p>
                    13 Jahre Erfahrung als Berater und Leiter von Top-Bildungsprogrammen in Großbritannien und Zusammenarbeit
                    mit Hunderten von Studenten in Weltklasse-Institutionen wie Oxford, Cambridge, London und der Harvard University. 
                    Die Tutoren von Berndt Education entwerfen erfolgreiche, individuelle akademische und berufliche Pläne 
                    für die Studenten. In unserer Firma sind wir stolz auf unser Team von erfahrenen Beratern. Alle unsere 
                    Tutoren waren Zulassungsbeauftragte und/oder haben an der Universität Oxford unterrichtet. Dadurch haben 
                    wir einen einzigartigen Einblick in das Zulassungsverfahren von Spitzenuniversitäten und können diese 
                    unterstützen, So können wir ein umfassendes und strategisches Konzept für die Universitätszulassung anbieten.
                </p>
                <img src="/img/uni-admissions/2.jpg" alt="Img">
            </div>

            <div class="info-box">
                <img src="/img/uni-admissions/3.jpg" alt="Img">
                <p>
                    Unser Team von Beratern mit langjähriger Erfahrung im Bereich Oxford-Zulassung ist darauf spezialisiert 
                    individuelle Unterstützung für jeden Studenten, die alle Aspekte des Bewerbungsprozesses für eine Universität 
                    abdeckt, einschließlich der Auswahl von Kursen und Universitäten/Hochschulen, Praktika Vorbereitung auf 
                    Bewerbungsgespräche, Zulassungstests, Stipendienanträge und vieles mehr. Ihr umfassendes Wissen und Erfahrung 
                    ermöglichen es uns, erfolgreiche individuelle akademische und berufliche und Karrierepläne für Studenten zu entwickeln, 
                    um ihre Chancen auf eine Zulassung zu den besten Universitäten weltweit zu erhöhen. Unser Team von erfahrenen Beratern 
                    mit unterschiedlichen Hintergründen und Fachkenntnissen bietet ein einzigartiges Angebot für Studenten weltweit.
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