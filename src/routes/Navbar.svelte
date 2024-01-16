<script>

    import { fade, blur, fly, slide, scale } from "svelte/transition";
    // import { quintOut } from "svelte/easing";
    // import { transition_in } from "svelte/internal";
    import "./styles.css";

/////////////// Language Container ///////////////////////////////////////

let showLang = false; 

const toggleLang = () => {
  if (!showLang) {
    showLang = true
  } 
  else {
    showLang = false
  }
}

let lng = 0

const languages = [
  {name: "ENG", flag: "./img/flags/us.png", link: "/en", id: 0},
  {name: "GER", flag: "./img/flags/ger.png", link: "/ger", id: 1},
  {name: "ESP", flag: "./img/flags/esp.png", link: "/esp", id: 2},
  // {name: "UKR", flag: "../img/flags/ukr.png", link: "/", id: 3},
  // {name: "ARA", flag: "../img/flags/ara.png", link: "/", id: 4},
]
    
const selectLanguage = (id) => {
  lng = id
}

/////////////// Language Container End ///////////////////////////////////










/////////////// Collapsed Menu ///////////////////////////////////////////

let menuBar = "menu-btn"
let menuDiv = "menu-section"
let col = "col-list-hidden"

const toggleMenu = () => {
  if (menuBar === "menu-btn") {
    menuBar = "menu-btn open"
    menuDiv = "" + "ms-open"
    col = "col-list"
  }
  else {
    menuBar = "menu-btn"
    menuDiv = "" + "menu-section"
    col = "col-list-hidden"
  }
}

/////////////// Collapsed Menu End ///////////////////////////////////////










/////////////// Scroll Detection ///////////////////////////////////////////

let navbar
let menuDivSticky
let y

const stickToTop = () => {
    if (y > 20) {
      navbar = "sticky"
      menuDivSticky = "sticky-2"
    }
    else {
      navbar = ""
      menuDivSticky = ""
    }
}

/////////////// Scroll Detection End ///////////////////////////////////////

</script>

<svelte:window on:scroll={stickToTop} bind:scrollY={y} />

<main>
	<nav class="{navbar}">

        <div class="nav-container-left">
          <div class="logo-container">
            <img class="logo" src="../img/icons/Wordpress Transparent.png" alt="Berndt Education">
          </div>
            <p class="logo-text">Berndt Education</p>
        </div>

        <div class="nav-container-middle">
            <ul id="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/courses">BE Courses</a>
                  <ul class="dropdown">
                    <li><a href="/education-travel">Education Travel</a>
                  </ul>
                </li>
                <li><a href="/corporate">Corporate Clients</a>
                  <ul class="dropdown">
                    <li><a href="/coming-soon">Translation</a></li>
                    <li><a href="/coming-soon">Interpretation</a></li>
                    <li><a href="/coming-soon">Company Courses</a></li>
                  </ul>
                </li>
                <li><a href="/uni-admissions">University Admissions</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>

    <!---------- Collapsed Menu 1 -------------->

          <div on:click={toggleMenu} class={menuBar}>
            <div class="menu-btn__burger"></div>
          </div>

    <!---------- Collapsed Menu 1 End ---------->

        </div>
        <div class="nav-container-right">
          <div id="select-language" on:click={toggleLang}>
              <img id="flag" src={languages[lng].flag} alt="">
              <p id="selected-language">{languages[lng].name}</p>
          </div>
          {#if showLang}
          <ul id="language-container">
            {#each languages as language (language.id)}
              <a data-sveltekit-reload href="{language.link}" on:click={() => selectLanguage(language.id)} on:click={toggleLang}><li>{language.name}</li></a>
            {/each}
          </ul>
          {/if}
        </div>

      </nav>

    <!---------- Collapsed Menu 2 ------------->
    {#if menuDiv == "ms-open"}
      <section transition:slide={{duration: 300}} class="{menuDiv} {menuDivSticky}">

        <ul id={col} transition:slide={{duration: 300}}>
          <li on:click={toggleMenu}><a href="/">Home</a></li>
          <li on:click={toggleMenu}><a href="/courses">BE Courses</a></li>
          <div on:click={toggleMenu} class="dropdown-uni-admissions">
            <a href="/education-travel">Education Travel</a>
          </div>
          <li on:click={toggleMenu}><a href="/corporate">Corporate Clients</a></li>
          <div class="dropdown-corporate-clients">
            <a href="/coming-soon">Translation</a>
            <a href="/coming-soon">Interpretation</a>
            <a href="/coming-soon">Company Courses</a>
          </div>
          <li on:click={toggleMenu}><a href="/uni-admissions">University Admissions</a></li>
          <li on:click={toggleMenu}><a href="/about-us">About Us</a></li>
          <li on:click={toggleMenu}><a href="/contact">Contact</a></li>
        </ul> 

        <div class="nav-container-collapsed">
          <div id="select-language" on:click={toggleLang}>
              <img id="flag" src={languages[lng].flag} alt="">
              <p id="selected-language">{languages[lng].name}</p>
          </div>
          {#if showLang}
          <ul id="language-container">
            {#each languages as language (language.id)}
              <a data-sveltekit-reload href="{language.link}" on:click={() => selectLanguage(language.id)} on:click={toggleLang}><li>{language.name}</li></a>
            {/each}
          </ul>
          {/if}
        </div>
      </section>
    {/if}
    <!---------- Collapsed Menu 2 End ---------->

</main>

<style>

/*---------- Navigation Bar ------------------------------------------------------*/

@media (min-width: 100px) and (max-width: 270px) {

  nav {
      display: flex;
      justify-content: center !important;
  }

  .nav-container-left {
      display: none !important;
  }

  .nav-container-right {
      display: none !important;
  }    
}

@media (min-width: 270px) and (max-width: 470px) {

  nav {
      display: flex;
      justify-content: center !important;
  }

  .nav-container-left {
      display: none !important;
  }

  .nav-container-right {
      display: none !important;
  }  

  .nav-container-collapsed {
    display: inline-block !important;
  }
}

  @media only screen and (min-width: 800px) {
  .menu-section {
      display: none !important;
  } 
}

@media only screen and (min-width: 471px) and (max-width: 541px) {

  nav {
      display: flex;
  }

  .nav-container-left > p {
    visibility: hidden !important;
  }
 
}

/*----------------------------------------------------------------*/

nav {
/*background-color: #1c1d25;*/
  background-color: #d6b18c;
  display: flex;
  justify-content: space-between;
  height: 100px;
  border-bottom: 1px solid white;
  z-index: 3;
}

#nav-list > li:nth-child(3) {
  overflow: hidden;
  z-index: 4;
}

#nav-list > li > .dropdown {
  display: grid;
  /* max-width: 120px !important; */
  justify-items: left;
  align-items: center;
  text-align: center;
  background: #d6b18c;
  z-index: 7;
  padding: 0px;
  height: 0px;
  transition: 0.4s !important;
  border-radius: 15px 0px 15px 0px;
  overflow: hidden;
  position: absolute;
}

#nav-list > li > .dropdown {
  text-decoration: none;
  list-style: none;
}

.dropdown > li {
  position: relative;
  transition: 0.4s !important;
  display: none;
}

.dropdown > li > a {
  color: #000000;
  font-size: 14px;
  font-weight: 500;
  transition: 0.4s !important;
}

#nav-list > li:nth-child(2) > a:hover + .dropdown {
    padding: 5px !important;
    height: 50px !important;
    transition: 0.4s !important;
}

#nav-list > li:nth-child(2) > a:hover + .dropdown > li {
    display: grid;
    transition: 0.4s !important;
}

