<script>

</script>

<main>

    <header>
        <div>
          <div>
            <p>Mail Us:</p>
            <p><a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a></p>
          </div>
          <div>
            <p>Call Us:</p>
            <p><a href="tel:+34622511921">+34622511921</a></p>
            <p><a href="tel:+442038852772">+442038852772</a></p>
          </div>
        </div>
    </header>

</main>

<style>

    /*---------- Header ----------------------------------------------------------*/

/*---------- Header MQ ----------------------------------------------------------*/
@media (min-width: 100px) and (max-width: 450px) {

header {
    display: none !important;
}

/*header > div > div {
    display: block;
}

body > header > div > div> p > a {
    font-size: 5px;
}

body > header > div > div> p > a:hover {
    font-size: 5px;
}

body > header > div > div > p {
    font-size: 5px;
}*/
}

@media (min-width: 270px) and (max-width: 470px) {

}

/*---------- Header MQ End----------------------------------------------------------*/

header {
    display: flex;
    justify-content: space-evenly;
    background-color: #1c1d25;
    height: 2vh;
    padding: 10px 0px 5px 10px;
    border-bottom: solid 0.5px white;
}

header > div > div:nth-child(1) > p:nth-child(1) {
    margin-right: 5px;
}

header > div > div:nth-child(2) > p:nth-child(1) {
    margin-right: 5px;
}

header > div > div:nth-child(1) > p:nth-child(2) > a {
    margin-right: 20px;
}

header > div > div:nth-child(2) > p:nth-child(2) > a {
    margin-right: 5px;
}

header > div {
    display: flex;
    justify-content: center;
}

header > div > div {
    display: flex;
}

header > div > div > p {
    font-size: 10px;
    color: white;
}

header > div > div > p > a:hover {
    font-size: 10px;
    color: #d6b18c;
}

header > div > div > p > a {
    font-size: 10px;
    color: white;
}

/*---------- Header End ----------------------------------------------------------*/

</style>