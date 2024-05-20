<script>

export let main_title = "";
export let main_subtitle = "";
export let main_descr = "";
export let button1 = "";
export let button1_link = "";
export let button2 = "";
export let button2_link = "";

</script>





<section class="sec-1">

    <img id="main-logo" src="img/icons/Wordpress Transparent.png" alt="Berndt Education Main Banner">

    <div class="landing-page-info">
        <img id="main-logo-2" src="img/logos/TransparentLogo.png" alt="Logo">
        <div>
        <h2>{main_title}</h2>
        </div>
        <h1>{main_subtitle}</h1>
        <h3>{main_descr}</h3>
        <div class="buttons">
            <div class="button-1"><a href={button1_link}>{button1}</a></div>
            <div class="button-2"><a href={button2_link}>{button2}</a></div>
        </div>
    </div>
  <br>

</section>





<style>
    
section {
    background-color: var(--brand-color-1);
    position: relative;
    display: grid;
    justify-items: left;
    align-items: end;
    padding: 0px;
    margin: 0px;
    height: 100vh;
    color: white;
    overflow: hidden;
}

h1 {
    font-size: 50px;
    margin: 5px 0px 0px 0px;
}

h2 {
    font-size: 30px;
    color: var(--brand-color-2);
}

h3 {
    font-size: 17px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8)
}

a {
    text-decoration: none;
    color: white;
}

#main-logo {
    position: absolute;
    height: auto;
    width: 60%;
    max-width: 800px;
    top: 10%;
    right: 0%;
    opacity: 0.5;
}

#main-logo-2 {
    display: none;
    width: 100%;
    height: auto;
    max-width: 800px;
}
       
.landing-page-info {
    max-width: 620px;
    padding: 0px 0px 0px 50px;
}
    
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

@media (min-width: 550px) and (max-width: 1300px) {

    #main-logo {
        opacity: 0.1;
    }  

}

@media (min-width: 0px) and (max-width: 550px) {

    section {
        height: 100%;
        height: 100vh;
        height: 100dvh;
        height: auto;
    }

    #main-logo {
        display: none;
    }  

    #main-logo-2 {
        display: grid;
    }

    .landing-page-info {
        display: grid;
        justify-items: center;
        align-items: center;
        padding: 0px 25px;
    }

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 15px;
    }

    .buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
    }

    .button-1, .button-2 {
        width: 150px;
        font-size: 20px;
        padding: 10px;
        margin: 10px 10px 0px 0px;
    }

}

</style>