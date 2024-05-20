<script>
	
import Course from "$lib/components/sub-sites/education-travel/course3.svelte";
    
</script>










<div class="main-container">
    <div class="page-title-container">
        <h1>Unsere BE-Kurse</h1>
        <h3>Hier können Sie unseren BE-Kurskatalog einsehen.</h3>
    </div>
    <div class="boxes">
        <Course 
            box_lang_title="BE Deutsch" 
            background_img="/img/flags/ger.png"
            p1="Lernen Sie Deutsch von zu Hause aus über Zoom mit 
            qualifizierten Dozenten und einem ansprechenden Lernsystem."
            p2="Kleine Gruppen"
            p3="4 Mal pro Woche"
            p4="Von Montag bis Donnerstag"
            link="/ger/contact"
            button="Mach Mit" 
        />
        <Course 
            box_lang_title="BE Spanisch" 
            background_img="/img/flags/esp.png"
            p1="Lernen Sie Spanisch von zu Hause aus über Zoom mit 
            qualifizierten Dozenten und einem ansprechenden Lernsystem."
            p2="Kleine Gruppen"
            p3="4 Mal pro Woche"
            p4="Von Montag bis Donnerstag"
            link="/ger/contact"
            button="Mach Mit" 
        />
        <Course 
            box_lang_title="BE Englisch" 
            background_img="/img/flags/uk.png"
            p1="Lernen Sie Englisch von zu Hause aus über Zoom mit 
            qualifizierten Dozenten und einem ansprechenden Lernsystem."
            p2="Kleine Gruppen"
            p3="4 Mal pro Woche"
            p4="Von Montag bis Donnerstag"
            link="/ger/contact"
            button="Mach Mit" 
        />
        <Course 
            box_lang_title="BE Französisch" 
            background_img="/img/flags/frn.png"
            p1="Lernen Sie Französisch von zu Hause aus über Zoom mit 
            qualifizierten Dozenten und einem ansprechenden Lernsystem."
            p2="Kleine Gruppen"
            p3="4 Mal pro Woche"
            p4="Von Montag bis Donnerstag"
            link="/ger/contact"
            button="Mach Mit" 
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

.boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
}

</style>