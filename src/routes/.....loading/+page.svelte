<script>

    import "../styles.css";

    // async function load() {
    //     document.getElementById('redirect').href
    // }

    // load()

    // replace(url)

    function rerunLoadFunction() {
        location.replace(location+'en');
    }

	rerunLoadFunction()

    
    
</script>
    

<svelte:head>
    <!-- <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&amp;display=swap" rel="stylesheet"> -->
    <!----------<script src="https://kit.fontawesome.com/761e4c8e5c.js" crossorigin="anonymous"></script>---------->
    <title>Berndt Education</title>
    <!-- <link rel="icon" href="favicon.png" /> -->
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

    <main>

        <section class="sec-1">

            <img id="main-logo2" src="img/logos/TransparentLogo.png" alt="Berndt Education Main Banner">
    
            <div class="landing-page-info">

                <a id="redirect" href="/en">
                    <img id="main-logo" src="./img/icons/Wordpress Transparent.png" alt="Main Logo">
                    <div class="loader"></div>
                </a>

              <!-- <div><img id="main-logo" src="img/icons/Wordpress Transparent.png" alt="Main Logo"></div> -->
            </div>
    
          <br>
    
        </section>

    </main>
    
    
    
    
    
    
    
    
    
    
    <style>


    .loader {
        display: grid;
        justify-items: center;
        align-items: center;
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #d7b28e; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .landing-page-info > a {
        margin: 100px 0px 0px 0px
    }

    #main-logo {
        position: sticky;
        width: 100%;
        height: auto;
        max-width: 80px;
        margin: -5px 0px -124px 39px;
    }
    
    main {
            font-family: 'Poppins', sans-serif;
            margin: 0;
    }
    
    @media (min-width: 640px) {
        main {
                max-width: none;
        }
    }
    
    
    section {
        background-color: white;
    }
    
    a {
        text-decoration: none;
        color: white;
    }
    
    /*---------- Landing Page Info ------------------------------------------------------*/

    #main-logo2 {
        max-width: 100%;
        height: auto;
        display: none;
        opacity: 0.8;
    }
    
    .sec-1 {
        margin-top: 0px;
        background-color: #1c1d25;
        height: 100vh;
        color: white;
        font-size: 40px;
        padding: 0px;
        display: grid;
        justify-items: center;
        align-content: center;
    }

    </style>
