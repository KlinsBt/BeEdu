<script>
    import EmployeeCard from "$lib/components/sub-sites/about-us/employee-card1.svelte";
</script>

<div class="main-container">
    <div class="page-title-container">
        <h1>The BE Team</h1>
        <h3>We help you achieve your goals</h3>
    </div>
    <div class="employee-cards-container">
        <EmployeeCard
            name="Denny Berndt"
            title="CEO & Educator (DE, EN, ES)"
            description="I am the founder of Berndt Education. 
            I am originally from Germany and have a B.A. in Technical 
            Translation and an M.A. from Texas Tech University in 
            German Literature & Language with a minor in Spanish Literature. 
            I have specialized in language education, school, and education 
            program management as well as curriculum development for language 
            and for children with cochlear implants collaborating with the 
            high-end facilities and staff at Sada Educational Center in Kuwait."
            src="../img/DennyProfile.jpg"
            alt="Denny-profile-photo"
        />
        <EmployeeCard
            name="Anne-Sophie"
            title="Educator (DE, FR)"
            description="I am teaching German as well as French to language 
            enthusiasts and am a trained translator graduate from The French 
            Institute of Translation and Cross-Cultural Management (ISIT). After 
            5 years of studying German and English literature, language, and 
            culture in Paris, Vienna, and Munich, I moved to Berlin about 3 
            years ago. I had the opportunity to make amazing connections in 
            Germany and to work within German and international teams as a 
            translator in the luxury market. I will be happy to support you on 
            your learning path, whether you are new to German and French or 
            aiming for perfect fluency."
            src="../img/SophieProfile.jpg"
            alt="Sophie-profile-photo"
        />
        <EmployeeCard
            name="Aneela Shah"
            title="Copywriter & Educator (EN)"
            description="I’m a graduate from the University of Oxford and 
            studied English Language and Literature. I love reading and poetry, 
            and teaching the English language is one of my passions. I also 
            work as a copywriter for a marketing company based in Oxford."
            src="../img/AneelaProfile.jpg"
            alt="Aneela-profile-photo"
        />
        <EmployeeCard
            name="Christian Blanco"
            title="Educator (ES, DE, EN, FR)"
            description="I have the French and Spanish nationality and Spanish 
            and French are my mother tongues and I have a certified B2-C1 in 
            English and a C1.2 in German. I teach English and French and German, 
            have done the ELE courses at the Cervantes Institute of Vienna and I 
            hold a DELE accreditation at the Cervantes Institute of Zagreb to 
            officially teach and examine the Spanish language. I have a BA. in 
            Art's History at the Autonomous University of Madrid in Spain, MA. 
            in Theoretical and Practical Philosophy at the UNED and at the University 
            of Jena in Germany, MA. in History and Philosophy of Science at the 
            University of Vienna in Austria and the École Normale Supérieure of Paris 
            in France; MA. in European Union: European Multilevel Integration and 
            Fundamental Rights at the UNED and will begin a PhD in Philosophy shortly."
            src="../img/ChristianProfile.jpg"
            alt="Christian-profile-photo"
        />
        <EmployeeCard
            name="Adam Fierst"
            title="Educator (EN)"
            description="I am Adam, an English educator at Berndt Education. I started 
            my teaching journey in 2018. Originally from the United States, I am a native 
            English speaker with a deep understanding of the language. Currently based 
            in Spain, I have immersed myself in the Spanish culture and language for the 
            past five years. Fluent in Spanish, I bring firsthand knowledge of Spanish 
            customs and colloquialisms to my teaching. I also studied German during my 
            Bachelor's in Global & International Studies, spending time in Germany to further 
            hone my skills. With over 5,000 hours of teaching experience, I offer personalized 
            English lessons tailored to each student's needs. My patient and engaging teaching 
            style creates a supportive learning environment where students can thrive."
            src="../img/AdamProfile.jpeg"
            alt="Adam-profile-photo"
        />
        <EmployeeCard
            name="Oliver Goodall"
            title="Educator"
            description="I am Oliver, a University of Oxford graduate in Physics, with a master's 
            degree in Particle Physics and Astrophysics. I'm an experienced tutor of mathematics, 
            physics and chemistry, and I love to share my knowledge of these subjects with 
            our clients. I'm about to start a PhD in Theoretical Particle Physics, alongside 
            my passions via teaching."
            src="../img/OliverProfile.jpg"
            alt="Oliver-profile-photo"
        />
    </div>
    <div class="logo-container">
        <div>
            <h3>Collaboration with:</h3>
            <a href="https://www.sada-center.org/">
                <img src="/img/logos/Sada.png" alt="Sada-Logo" />
            </a>
            <p>SADA is an integrated habilitative and educational center.</p>
            <br />
            <p>
                Our approach is unique because we promote joy whilst playing,
                learning and exploring. We aim to develop the child’s
                communicative abilities through speech therapy, whilst
                developing a love of learning.
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
