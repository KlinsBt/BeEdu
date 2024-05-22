<script>
import { slide } from "svelte/transition";

let menuBar = "menu-btn";
let menuDiv = "menu-section";
let col = "col-list-hidden";

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
};

export let link1_text = "";
export let link1 = "";
export let link2_text = "";
export let link2 = "";
export let sublink2_text_1 = "";
export let sublink2_1 = "";
export let link3_text = "";
export let link3 = "";
export let sublink3_text_1 = "";
export let sublink3_1 = "";
export let sublink3_text_2 = "";
export let sublink3_2 = "";
export let sublink3_text_3 = "";
export let sublink3_3 = ""; 
export let link4_text = "";
export let link4 = "";
export let link5_text = "";
export let link5 = "";
export let link6_text = "";
export let link6 = "";
export let link7_text = "";
export let link7 = "";

</script>




<div on:click={toggleMenu} class={menuBar}>
    <div class="menu-btn__burger"></div>
</div>

{#if menuDiv == "ms-open"}
    <div transition:slide={{duration: 300}} class="{menuDiv}">
        <ul id={col} transition:slide={{duration: 300}}>
            <li on:click={toggleMenu}>
                <a href={link1}>{link1_text}</a>
            </li>
            <li on:click={toggleMenu}>
                <a href={link2}>{link2_text}</a>
            </li>
            <div on:click={toggleMenu} class="dropdown-uni-admissions">
                <a href={sublink2_1}>{sublink2_text_1}</a>
            </div>
            <li on:click={toggleMenu}>
                <a href={link3}>{link3_text}</a>
            </li>
            <div class="dropdown-corporate-clients">
                <a on:click={toggleMenu} href={sublink3_1}>{sublink3_text_1}</a>
                <a on:click={toggleMenu} href={sublink3_2}>{sublink3_text_2}</a>
                <a on:click={toggleMenu} href={sublink3_3}>{sublink3_text_3}</a>
            </div>
            <li on:click={toggleMenu}>
                <a href={link4}>{link4_text}</a>
            </li>
            <li on:click={toggleMenu}>
                <a href={link5}>{link5_text}</a>
            </li>
            <li on:click={toggleMenu}>
                <a href={link6}>{link6_text}</a>
            </li>
            <li on:click={toggleMenu}>
                <a href={link7}>{link7_text}</a>
            </li>
        </ul> 
    </div>
{/if}





<style>

li > a {
    font-size: 30px !important;
}   


div > a {
    font-size: 22px !important;
    font-weight: 400 !important;
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

.menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
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

.ms-open {
    position: fixed;
    top: 100px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--brand-color-2);
    z-index: 2;
    display: grid;
    justify-content: center;
    align-content: start;
    padding: 10% 0px 0px 0px;
    transition: all .5s ease-in-out;
}

</style>