#nav-list > li:nth-child(3) > a:hover + .dropdown {
    padding: 5px !important;
    height: 100px !important;
    transition: 0.4s !important;
}

#nav-list > li:nth-child(3) > a:hover + .dropdown > li {
    display: grid;
    transition: 0.4s !important;
}

#nav-list > li:nth-child(3) > a:hover + .dropdown > li > a {
    font-size: 14px !important;
    transition: 0.4s !important;
}

.dropdown:hover > li {
    display: grid;
}

.dropdown:hover > li:hover > a {
    color: #ffffff;
    transition: 0.1s !important;
}

.dropdown:hover > li > a {
    font-size: 14px !important;
}

#nav-list > li:nth-child(2) > .dropdown:hover {
    padding: 5px !important;
    height: 50px !important;
    font-size: 18px !important;
    transition: 0s !important;
}

#nav-list > li:nth-child(3) > .dropdown:hover {
    padding: 5px !important;
    height: 100px !important;
    font-size: 18px !important;
    transition: 0s !important;
}










.dropdown-uni-admissions {
  display: grid;
  justify-items: left;
}

.dropdown-uni-admissions > a {
  margin: 0px 0px 0px 25px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  transition: 0.1s;
}

.dropdown-uni-admissions > a:hover {
  color: white; 
}

.dropdown-corporate-clients {
  display: grid;
  justify-items: left;
}

.dropdown-corporate-clients > a {
  margin: 0px 0px 0px 25px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  transition: 0.1s;
}

.dropdown-corporate-clients > a:hover {
  color: white; 
}





.sticky {
  position: fixed !important;
  top: 0 !important;
  width: 100% !important;
}

.sticky-2 {
  position: fixed !important;
  top: 88px !important;
  width: 100% !important;
}



.nav-container-left, .nav-container-middle, .nav-container-right {
  align-items: center;
  justify-content: center;
}

.nav-container-left {
  padding: 0px 0px 10px 15px;
}

.logo-container {
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  overflow: hidden;
  height: 60px;
  width: 60px;
}

.logo {
  height: 55px;
  margin: 2px 0px 0px 6px;
}

.logo-text {
  font-size: 12px;
  color: rgb(0, 0, 0);
  font-weight: 400;
  margin-top: -15px;
  }

/*---------------------------------------------------------------------------------------------------*/

