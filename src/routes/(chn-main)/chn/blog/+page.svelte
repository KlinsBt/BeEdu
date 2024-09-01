<script>

</script>










<section>
    <div class="page-title-container"> 
        <h1>我们的博客</h1>
    </div>
    <div class="blogs-container">
        <a href="/chn/blog/blog1">
            <img src="/img/blog-images/blog1.jpg" alt="Blog">
            <div>
                <h2>学习德语需要多长时间？</h2>
                <div>
                    <div>
                        <p>Denny Berndt</p>
                        <p style="font-size: 12px;">2024 年 5 月 15 日</p>
                    </div>
                    <p>
                        有没有想过掌握德语需要多长时间？这是那些渴望深入学习这门美丽语言的人的共同疑问......
                    </p>
                </div>
            </div>
        </a>

        <a href="/chn/blog/blog2">
            <img src="/img/blog-images/blog2.jpg" alt="Blog 2">
            <div>
                <h2>随时随地释放语言学习潜能</h2>
                <div>
                    <div>
                        <p>Denny Berndt</p>
                        <p style="font-size: 12px;">2024 年 6 月 5 日</p>
                    </div>
                    <p>
                        在当今相互联系的世界中，掌握一门新的语言已成为一门日益重要的技能。越来越重要的技能。尤其是德语，它为我们打开了一扇门...
                    </p>
                </div>
            </div>
        </a>
    </div>
</section>










<style>

section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    background-color: #1c1d25;
    padding: 0px 0px 50px 0px;
}

.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
    color: white;
}

.blogs-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    margin: 0px 0px 0px 0px;
}

a {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    align-items: center;
    text-align: left;
    border-radius: 10px;
    background-color: #2c2d35;
    color: aliceblue;
    text-decoration: none;
    margin: 0px 0px 0px 0px;
    max-width: 700px;
}

a > img {
    width: 285px;
    height: auto;
    height: 180px;
    border-radius: 10px 0px 0px 10px;
}

a:hover {
    background-color: #3c3d45;
}

a > div {
    display: grid;
    padding: 0px 10px 0px 0px;
}

a > div > div > div {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 0px 0px 10px 0px;
}

h2 {
    font-size: 1.5em;
    margin: 0px;
}

p {
    font-size: 1em;
    margin: 0px;
}

a > div > div > p {
    font-size: 0.9em;
    margin-top: 10px;
}

@media (min-width: 0px) and (max-width: 700px) {
    a {
        display: grid;
        grid-template-columns: auto;
        gap: 5px;
        align-items: center;
        text-align: left;
        max-width: 280px;;
    }

    a > img {
        width: 280px;
        height: auto;
        border-radius: 10px 10px 0px 0px;
    }

    a > div {
        padding: 0px;
    }

    a > div > div {
        padding: 0px 10px 10px 10px;
    }

    h2 {
        font-size: 1.5em;
        margin: 0px;
        text-align: center;
    }
}

</style>