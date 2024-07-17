<script>
    import EmployeeCard from "$lib/components/sub-sites/about-us/employee-card1.svelte";
</script>

<div class="main-container">
    <div class="page-title-container">
        <h1>Das BE-Team</h1>
        <h3>Wir helfen Ihnen dabei, Ihre Ziele zu erreichen</h3>
    </div>
    <div class="employee-cards-container">
        <EmployeeCard
            name="Denny Berndt"
            title="CEO & Dozent (DE, EN, ES"
            description="Ich bin der Gründer von Berndt Education. 
            Ursprünglich komme ich aus Deutschland und habe einen B.A. 
            in technischer Übersetzung und einen M.A. von der Texas Tech 
            University in deutscher Literatur und Sprache mit einem 
            Nebenfach in spanischer Literatur. Ich habe mich auf Sprachunterricht, 
            Schul- und Bildungsmanagement, Programmmanagement sowie 
            Lehrplanentwicklung für Sprache und für Kinder mit Cochlea-Implantaten 
            spezialisiert; Dabei habe ich mit den hervorragenden Einrichtungen und 
            Mitarbeitern des SADA Educational Center in Kuwait zusammengearbeitet."
            src="../img/DennyProfile.jpg"
            alt="Denny-profile-photo"
        />
        <EmployeeCard
            name="Anne-Sophie"
            title="Dozentin (DE, FR)"
            description="Ich unterrichte sowohl Deutsch als auch Französisch für 
            Sprachbegeisterte und bin ausgebildete Übersetzerin mit einem Abschluss 
            des französischen Instituts für Übersetzung und interkulturelles Management 
            (ISIT). Nachdem ich fünf Jahre lang deutsche und englische Literatur, 
            Sprache und Kultur in Paris, Wien und München studiert habe, bin ich vor 
            etwa drei Jahren nach Berlin gezogen. Ich hatte die Gelegenheit, in 
            Deutschland großartige Kontakte zu knüpfen und in deutschen und internationalen 
            Teams als Übersetzerin in der Luxusbranche zu arbeiten. Ich würde mich freuen, 
            Sie auf Ihrem Lernweg zu unterstützen, ganz gleich, ob Sie neu in der deutschen 
            und französischen Sprache sind oder eine perfekte Sprachbeherrschung anstreben."
            src="../img/SophieProfile.jpg"
            alt="Sophie-profile-photo"
        />
        <EmployeeCard
            name="Aneela Shah"
            title="Werbetexterin und Dozentin (EN)"
            description="Ich bin Absolventin der University of Oxford und habe Englische 
            Sprache und Literatur studiert. Ich liebe Lesen und Poesie, und das Unterrichten 
            der englischen Sprache ist eine meiner Leidenschaften. Außerdem arbeite ich als 
            Werbetexterin für ein Marketingunternehmen mit Sitz in Oxford."
            src="../img/AneelaProfile.jpg"
            alt="Aneela-profile-photo"
        />
        <EmployeeCard
            name="Christian Blanco"
            title="Dozent (ES, DE, EN, FR)"
            description="Ich habe die französische und spanische Staatsbürgerschaft, Spanisch 
            und Französisch sind meine Muttersprachen und ich habe ein zertifiziertes B2-C1 in 
            Englisch und ein C1.2 in Deutsch. Ich unterrichte Englisch, Französisch und Deutsch, 
            habe die ELE-Kurse am Cervantes-Institut in Wien absolviert und besitze die 
            DELE-Akkreditierung des Cervantes-Instituts in Zagreb, um die spanische Sprache offiziell 
            zu unterrichten und zu prüfen. Ich habe einen BA in Kunstgeschichte an der Autonomen 
            Universität Madrid in Spanien, einen MA in Theoretischer und Praktischer Philosophie 
            an der UNED und an der Universität Jena in Deutschland, einen MA in Wissenschaftsgeschichte 
            und Philosophie an der Universität Wien in Österreich und an der École Normale Supérieure 
            in Paris, Frankreich; einen MA in Europäische Union: 'European Multilevel Integration 
            and Fundamental Rights' an der UNED und werde in Kürze ein Doktorat in Philosophie beginnen."
            src="../img/ChristianProfile.jpg"
            alt="Christian-profile-photo"
        />
        <EmployeeCard
            name="Adam Fierst"
            title="Dozent (EN)"
            description="Ich bin Adam, ein Englischlehrer bei Berndt Education. Ich habe meine Reise 
            als Lehrer im Jahr 2018 begonnen. Ursprünglich komme ich aus den Vereinigten Staaten und 
            bin englischer Muttersprachler mit einem tiefen Verständnis für die englische Sprache. 
            Derzeit lebe ich in Spanien und habe mich in den letzten fünf Jahren in die spanische 
            Kultur und Sprache vertieft. Da ich fließend Spanisch spreche, bringe ich mein Wissen über 
            spanische Bräuche und Umgangssprache aus erster Hand in meinen Unterricht ein. Während 
            meines Bachelor-Studiums in Global & International Studies habe ich auch Deutsch studiert 
            und einige Zeit in Deutschland verbracht, um meine Kenntnisse weiter zu vertiefen. Mit mehr 
            als 5.000 Stunden Unterrichtserfahrung biete ich individuellen Englischunterricht, der auf 
            die Bedürfnisse jedes einzelnen Schülers zugeschnitten ist. Mein geduldiger und einnehmender 
            Unterrichtsstil schafft eine unterstützende Lernumgebung, in der sich die Schüler 
            entfalten können."
            src="../img/AdamProfile.jpeg"
            alt="Adam-profile-photo"
        />
        <EmployeeCard
            name="Oliver Goodall"
            title="Mathematik und Physik Tutor"
            description="Ich bin Oliver, ein Absolvent der University of Oxford in Physik mit einem Master 
            in Teilchenphysik und Astrophysik. Ich habe Erfahrung im Unterrichten von Mathematik, 
            Physik und Chemie, und ich liebe es, mein Wissen in diesen Fächern mit anderen zu teilen. Ich 
            stehe kurz vor dem Beginn einer Promotion in Theoretischer Teilchenphysik, die ich neben 
            meiner Leidenschaft des Unterrichtens  ausführen werde."
            src="../img/OliverProfile.jpg"
            alt="Oliver-profile-photo"
        />
    </div>
    <div class="logo-container">
        <div>
            <h3>In Zusammenarbeit mit:</h3>
            <a href="https://www.sada-center.org/">
                <img src="/img/logos/Sada.png" alt="Sada-Logo" />
            </a>
            <p>
                Die SADA ist ein integriertes Habilitations- und
                Bildungszentrum.
            </p>
            <br />
            <p>
                Unser Ansatz ist einzigartig, weil wir die Freude am Spielen,
                Lernen und Erforschen fördern. Unser Ziel ist es, die
                kommunikativen Fähigkeiten der Kinder durch Sprachtherapie zu
                entwickeln und gleichzeitig die Freude am Lernen zu fördern.
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
