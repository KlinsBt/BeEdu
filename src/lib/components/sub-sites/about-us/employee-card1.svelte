<script>

export let name = "";
export let title = "";
export let description = "";
export let src = "";

</script>










<div class="card">
    <div class="circle">
        <div class="img-box">
            <img src={src} alt="Profile">
        </div>
    </div>
    <div class="content">
        <h3>{name}</h3>
        <div class="sub-text">
            <h4>{title}</h4>
        </div>
        <div class="text-container">
            <p>{description}</p>
        </div>
    </div>
</div>










<style>

.card {
    position: relative;
    max-width: 320px;
    min-height: 400px;
    background: #fff;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 1px 1px 15px 1px rgb(160, 157, 157);
}

.circle {
    position: absolute;
    top: -190px;
    left: 50%;
    width: 500px;
    height: 500px;
    transform: translateX(-50%);
    clip-path: circle();
}

.circle::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -16px;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 20px rgba(214,177,140,0.7);
    border-radius: 50%;
    z-index: 2;
    pointer-events: none;
}

.img-box {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 340px;
    height: 310px;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.content {
    margin-top: 300px;
    padding: 10px 20px 20px 20px;
}

.content > h3 {
    font-size: 1.4em;
    color: #333;
    margin-top: 0px;
    margin-bottom: 2px;
}

.sub-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sub-text > h4 {
    color: #d6b18c;
    font-weight: 500;
    margin: 0px 0px 0px 0px;
    /*text-shadow: 1px 1px 15px #7c7c7c73;*/
}

.text-container {
    overflow: hidden;
    padding: 0px 0px 0px 0px;
}

p {
    padding: 5px 0px 0px 0px;
    font-size: 0.8em;
    font-weight: 400;
}

@media (min-width: 250px) and (max-width: 340px) {

    .card {
        height: 750px;
    }

    .content {
        height: 420px !important;
    }
}



    
</style>