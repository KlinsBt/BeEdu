<script>
    import TopSection from "$lib/components/landing-page/top-section.svelte";
    import SubSection from "$lib/components/landing-page/sub-section.svelte";
    import BenefitsSection from "$lib/components/landing-page/benefits-section.svelte";
</script>










<main>
    <TopSection 
        main_title="BERNDT EDUCATION: Ihr Tor zu außergewöhnlichen Online-Sprachkursen"
        main_subtitle="Meistern Sie Sprachen mit individualisiertem Unterricht 
        von Berndt Education"
        main_descr="Bei Berndt Education bieten wir personalisierte Sprachkurse, 
        Einzelunterricht und Gruppenunterricht für Unternehmen an, indem wir die idealen 
        Bedingungen für Sie schaffen, um Ihre Wunschsprache so schnell und effektiv wie 
        möglich zu lernen. Professionelle Pädagogen erstellen ein maßgeschneidertes 
        Programm, das zu Ihrer Work-Life-Balance passt, mit dem Sie nach jeder Sitzung 
        wissensreicher sind als zuvor. Mit unserem innovativen Ansatz genießen Sie 
        Flexibilität und Bequemlichkeit mit Online-Zugang rund um die Uhr. Üben Sie 
        Spanisch zu sprechen, Französisch, Deutsch und mehr mit unseren erfahrenen Lehrern. 
        Fangen Sie noch heute an und entdecken Sie die Freude am Sprachen lernen."
        button1="Kontakt"
        button1_link="/ger/contact"
        button2="Unsere Kurse"
        button2_link="/ger/courses"
    />

    <SubSection 
        title="AKTIVES LERNSYSTEM"
        subtitle="Für erfolgreiches Lernen"
        paragraph="Mit Berndt Education profitieren Sie oder Ihr Unternehmen von einem ansprechenden 
        Lernkonzept, das die Vernetzung über Medien in Verbindung mit klassischen Lernmethoden nutzt. 
        Die BE-Dozenten sind spezialisiert auf neurolinguistische Strategien spezialisiert, um Ihr 
        Lernerlebnis immersiv und das Behalten des Stoffes dauerhaft zu gestalten."
    />

    <BenefitsSection 
        title="Unsere Vorteile"
        box_title1="MAßGESCHNEIDERTE PROGRAMME"
        box1_descr="Die Dozenten gestalten das individuelle Programm nach einem Beratungsgespräch, 
        in dem die Ziele, der Zeitplan und die Lernmaterialien festgelegt werden."
        box_title2="SELBSTÄNDIGES LERNEN"
        box2_descr="Basierend auf dem Niveau und der Lerngeschwindigkeit des Teilnehmers werden die 
        BE-Dozenten den Teilnehmer befähigen, proaktiv an seiner Sprachentwicklung innerhalb der 
        Online-Sitzungen und darüber hinaus durch Hausaufgaben und konstruktives Feedback zu arbeiten."
        box_title3="FÖRDERUNG KOMMUNIKATIVER FÄHIGKEITEN"
        box3_descr="Teilnehmer und Dozent nutzen das Berndt Education Learning System, um durch 
        angepasstes Training in der Lernsprache leicht und sicher zu kommunizieren."
        box_title4="FEEDBACK FÜR ERFOLG"
        box4_descr="Die Dozenten geben online konstruktives Feedback und überwachen die 
        Anwendung der Sprache, um den Lernerfolg zu gewährleisten."
        box_title5="GEZIELTE FÖRDERUNG"
        box5_descr="Die Teilnehmer lernen über die BE-Kurse hinaus unabhängig vom BE-Dozenten mit 
        den zur Verfügung gestellten Materialien und erzielen so einen maximalen Lernerfolg."
    /> 
</main>










<style>
    
main {
    font-family: 'Poppins', sans-serif;
    margin: 0;
}

@media (min-width: 640px) {
    main {
        max-width: none;
    }
}

</style>
