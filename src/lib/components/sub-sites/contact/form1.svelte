<script>

//import { prevent_default } from "svelte/internal";
export let title = "";
export let enter_mail = "";
export let enter_name = "";
export let enter_message = "";
export let button = "";

</script>










<div class="main-container">
    <div class="container">
        <h2>{title}</h2>
        <form action="https://formsubmit.co/5112c206b46291ad9b73100c9fbef8b4" method="POST">
            <input type="email" name="E-Mail" id="email" placeholder={enter_mail} required>
            <input type="text" name="Name" id="name" placeholder={enter_name} required>
            <textarea name="Message" id="message" cols="35" rows="10" placeholder={enter_message}></textarea>
            <input type="submit" value={button}>
        <!--<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">-->
        </form>
    </div>
</div>










<style>

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 70vh;
    /*background: radial-gradient(#777,#1C1D25);*/
    /* transform: scale(0.95); */
}

h2 {
    font-size: 30px;
    padding: 20px;
}

.container {
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    padding: 15px;
    margin: 50px 25px;
    border-radius: 15px;
    border: none;
    box-shadow: 0 0 15px rgb(122, 122, 122);
    background-color: white;
    /* background-color: gray; */
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

input {
    width: 100%;
    margin: 10px 0px;
    height: 35px;
    font-size: 17px;
    text-align: center;
    padding: 10px;
    outline: none;
    border-radius: 15px;
    border: none;
    background: rgb(235, 228, 228);
}

textarea {
    width: 100%;
    margin: 20px 0px;
    padding: 10px 20px;
    font-size: 17px;
    text-align: center;
    outline: none;
    border-radius: 15px;
    border: none;
    background: rgb(235, 228, 228);
}

input[type=submit] {
    margin: 12px;
    width: 120px;
    height: 50px;
    padding-bottom: 10px;
    background: #e95217;
    color: rgb(255, 255, 255);
    cursor: pointer;
}

@keyframes change {
    from {background: #e95217;}
    to {background: #d6b18c;}
}

input[type=submit]:hover {
    /*background: #d6b18c;*/
    background: #a8380c;
    transform: rotate(2deg);
    transition: ease 0.4s;
    transform: change;
}

@media screen and (max-width:600px) {
    .container{
        width: 90%;
    }
}

</style>