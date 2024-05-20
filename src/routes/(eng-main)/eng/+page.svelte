<script>
    import TopSection from "$lib/components/landing-page/top-section.svelte";
    import SubSection from "$lib/components/landing-page/sub-section.svelte";
    import BenefitsSection from "$lib/components/landing-page/benefits-section.svelte";
</script>





<svelte:head>
    <title>Berndt Education: Personalized Language Courses for You</title>
    <link rel="icon" href="/favicon.png" />
    <meta name="description" content="Personalized language courses in German, English, Spanish and French. Tailored to your needs for effective learning.">
    <meta name="keywords" content="language, education, courses, learn, online, english, german, french, spanish, personalized, virtual classes, zoom">
    <link rel="icon" type="image/png" href="img/icons/Wordpress.png">

    <meta property="og:title" content="Berndt Education: Personalized Language Courses for You" />
    <meta property="og:image" content="img/icons/Wordpress.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education: Personalized Language Courses for You" />
    <meta property=“og:description“ content="Personalized language courses in German, English, Spanish and french. Tailored to your needs for effective learning." />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head>   
    
<main>
    <TopSection 
        main_title="BERNDT EDUCATION: Your Gateway to Exceptional Online Language Courses"
        main_subtitle="Unlock Language Mastery with Berndt Education Personalized Classes"
        main_descr="At Berndt Education, we offer personalized language courses one to one 
        learning and group classes for companies by creating the ideal conditions for you 
        to learn your desired language as quickly and effectively as possible. Professional 
        educators will create a tailor-made program that suits your work-life  balance and 
        leaves you smarter than before after every session. With our innovative approach, 
        enjoy flexibility and convenience with online 24/7 access. Practice speaking Spanish, 
        French, German, and more with our expert instructors. Start today and discover the joy 
        of mastering languages with Berndt Education."
        button1="Contact Us"
        button1_link="/eng/contact"
        button2="Our Courses"
        button2_link="/eng/courses"
    />

    <SubSection 
        title="BE ACTIVE LEARNING SYSTEM"
        subtitle="The method for successful learning"
        paragraph="At Berndt Education, you or your company benefit from an 
        engaging learning concept that leverages interconnectedness via media alongside classic
        learning methods. Our educators specialize in neuro-linguistic strategies, ensuring that 
        your online language courses are immersive and that material retention is permanent."
    />

    <BenefitsSection 
        title="Our Benefits"
        box_title1="TAILOR-MADE PROGRAMMES"
        box1_descr="Educators design the individual programme after a consultation meeting to 
        set goals, choose a schedule and learning materials."
        box_title2="SELF-RELIANT LEARNING"
        box2_descr="Based on the student’s level and learning speed, BE educators will empower 
        the client to proactively work on their language development within the online sessions 
        and beyond via homework projects and constructive feedback sessions."
        box_title3="FLEXIBLE COMMUNICATION SKILLS DEVELOPMENT"
        box3_descr="Participants and teacher use the Berndt Education Learning System to 
        communicate with ease and confident via adapted training in the learning language."
        box_title4="FEEDBACK FOR SUCCESS"
        box4_descr="Educators give constructive feedback online and monitors use of the 
        language to guarantee learning success."
        box_title5="SPECIFIC ADVANCEMENT"
        box5_descr="Clients learn beyond the BE Courses independent of the BE Educator with 
        provided materials and therefore achieve maximum learning success."
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
