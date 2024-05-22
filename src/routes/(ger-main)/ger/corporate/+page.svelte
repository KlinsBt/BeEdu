<script>
	
import PrivCourses from "$lib/components/sub-sites/corporate-clients/private-courses1.svelte";

</script>
    









<div class="main-container">
    <div class="page-title-container"> 
        <h1>Unsere BE-Firmenkurse</h1>
    </div>
    <div class="comp">
        <PrivCourses
            title="Individuelle Online-Kurse"
            point1="Lernen Sie nach Ihrem eigenen Tempo"
            point2="Persönliche Betreuung"
            point3="Individuelle Live-Sitzungen mit Ihrem Lehrer"
            level="Level"
            level_text="A1, A2, B1, B2, C1, C2"
            start="Beginn"
            start_text="Jederzeit"
            duration="Dauer"
            duration_text="4 Wochen je Unterlevel; A1 und A2 12 Wochen jeweils"
            hours="Wochenstunden"
            hours_text="8 Stunden Selbststudium pro Woche 2-4 Live-Sitzungen nach Absprache"
            participants="Teilnehmer"
            participants_text="Nur Sie und Ihr Dozent"
            platform="Zugang zur Lernplattform"
            platform_text="Gesamte Kursdauer"
            button="Kontaktiere Uns"
        />
    </div>
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

.comp {
    margin: 50px 0px;
}

</style>