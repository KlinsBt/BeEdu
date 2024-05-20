<script>
export let title = "";
export let subtitle = "";
export let paragraph = "";

</script>





<section class="sub-section">
    <div class="information">
        <h1>{title}</h1>
        <h2 id="sub1">{subtitle}</h2>
        <p>{paragraph}</p>
    </div>
</section>





<style>

.sub-section {
    background-color: white;
    padding: 0px 25px;
    display: grid;
    justify-items: center;
    align-items: center;
    margin-top: 70px;
}

.information {
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    max-width: 800px;
}

</style>