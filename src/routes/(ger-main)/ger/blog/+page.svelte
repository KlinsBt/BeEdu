<script>

</script>










<section>
    <div class="page-title-container"> 
        <h1>Unsere Blogs</h1>
    </div>
    <div class="blogs-container">
        <a href="/ger/blog/blog1">
            <img src="/img/blog-images/blog1.jpg" alt="Blog">
            <div>
                <h2>Wie lange braucht es, um Deutsch zu lernen?</h2>
                <div>
                    <div>
                        <p>Denny Berndt</p>
                        <p style="font-size: 12px;">15 Mai 2024</p>
                    </div>
                    <p>
                        Haben Sie sich jemals gefragt, wie lange es dauert, Deutsch zu lernen? 
                        Diese Frage stellen sich viele, die sich aus beruflichen, akademischen 
                        oder privaten Gründen mit dieser schönen Sprache ...
                    </p>
                </div>
            </div>
        </a>

        <a href="/ger/blog/blog2">
            <img src="/img/blog-images/blog2.jpg" alt="Blog 2">
            <div>
                <h2>Entfesseln Sie Ihr Sprachlernpotenzial von jedem Ort aus</h2>
                <div>
                    <div>
                        <p>Denny Berndt</p>
                        <p style="font-size: 12px;">05 June 2024</p>
                    </div>
                    <p>
                        In der heutigen vernetzten Welt ist das Erlernen einer neuen Sprache eine 
                        immer wichtigere Fähigkeit geworden. Insbesondere die deutsche Sprache bietet 
                        eine ...
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