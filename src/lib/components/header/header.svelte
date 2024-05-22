<script>
import TopInfo from "./components/top-info.svelte";
import CollapsedMenu from "./components/collapsed-menu.svelte";
import Languages from "./components/languages.svelte";
import Logo from "../../images/icons/Wordpress Transparent.png";

let y = 0;
export let currentLanguage = 0;
export let mail_us = "";
export let call_us = "";
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





<svelte:window bind:scrollY={y} />

<header>

    {#if y <= 20}
    <TopInfo 
        mail_us={mail_us}
        call_us={call_us}
    />
    {/if}

    <nav>

        <div class="nav-container-left">
            <div class="logo-container">
                <img class="logo" src={Logo} alt="Berndt Education">
            </div>
            <p class="logo-text">Berndt Education</p>
        </div>
    
        <div class="collapsed-menu-container">
            <CollapsedMenu 
                link1_text={link1_text}
                link1={link1}
                link2_text={link2_text}
                link2={link2}
                sublink2_text_1={sublink2_text_1} 
                sublink2_1={sublink2_1} 
                link3_text={link3_text}
                link3={link3}
                sublink3_text_1={sublink3_text_1}
                sublink3_1={sublink3_1}
                sublink3_text_2={sublink3_text_2}
                sublink3_2={sublink3_2}
                sublink3_text_3={sublink3_text_3}
                sublink3_3={sublink3_3}
                link4_text={link4_text}
                link4={link4}
                link5_text={link5_text} 
                link5={link5}
                link6_text={link6_text}
                link6={link6} 
                link7_text={link7_text}
                link7={link7} 
            />
        </div>

        <div class="nav-container-middle">
            <div class="link-container">
                <a href={link1}>{link1_text}</a>
            </div>
            <div class="link-container">
                <a href={link2}>{link2_text}</a>
                <div class="dropdown">
                    <a href={sublink2_1}>{sublink2_text_1}</a>
                </div>
            </div>
            <div class="link-container">
                <a href={link3}>{link3_text}</a>
                <div class="dropdown">
                    <a href={sublink3_1}>{sublink3_text_1}</a>
                    <a href={sublink3_2}>{sublink3_text_2}</a>
                    <a href={sublink3_3}>{sublink3_text_3}</a>
                </div>
            </div>
            <div class="link-container">
                <a href={link4}>{link4_text}</a>
            </div>
            <div class="link-container">
                <a href={link5}>{link5_text}</a>
            </div>
            <div class="link-container">
                <a href={link6}>{link6_text}</a>
            </div>
            <div class="link-container">
                <a href={link7}>{link7_text}</a>
            </div>
        </div>
    
        <Languages 
            lng={currentLanguage}
        />
    
    </nav>
    
</header>

<div class="separator"></div>





<style>

.separator {
    height: 100px;
}

header {
    position: fixed;
    display: grid;
    background-color: #1c1d25;
    padding: 0px;
    margin: 0px;
    width: 100%;
    z-index: 5;
}

nav {
    background-color: var(--brand-color-2);
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 0px;
    border-bottom: 1px solid white;
}

.nav-container-left {
    padding-left: 20px;
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

.nav-container-middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px 20px;
}

.link-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px 20px;
}

a {
    color: var(--brand-color-1);
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.1s linear;
    z-index: 2;
}

a:hover {
    color: white;
}

.link-container:hover > .dropdown {
    color: white;
    height: auto;
    padding: 10px 0px 10px 10px;
}

.dropdown {
    overflow: hidden;
    position: absolute;
    height: 0%;
    padding: 0px;
    top: 20px;
    padding: 0px;
    background-color: var(--brand-color-2);
    transition: all 0.1s linear;
}

.dropdown > a {
    font-size: 15px;
}

.collapsed-menu-container {
    display: none;
    cursor: pointer;
    position: relative;
    z-index: 3;
}

@media only screen and (max-width: 1170px) {
    .nav-container-middle {
        display: none;
    }

    .collapsed-menu-container {
        display: grid;
    }
}

@media (min-width: 0px) and (max-width: 470px) {

    .nav-container-left {
        display: none;
    }  

}

</style>