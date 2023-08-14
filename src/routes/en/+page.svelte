
<svelte:head>
    <title>Berndt Education</title>
    <!-- <link rel="icon" href="../favicon.png" /> -->
    <meta name="description" content="Customized language courses, curricula & language solutions in German, English, Spanish and Dutch.">
    <meta name="keywords" content="language, education, courses, learn">
    <link rel="icon" type="image/png" href="./img/icons/Wordpress.png">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1" /> -->

    <meta property="og:title" content="Berndt Education" />
    <meta property="og:image" content="img/icons/Wordpress.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education" />
    <meta property=“og:description“ content="Customized language courses, curricula & language solutions in German, English, Spanish and Dutch." />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head>

<script>
	
    // import Navbar from "./comp library/Navbar.svelte";
    // import Header from "./comp library/Header.svelte";
    // import Footer from "./comp library/Footer.svelte";
    //import { fade, blur, fly, slide, scale } from "svelte/transition";
    //import { quintOut } from "svelte/easing";
	import '../styles.css';

    /*let y
    
    const showY = function() {
        console.log(y)
    }*/

    //in:slide|local={{duration: 1000}} out:slide|local={{duration: 2000}}
    
</script>
    
    
    
    
    
    
    
    
<!--<svelte:window  on:scroll="{showY}" bind:scrollY={y} />-->
    
    <main>
        <!-- <Header />
        <Navbar /> -->
        <section class="sec-1">

            <img id="main-logo2" src="img/logos/TransparentLogo.png" alt="Berndt Education Main Banner">
    
            <div class="landing-page-info">
              <div>
                <h2>EDUCATION OPENS DOORS</h2>
              </div>
              <div><img id="main-logo" src="./img/icons/Wordpress Transparent.png" alt="Main Logo"></div>
                <h3 id="descr-1">With Berndt Education you will think wider and further ahead</h3>
                <p id="descr-2">Berndt Education offers personalized language courses for businesses and 
                    individuals by creating the ideal conditions for you to learn your desired language 
                    as quickly and effectively as possible. Professional educators will create a tailor-made 
                    programme that suits your work-life balance and leaves you smarter than before after every session.</p>
            </div>

          <!--<div class="first-area">
                <p>Get in contact!</p>
                <br/>
          </div> -->
    
          <br>
          
          <div class="buttons">
            <div class="button-1"><a href="/en/contact">Contact Us</a></div>
            <div class="button-2"><a href="/en/courses">Our Courses</a></div>
          </div>
    
        </section>
        
        <section class="sub-section">
            <div class="information">
                <h2>BE ACTIVE LEARNING SYSTEM</h2>
                <h3 id="sub1">The method for successful learning</h3>
                <p>With Berndt Education, you or your company benefits from an engaging learning concept which exploits 
                    interconnectedness via media in conjunction with classic learning methods. The BE Educators are specialised 
                    in neuro-linguistic strategies to make your learning experience immersive and retention of material permanent.</p>
            </div>

        </section>
    
        <section class="sub-section-alternative">
            <h2>Our Benefits</h2>
            <div class="info-container">
                <div class="info">
                    <img class="info-image" src="img/icons/3.png" alt="Adapted Content">
                    <div>
                      <h3>TAYLOR-MADE PROGRAMMES</h3>
                      <p class="subtext">Educators design the individual programme after a consultation meeting to set goals, choose a schedule and learning materials.</p>
                    </div>
                </div>
                <div class="info">
                  <img class="info-image" src="img/icons/4.png" alt="Individual Learning">
                  <div>
                    <h3>SELF-RELIANT LEARNING</h3>
                    <p class="subtext">Based on the student’s level and learning speed, BE educators will empower the client to proactively work on their 
                        language development within the online sessions and beyond via homework projects and constructive feedback sessions.</p>
                  </div>
                </div>
                <div class="info">
                  <img class="info-image" src="img/icons/2.png" alt="Flexible Communication">
                  <div>
                    <h3>FLEXIBLE COMMUNICATION SKILLS DEVELOPMENT</h3>
                    <p class="subtext">Participants and teacher use the Berndt Education Learning System to 
                        communicate with ease and confident via adapted training in the learning language.</p>
                  </div>
                </div>
                <div class="info">
                  <img class="info-image" src="img/icons/1.png" alt="Regular Checks">
                  <div>
                    <h3>FEEDBACK FOR SUCCESS</h3>
                    <p class="subtext">Educators give constructive feedback online and monitors use of the language to guarantee learning success.</p>
                  </div>
                </div>
                <div class="info">
                  <img class="info-image" src="img/icons/6.png" alt="Specific Advancement">
                  <div>
                    <h3>SPECIFIC ADVANCEMENT</h3>
                    <p class="subtext">Clients learn beyond the BE Courses independent of the BE Educator with provided materials and therefore achieve maximum learning success.</p>
                  </div>
                </div>
            </div>
        </section>
        <!-- <Footer /> -->
    </main>
    
    
    
    
    
    
    
    
    
    
    <style>


   







    /** {
        border: 2px solid black;
    }*/
    
    main {
            font-family: 'Poppins', sans-serif;
            margin: 0;
    }
    
    /*h1 {
            color: #ff3e00;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
    }*/
    
    @media (min-width: 640px) {
        main {
                max-width: none;
        }
    }
    
    
    section {
        background-color: white;
    }
    
    /*.sec1 {
        background-color: #2d3044;
        background-color: #1c1d25;
        height: 100vh;
        color: white;
        font-size: 40px;
    }
    */
    
    a {
        text-decoration: none;
        color: white;
    }
    
    /*h1 {
        font-size: 90px;
        margin: 0;
    }*/
    
    h2 {
        font-size: 50px;
    }
    
    
    p {
        margin: 0;
        font-size: 30px;
        font-weight: 300;
    }

    .information {
        text-align: center;
    }
    
    
    
    
    
    
    
    
    
    
    /*---------- Landing Page Info ------------------------------------------------------*/

    #main-logo2 {
        max-width: 100%;
        height: auto;
        display: none;
        opacity: 0.8;
    }
    
    /*---------- Landing Page Info MQ ----------------------------------------------------------*/
    
    @media (min-width: 100px) and (max-width: 300px) {
    
        .sec-1 {
            padding: 70px 10px 0px 10px !important;
            margin-top: 0px !important;
            height: 700px !important;
        }
    
        .sec-1 > div > div {
            width: 230px !important;
        }
    
        :global(#col-list)  {
            margin-top: 5px !important;
        }
    
        :global(#col-list > li)  {
            font-size: 19px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 17px !important;
        }
    
        #descr-1 {
            font-size: 15px !important;
        }
        
        #descr-2 {
            font-size: 12px !important;
        }
        
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 15px !important;
        }*/
        
        .button-1 {
            font-size: 15px !important;
        }
    
        .button-2 {
            font-size: 15px !important;
        }
    
        .sub-section {
            margin: 0px !important;
            padding: 15px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 18px !important;
        }
    
        #sub1 {
            font-size: 15px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 14px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 20px !important;
        }
    
        .info {
            height: 500px !important;
        }
    
        section.sub-section-alternative > div > div > div > h3 {
            font-size: 18px !important;
        }
    
        section.sub-section-alternative > div > div > div > p {
            font-size: 15px !important;
        }
        
    }
    
    @media (min-width: 301px) and (max-width: 340px) {
    
        .sec-1 {
            padding: 0px 10px 0px 10px !important;
            margin-top: 0px !important;
            height: 800px !important;
        }
    
        .sec-1 > div > div {
            width: 270px !important;
        }
    
        :global(#col-list)  {
            margin-top: 5px !important;
        }
    
        :global(#col-list > li)  {
            font-size: 21px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 20px !important;
        }
    
        #descr-1 {
            font-size: 15px !important;
        }
        
        #descr-2 {
            font-size: 15px !important;
        }
        
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 20px !important;
        }*/
        
        .button-1 {
            padding-top:  15px !important;
            font-size: 15px !important;
        }
    
        .button-2 {
            padding-top:  15px !important;
            font-size: 15px !important;
        }
    
        .sub-section {
            margin: 0px !important;
            padding: 20px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 22px !important;
        }
    
        #sub1 {
            font-size: 18px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 17px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 30px !important;
        }
        
    }
    
    @media (min-width: 341px) and (max-width: 440px) {
    
        .sec-1 {
            padding: 85px 10px 0px 10px !important;
            margin-top: 0px !important;
            height: 1000px !important;
        }
    
        .sec-1 > div > div {
            width: 300px !important;
        }
    
        :global(#col-list)  {
            margin-top: 5px !important;
        }
    
        :global(#col-list > li)  {
            font-size: 21px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 25px !important;
        }
    
        #descr-1 {
            font-size: 16px !important;
        }
    
        #descr-2 {
            font-size: 15px !important;
        }
    
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 20px !important;
        }*/
    
        .button-1 {
            font-size: 18px !important;
        }
    
        .button-2 {
            font-size: 18px !important;
        }
    
        .sub-section {
            margin: 0px !important;
            padding: 18px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 20px !important;
        }
    
        #sub1 {
            font-size: 18px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 16px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 30px !important;
        }
    
    }
    
    @media (min-width: 370px) and (max-width: 420px) {
    
        .sec-1 > div > div {
            width: 340px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 25px !important;
        }
    }
    
    @media (min-width: 421px) and (max-width: 440px) {
    
        .sec-1 > div > div {
            width: 390px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 28px !important;
        }
    }
    
    @media (min-width: 441px) and (max-width: 480px) {
    
        .sec-1 > div > div {
            width: 390px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 28px !important;
        }
    }
    
    @media (min-width: 481px) and (max-width: 540px) {
    
        .sec-1 > div > div {
            width: 450px !important;
        }
    
        .sec-1 > div > div > h2 {
            font-size: 33px !important;
        }
    }
    
    @media (min-width: 441px) and (max-width: 540px) {
    
        .sec-1 {
            padding: 70px 10px 0px 10px !important;
            margin-top: 0px !important;
            height: 600px !important;
        }
    
        :global(#col-list)  {
            margin-top: 5px !important;
        }
    
        :global(#col-list > li)  {
            font-size: 21px !important;
        }
    
        #descr-1 {
            font-size: 18px !important;
        }
    
        #descr-2 {
            font-size: 17px !important;
        }
    
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 22px !important;
        }*/
    
        .button-1 {
            width: 100px !important;
            font-size: 22px !important;
            border: 1px solid white !important;
        }
    
        .button-2 {
            width: 100px !important;
            font-size: 22px !important;
            border: 1px solid white !important;
        }
    
        .sub-section {
            margin: 0px !important;
            padding: 20px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 22px !important;
        }
    
        #sub1 {
            font-size: 18px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 17px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 30px !important;
        }
    
    }

    @media only screen and (max-width: 450px) {
    
        .sec-1 {
            margin-top: 50px !important;
            height: 750px !important;
        }

    }
    
    @media (min-width: 451px) and (max-width: 540px) {
    
        .sec-1 {
            margin-top: 0px !important;
            height: 900px !important;
        }
    
    }
    
    @media (min-width: 541px) and (max-width: 640px) {
    
        .sec-1 {
            padding: 30px 10px 0px 10px !important;
            height: 1000px !important;
        }
    
        .sec-1 > div > div {
            /* width: 515px !important; */
        }
    
        .sec-1 > div > div > h2 {
            font-size: 38px !important;
        }
    
        #descr-1 {
            font-size: 22px !important;
        }
    
        #descr-2 {
            font-size: 20px !important;
        }
    
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 22px !important;
        }*/
    
        .sub-section {
            margin: 0px !important;
            padding: 22px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 22px !important;
        }
    
        #sub1 {
            font-size: 22px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 20px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 40px !important;
        }
    
    }
    
    @media (min-width: 641px) and (max-width: 920px) {
    
        .sec-1 {
            padding: 30px 10px 0px 70px !important;
            height: 1200px !important;
        }
    
        .sec-1 > div > div {
            /* width: 515px !important; */
        }
    
        .sec-1 > div > div > h2 {
            font-size: 38px !important;
        }
    
        #descr-1 {
            font-size: 22px !important;
        }
    
        #descr-2 {
            font-size: 20px !important;
        }
    
        /*.first-area > p {
            padding: 0px 0px 0px 0px;
            font-size: 27px !important;
        }*/
    
        .sub-section {
            margin: 0px !important;
            padding: 22px !important;
            justify-content: center;
        }
    
        .information > h2 {
            font-size: 22px !important;
        }
    
        #sub1 {
            font-size: 22px !important;
            font-weight: 500 !important;
        }
    
        .sub-section > div > p {
            font-size: 20px !important;
            font-weight: 300 !important;
        }
    
        .sub-section-alternative > h2 {
            font-size: 40px !important;
        }
    
    }
    
    /*---------- Landing Page Info MQ End ------------------------------------------------------*/
    
    .sec-1 {
        margin-top: 0px;
        background-color: #1c1d25;
        height: 900px;
        height: 80dvh;
        color: white;
        font-size: 40px;
        padding: 100px 50px 0px 200px;
    
    }
    
    .sec-1 > div.landing-page-info > div {
        width: 700px;
    }
    
    /*--------- Main Logo ---------------*/
    
    @media (min-width: 1501px) {
    
        #main-logo {
            position: absolute;
            left: 1000px;
            top: 350px;
            z-index: 1;
            opacity: 0.5;
        }
    }
    
    @media (min-width: 1330px) and (max-width: 1550px) {
    
        #main-logo {
        position: absolute;
        scale: 0.7 !important;
        left: 800px !important;
        top: 350px;
        z-index: 1;
        opacity: 0.4;
        }
    
    }
    
    @media (min-width: 1000px) and (max-width: 1329px) {
    
        #main-logo {
        position: absolute;
        scale: 0.4 !important;
        left: 400px !important;
        top: 350px;
        z-index: 1;
        opacity: 0.3;
     }
    }
    
    @media (max-width: 999px) {

        .sec-1 {
            height: 1200px;
        }
    
        #main-logo {
            display: none;
        }

        #main-logo2 {
            width: 100% !important;
            height: auto !important;
            display: block !important;
            opacity: 0.8;
        }
    }

    @media (max-width: 750px) {
    
        #main-logo2 {
            width: 100% !important;
            height: auto !important;
            opacity: 0.8;
        }
    }
    
    /*--------- Main Logo End ---------------*/
    
    
    .landing-page-info {
        max-width: 500px;
    }

    /* .landing-page-info > div > h2 {
        text-align: center;
    } */
    
    #descr-1 {
        /* text-align: center; */
        font-size: 25px;
    }
    
    #descr-2 {
        /* text-align: center; */
        font-size: 17px;
        color: rgba(255, 255, 255, 0.8)
    }
    
    /*.first-area {
        padding: 50px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }*/
    
    .buttons {
        display: flex;
    }
    
    .button-1 {
        display: grid;
        align-items: center;
        width: 200px;
        height: 100%;
        border-radius: 15px;
        background-color: rgba(255, 68, 0, 0.7);
        text-align: center;
        font-size: 30px;
        font-weight: 300;
        padding: 10px 5px;
        margin: 10px 20px 0px 0px;
        cursor: pointer;
        border: 0.5px solid white;
        z-index: 2;
    }
    
    .button-1:hover {
        background-color: rgb(255, 123, 75);
        transition: linear 0.1s;
        transform: scale(1.01);
    }
    
    .button-1:active {
        background-color: #A9A9A9;
        color: #808080;
    }
    
    .button-2 {
        display: grid;
        align-items: center;
        width: 220px;
        height: 100%;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0);
        border: 0.5px solid white;
        text-align: center;
        font-size: 30px;
        font-weight: 300;
        padding: 10px 0px;
        margin: 10px 0px 0px 0px;
        cursor: pointer;
        z-index: 2;
    }
    
    .button-2:hover {
        background-color: #d6b18c;
        /*transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;*/
        transition: ease-in-out 0.3s;
    }
    
    .button-2:active {
        background-color: rgb(44, 44, 44);
        color: #808080;
    }
    
    /*---------- Landing Page Info End ------------------------------------------------------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*---------- Content -----------------------------------------------------------*/
    
    /*
    .social {
        margin: 20px;
    }
    */
    
    .sub-section {
        display: flex;
        justify-content: space-around;
        padding: 80px;
    }
    
    .sub-section-alternative {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 80px;
    }

    #sub1 {
        font-size: 30px;
    }


     /*
    .headshot {
        width: 300px;
        border-radius: 150px;
        margin-left: 80px;
    }
    
    .headshot-container {
        display: flex;
        align-items: center;
    }
    
    hr {
        margin-left: 20px;
        margin-right: 20px;
    }
    */
    /*---------- Content End ------------------------------------------------------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*---------- Info Boxes ------------------------------------------------------*/
    
    .info-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .info {
        width: 200px;
        height: 500px;
        padding: 30px 10px 5px 10px;
        box-shadow: 5px 5px 20px rgb(197, 195, 195);
        margin: 10px 20px 10px 20px;
        border-radius: 5px;
    }
    
    .info-image {
        width: 100px;
        height: 100px;
    }
    
    .info > div {
        border-color: black;
        padding: 10px 10px 10px 10px;
    }

    .sub-section-alternative > div > div > div > h3 {
        font-size: 16px;
    }
    
    .info > div > p {
        font-size: 15px;
    }
    
    @media only screen and (min-width: 100px) and (max-width: 500px) {
        .info-container {
            display: grid;
            grid-template-columns: auto;
            justify-content: center;
        }
    }
    
    @media only screen and (min-width: 501px) and (max-width: 800px) {
        .info-container {
            display: grid;
            grid-template-columns: auto auto;
        }
    }
    
    @media only screen and (min-width: 801px) and (max-width: 1430px) {
        .info-container {
            display: grid;
            grid-template-columns: auto auto auto;
        }
    }
    
    /*---------- Info Boxes End ---------------------------------------------------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*-------*/
    /*---------- Footer --------------------------------------------------------*/
    
    
    
    
    
    
    
    
    
    
    
    /*---------- Footer End ----------------------------------------------------*/
    </style>
