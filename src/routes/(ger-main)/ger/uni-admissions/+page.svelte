<script>

import ImgBoxes from "$lib/components/sub-sites/uni-admissions/img-text-boxes.svelte";
import Services from "$lib/components/sub-sites/uni-admissions/services.svelte";
    
</script>


    
    
    
    
    
    
    
    
<section>

    <div class="page-title-container"> 
        <h1>Beratung für die Zulassung an Universitäten</h1>
    </div>

    <ImgBoxes 
        box_1_text="Berndt Education bietet eine umfassende und persönliche 
        Unterstützung, um Studenten die Zulassung zu den besten Universitäten 
        weltweit zu ermöglichen. Unser Team aus Beraterteam kann auf eine 
        nachweisliche Erfolgsbilanz für unsere Kunden verweisen."

        box_2_text="13 Jahre Erfahrung als Berater und Leiter von Top-Bildungsprogrammen 
        in Großbritannien und Zusammenarbeit mit Hunderten von Studenten in 
        Weltklasse-Institutionen wie Oxford, Cambridge, London und der Harvard University. 
        Die Tutoren von Berndt Education entwerfen erfolgreiche, individuelle akademische 
        und berufliche Pläne für die Studenten. In unserer Firma sind wir stolz auf unser 
        Team von erfahrenen Beratern. Alle unsere Tutoren waren Zulassungsbeauftragte 
        und/oder haben an der Universität Oxford unterrichtet. Dadurch haben wir einen 
        einzigartigen Einblick in das Zulassungsverfahren von Spitzenuniversitäten und 
        können diese unterstützen, So können wir ein umfassendes und strategisches Konzept 
        für die Universitätszulassung anbieten."

        box_3_text="Unser Team von Beratern mit langjähriger Erfahrung im Bereich Oxford-Zulassung 
        ist darauf spezialisiert individuelle Unterstützung für jeden Studenten, die alle Aspekte 
        des Bewerbungsprozesses für eine Universität abdeckt, einschließlich der Auswahl von 
        Kursen und Universitäten/Hochschulen, Praktika Vorbereitung auf Bewerbungsgespräche, 
        Zulassungstests, Stipendienanträge und vieles mehr. Ihr umfassendes Wissen und Erfahrung 
        ermöglichen es uns, erfolgreiche individuelle akademische und berufliche und Karrierepläne 
        für Studenten zu entwickeln, um ihre Chancen auf eine Zulassung zu den besten Universitäten 
        weltweit zu erhöhen. Unser Team von erfahrenen Beratern mit unterschiedlichen Hintergründen 
        und Fachkenntnissen bietet ein einzigartiges Angebot für Studenten weltweit."
    />

    <div class="services-container">
        <Services 
            bronze_title="Bronze"
            bronze_info="Individuelle Unterstützung je nach Bedarf und Budget."
            bronze_bulletpoint_1="- Wahl des Studiengangs und der Universität/Hochschule"
            bronze_bulletpoint_2="- Berufserfahrung"
            bronze_bulletpoint_3="- Vorbereitung auf das Vorstellungsgespräch"
            bronze_bulletpoint_4="- Vorbereitung auf den Zulassungstest"
            bronze_bulletpoint_5="- Bewerbung um ein Stipendium"
            bronze_bulletpoint_6="... und mehr"

            silver_title="Silber"
            silver_info="Umfassende strategische End-to-End-Unterstützung für den Bewerbungsprozess, 
            die auf jeden Studenten zugeschnitten ist."
            silver_bulletpoint_1="- Wahl des Studiengangs und der Universität/Hochschule"
            silver_bulletpoint_2="- Berufserfahrung"
            silver_bulletpoint_3="- Vorbereitung auf das Vorstellungsgespräch"
            silver_bulletpoint_4="- Vorbereitung auf den Zulassungstest"
            silver_bulletpoint_5="- Bewerbung um ein Stipendium"
            silver_bulletpoint_6="... und mehr"

            gold_title="Gold"
            gold_info="CUmfassende strategische End-to-End-Unterstützung für den Bewerbungsprozess, 
            die auf jeden Studenten zugeschnitten ist."
            gold_bulletpoint_1="- Wahl des Studiengangs und der Universität/Hochschule"
            gold_bulletpoint_2="- Berufserfahrung"
            gold_bulletpoint_3="- Vorbereitung auf das Vorstellungsgespräch"
            gold_bulletpoint_4="- Vorbereitung auf den Zulassungstest"
            gold_bulletpoint_5="- Bewerbung um ein Stipendium"
            gold_bulletpoint_6="- UCAS applications check which includes advice on the tutor 
            report, personal statement, supplementary areas such as voluntary work, work 
            experience, competitions, and more."

            application_check="Bewerbungsprüfung"
            button="Kontaktieren Sie Uns"
            button_link="/ger/contact"
        />
    </div>
</section>










<style>

.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

.services-container {
    display: grid;
    justify-items: center;
    align-items: end;
    grid-template-columns: auto auto auto;
    margin: 50px 0px;
}

@media (min-width: 550px) and (max-width: 775px) {
    .services-container {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 371px) and (max-width: 549px) {
    .services-container {
        grid-template-columns: auto;
    }
}

@media (min-width: 0px) and (max-width: 370px) {
    .services-container {
        grid-template-columns: auto;
    }
}

    
</style>