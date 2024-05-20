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
                <h4>CEO & Dozent (DE, EN, ES)</h4>
            </div>
            <div>
                <p>
                    Ich bin der Gründer von Berndt Education. Ursprünglich komme ich aus Deutschland und habe einen B.A. 
                    in technischer Übersetzung und einen M.A. von der Texas Tech University in deutscher Literatur und 
                    Sprache mit einem Nebenfach in spanischer Literatur. Ich habe mich auf Sprachunterricht, Schul- und 
                    Bildungsmanagement, Programmmanagement sowie Lehrplanentwicklung für Sprache und für Kinder mit Cochlea-Implantaten spezialisiert;
                    Dabei habe ich mit den hervorragenden Einrichtungen und Mitarbeitern des SADA Educational Center in Kuwait zusammengearbeitet.
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
                <h4>Dozentin (DE, FR)</h4>
            </div>
            <div>
                <p ><!---style="font-size: 9px !important"--->
                    Ich unterrichte sowohl Deutsch als auch Französisch für Sprachbegeisterte und bin ausgebildete Übersetzerin mit einem Abschluss des 
                    <i>französischen Instituts für Übersetzung und interkulturelles Management (ISIT)</i>. Nachdem ich fünf Jahre lang deutsche und 
                    englische Literatur, Sprache und Kultur in Paris, Wien und München studiert habe, bin ich vor etwa drei Jahren nach Berlin gezogen. 
                    Ich hatte die Gelegenheit, in Deutschland großartige Kontakte zu knüpfen und in deutschen und internationalen 
                    Teams als Übersetzerin in der Luxusbranche zu arbeiten. Ich würde mich freuen, Sie auf Ihrem Lernweg zu unterstützen, ganz gleich, 
                    ob Sie neu in der deutschen und französischen Sprache sind oder eine perfekte Sprachbeherrschung anstreben.
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
                <h4>Werbetexterin und Dozentin (EN)</h4>
            </div>
            <div>
                <p>
                    Ich bin Absolventin der University of Oxford und habe Englische Sprache und Literatur studiert. 
                    Ich liebe Lesen und Poesie, und das Unterrichten der englischen Sprache ist eine meiner Leidenschaften. 
                    Außerdem arbeite ich als Werbetexterin für ein Marketingunternehmen mit Sitz in Oxford.
                </p>
            </div>
        </div>
    </div>

    <div class="card" id="custom1">
        <div class="circle">
            <div class="imgBox">
                <img src="../img/ChristianProfile.jpg" alt="Profile">
            </div>
        </div>
        <div class="content">
            <h3>Christian Blanco</h3>
            <div class="textIcon">
                <h4>Educator (ES, DE, EN, FR)</h4>
            </div>
            <div>
                <p style="font-size: 11.7px !important">
                    Ich habe die französische und spanische Staatsbürgerschaft, Spanisch und Französisch sind meine Muttersprachen und ich 
                    habe ein zertifiziertes B2-C1 in Englisch und ein C1.2 in Deutsch. Ich unterrichte Englisch, Französisch und Deutsch, 
                    habe die ELE-Kurse am Cervantes-Institut in Wien absolviert und besitze die DELE-Akkreditierung des Cervantes-Instituts 
                    in Zagreb, um die spanische Sprache offiziell zu unterrichten und zu prüfen. Ich habe einen BA in Kunstgeschichte an der 
                    Autonomen Universität Madrid in Spanien, einen MA in Theoretischer und Praktischer Philosophie an der UNED und an der 
                    Universität Jena in Deutschland, einen MA in Wissenschaftsgeschichte und -philosophie an der Universität Wien in Österreich 
                    und an der École Normale Supérieure von Paris in Frankreich; einen MA in Europäische Union: European Multilevel Integration 
                    and Fundamental Rights" an der UNED und wird in Kürze ein Doktorat in Philosophie beginnen.
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
        padding: 15px 0px 0px 0px;
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