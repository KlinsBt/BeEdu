<script>

import usFlag from "../../../images/flags/us.png";
import gerFlag from "../../../images/flags/ger.png";
import espFlag from "../../../images/flags/esp.png";
import chFlag from "../../../images/flags/ch.png";

let showLang = false; 
export let lng = 0;

const toggleLang = () => {
    if (!showLang) {
        showLang = true;
    } 
    else {
        showLang = false;
    }
};

const languages = [
    {name: "ENG", flag: usFlag, link: "/eng"},
    {name: "GER", flag: gerFlag, link: "/ger"},
    {name: "ESP", flag: espFlag, link: "/esp"},
    {name: "CHN", flag: chFlag, link: "/chn"},
];
    
const selectLanguage = (id) => {
    lng = id;
};

</script>





<div class="nav-container-right">
    <div id="select-language" on:click={toggleLang}>
        <img id="flag" src={languages[lng].flag} alt="Flag">
        <p id="selected-language">{languages[lng].name}</p>
    </div>
    {#if showLang}
        <ul id="language-container">
            {#each languages as language, i}
                <a href="{language.link}" on:click={() => selectLanguage(i)} on:click={toggleLang}>
                    <li>{language.name}</li>
                </a>
            {/each}
        </ul>
    {/if}
</div>





<style>

.nav-container-right {
    position: relative;
    visibility: visible;
    align-items: center;
    justify-content: center;
    padding: 35px 40px;
    z-index: 3;
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
    position: absolute;
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

#language-container > a:nth-child(4) > li {
    border-radius: 0px 0px 15px 15px !important;
}

#language-container > a:hover > li {
    background-color: rgba(134, 134, 134, 0.8);
}

/* @media (min-width: 0px) and (max-width: 470px) {

    .nav-container-right {
        display: none !important;
    }  

} */

</style>