<script>

export let button = "";
export let button_link = "";
export let application_check = "";

export let bronze_title = "";
export let bronze_info = "";
export let bronze_bulletpoint_1 = "";
export let bronze_bulletpoint_2 = "";
export let bronze_bulletpoint_3 = "";
export let bronze_bulletpoint_4 = "";
export let bronze_bulletpoint_5 = "";
export let bronze_bulletpoint_6 = "";

export let silver_title = "";
export let silver_info = "";
export let silver_bulletpoint_1 = "";
export let silver_bulletpoint_2 = "";
export let silver_bulletpoint_3 = "";
export let silver_bulletpoint_4 = "";
export let silver_bulletpoint_5 = "";
export let silver_bulletpoint_6 = "";

export let gold_title = "";
export let gold_info = "";
export let gold_bulletpoint_1 = "";
export let gold_bulletpoint_2 = "";
export let gold_bulletpoint_3 = "";
export let gold_bulletpoint_4 = "";
export let gold_bulletpoint_5 = "";
export let gold_bulletpoint_6 = "";


</script>










<div class="plan">
    <div class="inner">
        <!-- <span class="pricing">
            <span>
                £150 <small>/ h</small>
            </span>
        </span> -->
        <p class="title">{bronze_title}</p>
        <p class="info">{bronze_info}</p>
        <br>
        <p class="info">{bronze_bulletpoint_1}</p>
        <p class="info">{bronze_bulletpoint_2}</p>
        <p class="info">{bronze_bulletpoint_3}</p>
        <p class="info">{bronze_bulletpoint_4}</p>
        <p class="info">{bronze_bulletpoint_5}</p>
        <p class="info">{bronze_bulletpoint_6}</p>
        <ul class="features">
            <!-- <li>
                <span class="icon">
                    <img src="../img/uni-admissions/check.png" alt="Uncheck">
                </span>
                <span><strong>3</strong> Consultancy Hours</span>
            </li> -->
            <li>
                <span class="icon">
                    <img src="../img/uni-admissions/uncheck.png" alt="Uncheck">
                </span>
                <span><strong>UCAS</strong> {application_check}</span>
            </li>
        </ul>
        <div class="action">
        <a class="button" href="{button_link}">{button}</a>
        </div>
    </div>
</div>

<div class="plan">
    <div class="inner">
        <!-- <span class="pricing">
            <span>
                £150 <small>/ h</small>
            </span>
        </span> -->
        <p class="title">{silver_title}</p>
        <p class="info">{silver_info}</p>
        <br>
        <p class="info">{silver_bulletpoint_1}</p>
        <p class="info">{silver_bulletpoint_2}</p>
        <p class="info">{silver_bulletpoint_3}</p>
        <p class="info">{silver_bulletpoint_4}</p>
        <p class="info">{silver_bulletpoint_5}</p>
        <p class="info">{silver_bulletpoint_6}</p>
        <ul class="features">
            <!-- <li>
                <span class="icon">
                    <img src="../img/uni-admissions/check.png" alt="Uncheck">
                </span>
                <span><strong>5</strong> Consultancy Hours</span>
            </li> -->
            <li>
                <span class="icon">
                    <img src="../img/uni-admissions/uncheck.png" alt="Uncheck">
                </span>
                <span><strong>UCAS</strong> {application_check}</span>
            </li>
        </ul>
        <div class="action">
        <a class="button" href="{button_link}">{button}</a>
        </div>
    </div>
</div>

<div class="plan">
    <div class="inner">
        <!-- <span class="pricing">
            <span>
                £150 <small>/ h</small>
            </span>
        </span> -->
        <p class="title">{gold_title}</p>
        <p class="info">{gold_info}</p>
        <br>
        <p class="info">{gold_bulletpoint_1}</p>
        <p class="info">{gold_bulletpoint_2}</p>
        <p class="info">{gold_bulletpoint_3}</p>
        <p class="info">{gold_bulletpoint_4}</p>
        <p class="info">{gold_bulletpoint_5}</p>
        <p class="info">{gold_bulletpoint_6}</p>
        <ul class="features">
            <!-- <li>
                <span class="icon">
                    <img src="../img/uni-admissions/check.png" alt="Uncheck">
                </span>
                <span><strong>10</strong> Consultancy Hours</span>
            </li> -->
            <li>
                <span class="icon">
                    <img src="../img/uni-admissions/check.png" alt="Uncheck">
                </span>
                <span><strong>UCAS</strong> {application_check}</span>
            </li>
        </ul>
        <div class="action">
        <a class="button" href="{button_link}">{button}</a>
        </div>
    </div>
</div>










<style>

.plan {
  border-radius: 16px;
  box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
  padding: 10px;
  background-color: #fff;
  color: #697e91;
  max-width: 300px;
}

.plan strong {
  font-weight: 600;
  color: #425275;
}

.plan > .inner {
  align-items: center;
  padding: 20px;
  padding-top: 40px;
  border-radius: 12px;
  position: relative;
}

.plan:nth-child(1) > .inner {
    background-color: #e9d9bd;
}

.plan:nth-child(2) > .inner {
    background-color: #e8ecf0;
}

.plan:nth-child(3) > .inner {
    background-color: #fdf9be;
}

/* .plan .pricing {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #bed6fb;
  border-radius: 99em 0 0 99em;
  display: flex;
  align-items: center;
  padding: 0.625em 0.75em;
  font-size: 1.25rem;
  font-weight: 600;
  color: #425475;
} */

/* .plan .pricing small {
  color: #707a91;
  font-size: 0.75em;
  margin-left: 0.25em;
} */

.plan .title {
  font-weight: 600;
  font-size: 1.25rem;
  color: #425675;
}

.plan .title + * {
  margin-top: 0.75rem;
}

.plan .info + * {
  margin-top: 1rem;
}

.plan .features {
  display: flex;
  flex-direction: column;
}

.plan .features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* .plan .features li + * {
  margin-top: 0.75rem;
} */

.plan .features .icon {
  /* background-color: #1FCAC5; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.plan .features .icon img {
  width: 100%;
  height: 100%;
}

.plan .features + * {
  margin-top: 1.25rem;
}

.plan .action {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

.plan .button {
  background-color: #6558d3;
  border-radius: 6px;
  color: #fff;
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  border: 0;
  outline: 0;
  width: 100%;
  padding: 0.625em 0.75em;
  text-decoration: none;
}

.plan .button:hover, .plan .button:focus {
  background-color: #4133B7;
}

</style>