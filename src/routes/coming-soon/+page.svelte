<script>

    // import Form from "../comp library/Form.svelte";
    import Navbar from "../Navbar.svelte";
    import Header from "..//Header.svelte";
    import Footer from "../Footer.svelte";
    import '../styles.css';

</script>

<Header />
<Navbar />   

<main>

    <div class="title"> 
        <h1>Coming Soon ...</h1>
    </div>

</main>

<Footer />

<style>

main {
    /* background-image: url("/img/logos/TransparentLogo.png"); */
    background-color: #1d1d3d;
    /* height: 1000px;
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; */
}    

        
.title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0px;
    padding: 200px 50px 500px 50px;
    color: aliceblue;
}

h1 {
    font-size: 4em;
}
</style>