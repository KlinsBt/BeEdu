<script>

export let title = "";
export let box_title1 = "";
export let box1_descr = "";
export let box_title2 = "";
export let box2_descr = "";
export let box_title3 = "";
export let box3_descr = "";
export let box_title4 = "";
export let box4_descr = "";
export let box_title5 = "";
export let box5_descr = "";

</script>





<section class="sub-section-alternative">
    <h1>{title}</h1>
    <div class="info-container">
        <div class="info">
            <img class="info-image" src="img/icons/3.png" alt="Adapted Content">
            <div>
                <h3>{box_title1}</h3>
                <p class="subtext">{box1_descr}</p>
            </div>
        </div>
        <div class="info">
            <img class="info-image" src="img/icons/4.png" alt="Individual Learning">
            <div>
            <h3>{box_title2}</h3>
            <p class="subtext">{box2_descr}</p>
            </div>
        </div>
        <div class="info">
            <img class="info-image" src="img/icons/2.png" alt="Flexible Communication">
            <div>
            <h3>{box_title3}</h3>
            <p class="subtext">{box3_descr}</p>
            </div>
        </div>
        <div class="info">
            <img class="info-image" src="img/icons/1.png" alt="Regular Checks">
            <div>
            <h3>{box_title4}</h3>
            <p class="subtext">{box4_descr}</p>
            </div>
        </div>
        <div class="info">
            <img class="info-image" src="img/icons/6.png" alt="Specific Advancement">
            <div>
            <h3>{box_title5}</h3>
            <p class="subtext">{box5_descr}</p>
            </div>
        </div>
    </div>
</section>





<style>

section {
    background-color: white;
    margin: 100px 0px 100px 0px;
}

h1 {
    margin: 20px 0px 50px 0px;
}

p {
    margin: 0;
    font-weight: 300;
}

.sub-section-alternative {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px;
}

.info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
}

.info {
    width: 200px;
    height: auto;
    min-height: 400px;
    padding: 30px 10px 50px 10px;
    box-shadow: 5px 5px 20px rgb(197, 195, 195);
    margin: 10px 20px 10px 20px;
    border-radius: 5px;
}

.info-image {
    width: 100px;
    height: 100px;
}

.info > div {
    border-color: black;
    padding: 10px 10px 10px 10px;
}

.sub-section-alternative > div > div > div > h3 {
    font-size: 16px;
}

.info > div > p {
    font-size: 15px;
}

</style>