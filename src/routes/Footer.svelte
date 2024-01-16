<script>
    const currentYear = new Date().getFullYear();
</script>

<main>

    <footer>
        <div class="socials">
            <!--<div>
                <a href="https://www.twitter.com" class="social">
                    <img id="twitter" src="img/icons/twitter.png" alt="Twitter">
                </a>
            </div>-->
            <div>
                <a href="https://m.facebook.com/Berndt-Education-105991241926914/"  class="social">
                    <img id="facebook" src="./img/icons/facebook.png" alt="Facebook"> 
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/berndteducation/"  class="social">
                    <img id="instagram" src="./img/icons/instagram.png" alt="Instagram">
                </a>
            </div>
        </div>
        <div class="contact">
            <h2>Contact us</h2>
            <p><a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a></p>
            <!-----<p><a itemprop="email" href="mailto:dennyberndt@outlook.de">dennyberndt@outlook.de</a></p>---->
        </div>
        <div class="address-container">
            <address>
                <span>Berndt Education
                    <br>
                    Calle Barcenillas 8
                    <br>
                    29012, Malaga
                    <br>
                    Spain
                    <div>
                        <p><a itemprop="email" href="mailto:info@berndteducation.com" class="svelte-1j5i9np">info@berndteducation.com</a></p>
                        <p><a href="tel:+34622511921">+34622511921</a></p>
                        <p><a href="tel:+447922489668">+447922489668</a></p>
                        <!-- <p><a href="/">Imprint</a></p>
                        <p><a href="/">Terms of Usage</a></p> -->
                        <p><a href="/privacy-policy">Privacy Policy</a></p>
                        <!-- <p><a href="/">FAQ</a></p> -->
                        <br/>
                        <p>Copyright © {currentYear} - Berndt Education</p>
                    </div>
                </span>
            </address>
        </div>
    </footer>

</main>

<style>

footer {
    display: flex;
    flex-wrap: wrap;
    background-color: black;
    color: white;
    text-align: center;
    padding: 0;
    justify-content: space-between;
}

.contact {
    margin: 0px 25px;
}

.contact > h2 {
   margin: 20px 0px 0px 0px;
}

.contact > p:hover > a {
    color: #d6b18c;
}









/*----------------------------- MQ ---------------------------------*/

@media (min-width: 100px) and (max-width: 300px) {

    footer {
        background-color: black;
        color: white;
        text-align: center;
        padding: 10px;
        justify-content: center !important;
    }

    footer > div {
        margin: 50px 10px;
    }

    footer > div > p {
        font-size: 12px;
    }

    footer > div > h2 {
        font-size: 22px;
    }

    .contact {
        margin: 10px 0px 20px 0px !important;
    }

    .socials {
        display: flex;
        justify-content: center;
        margin: 40px 0px 40px 0px !important;
    }

}

@media (min-width: 300px) and (max-width: 531px) {

    footer {
        background-color: black;
        color: white;
        text-align: center;
        padding: 10px;
        justify-content: center !important;
    }

    footer > div > h2 {
        font-size: 30px !important;
    }
 
    footer > div > p {
        font-size: 15px !important;
    }

    footer > div > p:hover {
        color: #d6b18c;
    }

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0px 40px 0px !important;
    }

}

@media only screen and (max-width: 835px) {

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0px 40px 0px !important;
    }

    footer {
        justify-content: center !important;
    }

}

@media (min-width: 532px) and (max-width: 835px) {

    footer {
        justify-content: center !important;
    }

}

/*----------------------------- MQ End -----------------------------*/











    .address-container {
        margin: 40px 40px 40px 0px ;
    }

    .address-container > address {
        display: flex;
        font-size: 8px;
    }

    address > span {
        text-align: left; 
        display: grid;
        font-size: 10px;
    }

    address > span > div > p {
        font-size: 10px;
        font-style: none;
    }

    address > span > div > p > a {
        font-style: normal;
    }

    address > span > div > p:nth-child(4) {
        margin-top: 10px !important;
    }

    address > span > div > p:hover > a {
        color: #d6b18c;
    }










/*------------------------------ Socials --------------------------------------------------------*/

    .socials {
        display: flex;
        justify-content: center;
        margin: 40px 0px 40px 40px ;
    }

    /* #twitter {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        background-color: #00aced;
        margin-right: 7px;
    } */
    
    #facebook {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        background-color: #39569c;
        margin-right: 7px;
    }
    
    #instagram {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
        margin-right: 7px;
    }
    
    .socials > div > a > img:hover {
        transform: scale(1.1);
        background: #d6b18c !important;
        transition: ease-out 0.3 !important;
    }

/*------------------------------ Socials End ----------------------------------------------------*/

</style>