@media only screen and (min-width: 600px) {

  .menu-section {
      display: none;
  }

  .ms-open {
      /*display: none;*/
      height: 240px;
      padding: 20px 0px 5px 0px;
  }

  .nav-container-middle {
      padding-top: 20px;

  }

  .nav-container-middle > ul {
      display: flex;
      list-style-type: none;
      width: 900px;
      justify-content: space-around;
      font-size: 18px;
      margin-left: -70px;
  }

  #nav-list > li > a {
      color: black;
      font-weight: 500;
  }

  #nav-list > li > a:hover {
      color: #ffffff;
  }

}

/*--------------------------------------------------------------------------------------------*/

.nav-container-right {
visibility: visible;
align-items: center;
justify-content: center;
padding: 35px 40px;
}

#select-language {
display: unset;
cursor: pointer;
width: 10px;
height: 10px;
padding: 3px 10px;
background-color: rgba(255, 255, 255, 0.5);
box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.25);
border-radius: 15px;
}

#select-language:hover {
background-color: rgba(134, 134, 134, 0.8);
}

#select-language:active {
background-color: rgba(0, 0, 0, 0.7);
}

#flag {
height: 15px;
width: 17px;
margin-top: 0px;
}

#select-language > p {
display: inline-block;
color: #000000;
font-size: 19px;
font-weight: 600;
}
#language-container {
visibility: visible;
background-color: rgb(224, 224, 224);
box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.5);
border-radius: 15px;
padding: 0px;
font-size: 15px;
color: rgb(0, 0, 0);
}

#language-container > a > li  {
padding: 5px 25px;
text-decoration: none;
list-style: none;
cursor: pointer;
}

#language-container > a:nth-child(1) > li {
border-radius: 15px 15px 0px 0px !important;
}

#language-container > a:nth-child(3) > li {
border-radius: 0px 0px 15px 15px !important;
}

#language-container > a:hover > li {
background-color: rgba(134, 134, 134, 0.8);
}

/*---------- Navigation Bar End------------------------------------------------------*/


/*---------- Collapsed Navigation Bar ------------------------------------------------------*/

/*---------- Collapsed Navigation Keyframes -----------------------------------------------------------*/

@media only screen and (max-width: 1170px) {

  #nav-list {
      display: none;
  }
    
  /*@keyframes expand {
    from {height: 0px;}
    to {height: 150px;}
  }

  @keyframes collapse {
    from {height: 150px;}
    to {height: 0px;}
  }

  @keyframes shrink {
    from {height: 23px;}
    to {height: 0px;}
  }

  @keyframes grow {
    from {font-size: 0px;}
    to {font-size: 23px;}
  }*/

/*---------- Collapsed Navigation Keyframes End ------------------------------------------------------*/

#col-list > li > a {
    color: #000000;
}

#col-list > li:hover a { 
    color: #ffffff;
}

#col-list {
    font-size: 23px;
    text-decoration: none;
    list-style-type: none;
    /*animation: grow 0.5s ease !important;*/
}

#col-list-hidden {
    font-size: 0px;
    text-decoration: none;
    list-style-type: none;
    /*animation: shrink 0.5s linear !important;*/
}

.menu-section {
    display: grid !important;
    height: 0vh;
    justify-content: center;
    align-items: center;
    /*background-color: #1c1d25;*/
    background-color: #d6b18c;
    color: rgb(0, 0, 0);
    /*animation: collapse 0.25s cubic-bezier(0, 0, 0.1, 0.1) !important;*/
}

.ms-open {
    display: grid !important;
    height: 275px;
    justify-content: center;
    align-items: center;
    background-color: #d6b18c;
    color: rgb(0, 0, 0);
    z-index: 3;
    padding: 10px 0px 5px 0px;
}

.nav-container-collapsed {
  position: absolute;
  top: 0px;
  left: 40%;
  display: none;
}

.menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    /* border: 3px solid #fff; */
  }

  .menu-btn:hover .menu-btn__burger {
    background-color: #ffffff
  }

  .menu-btn:hover .menu-btn__burger::before {
    background-color: #ffffff
  }

  .menu-btn:hover .menu-btn__burger::after {
    background-color: #ffffff
  }

  .menu-btn__burger {
    width: 50px;
    height: 6px;
    background: rgb(0, 0, 0);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: rgb(0, 0, 0);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255,101,47,.2);
    transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-16px);
  }
  .menu-btn__burger::after {
    transform: translateY(16px);
  }
  
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

}


@media only screen and (max-width: 450px) {

  nav {
    /*background-color: #1c1d25;*/
    display: flex;
    justify-content: space-between;
    height: 80px !important;
    position: fixed !important;
    top: 0 !important;
    width: 100% !important;
  }

  .ms-open {
    /*animation: expand 0.5s ease !important;*/
    position: fixed !important;
    top: 80px !important;
    width: 100% !important;
    padding: 15px 0px 5px 0px;
    height: 250px;
  }

  .menu-section {
    display: flex !important;
    top: 0 !important;
    height: 0vh;
    background-color: #d6b18c;
    color: rgb(0, 0, 0);
    /*animation: expand 0.5s ease !important;*/
  }

  .nav-container-collapsed {
    display: inline-block !important;
  }

}


/*---------- Collapsed Navigation Bar End---------------------------------------------------*/

</style>