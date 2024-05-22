<script>

export let country1 = "";
export let country2 = "";

</script>










<div class="address-container">
    <address>
        <span>Berndt Education
            <br>
            Calle Barcenillas 8
            <br>
            29012, Malaga
            <br>
            {country1}
        </span>
        <span>
            Berndt Education
            <br>
            7 Bell Yard
            <br>
            London WC2A 2JR
            <br>
            {country2}
        </span>
        <div class="info">
            <p><a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a></p>
            <p><a href="tel:+34631896435">+34 631896435</a></p>
            <p><a href="tel:+442038852772">+442038852772</a></p>
        </div>
    </address>
</div>










<style>

.address-container {
    display: flex;
    justify-content: center;
    margin: 150px 0px 0px 0px;
}

address {
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto;
    text-align: center;
    margin-top: 0px;
    max-height: 200px;
}

address > span {
    text-align: center; 
    display: grid;
    width: 185px;
}

.info > p > a {
    margin: 0px;
    color: rgb(90, 90, 90);
    font-size: 13px;
    font-weight: 400;
}

.info > p {
    margin: 0px;
    font-size: 13px !important;
}

.info {
    padding: 10px 0px 0px 0px;
    grid-column: 1/3;
}

.info > p > a:hover  {
    color: #d6b18c;
}

@media (min-width: 1300px) {

    .address-container {
        display: flex !important;
        justify-content: center !important;
        margin: 200px 0px 0px 100px !important;
    }

    .info {
        margin: 0px;
        padding: 10px 0px 0px 0px !important;
    }

    .info > p {
        padding: 0px !important;
    }

}
</style>