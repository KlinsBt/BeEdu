<script>
export let mail_us = "";
export let call_us = "";
</script>





<div class="top-info-container">
    <div>
        <p>{mail_us}</p>
        <p>
            <a itemprop="email" href="mailto:info@berndteducation.com">info@berndteducation.com</a>
        </p>
    </div>
    <div>
        <p>{call_us}</p>
        <p>
            <a href="tel:+34622511921">+34622511921</a>
        </p>
        <p>
            <a href="tel:+442038852772">+442038852772</a>
        </p>
    </div>
</div>





<style>

.top-info-container {
    display: flex;
    justify-content: center;
    padding: 0px 20px;
    background-color: var(--brand-color-1);
    border-bottom: 2px solid white;
    height: 2vh;
    padding: 10px 0px 5px 10px;
    gap: 0px 20px;
}

.top-info-container > div {
    display: flex;
    justify-content: center;
    gap: 0px 5px;
}

.top-info-container > div > p {
    color: white;
    margin: 0px;
    font-size: 10px;
    color: #fff;
    font-weight: 500;
}

a {
    font-size: 10px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
}

a:hover {
    color: var(--brand-color-2);
}

@media only screen and (max-width: 1170px) {
    .top-info-container {
        display: none;
    }
}

</style>