<script>
export let imgSrc = "";
export let title = "";
export let p1 = "";
export let p2 = "";
export let p3 = "";
export let sub_title1 = "";
export let p5 = "";
export let sub_title2 = "";
export let p7 = "";
export let sub_title3 = "";
export let p9 = "";
export let sub_title4 = "";
export let p11 = "";
export let sub_title5 = "";
export let p13 = "";
export let p14 = "";
export let p15 = "";
export let sub_title6 = "";
export let p17 = "";
export let p18 = "";
export let p19 = "";
</script>
    
    
    
    
    
    
    
    
    
    
<div class="blog-container">
    <h1 id="blog-main-title">{title}</h1>
    <div id="blog-content">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <h2>{sub_title1}</h2>
        <p>{p5}</p>
        <img id="blog-main-img" src={imgSrc} alt="Blog">
        <h2>{sub_title2}</h2>
        <p>{p7}</p>
        <h2>{sub_title3}</h2>
        <p>{p9}</p>
        <h2>{sub_title4}</h2>
        <p>{p11}</p>
        <h2>{sub_title5}</h2>
        <p>{p13}</p>
        <p>{p14}</p>
        <p>{p15}</p>
        <h2>{sub_title6}</h2>
        <p>{p17}</p>
        <p>{p18}</p>
        <p>{p19}</p>
    </div>
</div>
    
    
    
    
    
    
    
    
    
    
<style>

.blog-container {
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: left;
    margin-top: 0px;
    padding: 0px 50px;
    color: aliceblue;
}

.blog-container > div {
    max-width: 1200px;
}

#blog-main-img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

#blog-main-title {
    font-size: 2.2em;
    margin: 25px 0px 75px 0px;
    text-align: center;
}

h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

p {
    font-size: 1.2em;
    line-height: 1.5;
}

#blog-content {
    display: grid;
    gap: 25px 0px;
}

@media (min-width: 0px) and (max-width: 550px) {
    .blog-container {
        padding: 0px 10px;
        color: aliceblue;
    }
}
    
</style>