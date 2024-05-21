<script>

export let box_1_text = "";
export let box_2_text = "";
export let box_3_text = "";

</script>










<div>
    <div class="info-box">
        <img src="/img/uni-admissions/1.jpg" alt="Img">
        <p>{box_1_text}</p>
    </div>

    <div class="info-box">
        <p>{box_2_text}</p>
        <img src="/img/uni-admissions/2.jpg" alt="Img">
    </div>

    <div class="info-box">
        <img src="/img/uni-admissions/3.jpg" alt="Img">
        <p>{box_3_text}</p>
    </div>
</div>










<style>

.info-box {
    display: grid;
    justify-items: center;
    grid-template-columns: auto auto;
    align-items: center;
    /* padding: 10px; */
    /* max-height: 800px; */
    background-color: beige;
    border-top: 5px solid #cfbaa7;
    border-bottom: 5px solid #cfbaa7;
}

.info-box:nth-child(even) {
    background-color: azure;
    border: none;
}

.info-box > img {
    width: 100%;
    height: auto;
    max-height: 400px; 
}

.info-box:nth-child(2) > img {
    width: 100%;
    height: auto;
    max-height: 570px; 
}

.info-box > p {
    font-size: 20px;
    font-weight: 500;
    padding: 25px 10%;
}

@media (min-width: 550px) and (max-width: 775px) {
    .info-box > p {
        font-size: 18px;
    }
}

@media (min-width: 371px) and (max-width: 549px) {

    .info-box {
        grid-template-columns: auto;
    }

    .info-box:nth-child(2) > p {
        grid-row: 2/2;
    }

    .info-box > p {
        font-size: 18px;
    }
}

@media (min-width: 1px) and (max-width: 370px) {

    .info-box {
        grid-template-columns: auto;
    }

    .info-box:nth-child(2) > p {
        grid-row: 2/2;
    }

    .info-box > p {
        font-size: 18px;
    }
}
</style>