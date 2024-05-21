<script>

export let title = "";
export let bulletpoint1 = "";
export let bulletpoint2 = "";
export let p1 = "";
export let p2 = "";

</script>









<div class="comp" style="margin-top:50px;">
    <div>
        <div>
            <h3>{title}</h3>
            <h4>{bulletpoint1}</h4>
            <h4>{bulletpoint2}</h4>

            <p>{p1}</p>
            <p style="margin:10px;">{p2}</p>
        </div>
    </div>
</div>










<style>
.comp {
    margin: 50px 0px;
}

.comp > div {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0px 10px;
}

.comp > div > div {
    max-width: 500px;
    border-radius: 15px;
    border: 1px solid black;
    box-shadow: 1px 1px 20px rgba(247, 92, 45, 0.15);
}

.comp > div > div > h3, h4 {
    margin: 10px;
}

.comp > div > div > p {
    margin: 10px 10px 0px 10px;
    font-size: 17px;
}
</style>