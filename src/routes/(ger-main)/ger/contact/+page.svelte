<script>
	
import Addresses from "$lib/components/sub-sites/contact/address.svelte";
import Form from "$lib/components/sub-sites/contact/form1.svelte";
    
</script>
    
    
    
    

    
    
    
    

<div class="page-title-container"> 
    <h1>Senden Sie uns eine Anfrage</h1>
    <h3>
        Senden Sie uns eine Nachricht für ein kostenfreies 15-minütiges Beratungsgespräch.<br>
        Wir helfen Ihnen gerne, Ihre sprachlichen Ziele zu erreichen, Ihren Lehrplan zu entwickeln 
        und Herausforderungen, die Sie in Bezug auf Sprachlösungen, d.h. Übersetzung und Dolmetschen, 
        haben, sowie Kurse für öffentliches Sprechen und Management in der gewünschten Sprache.
    </h3>
</div>
<div class="add-form">
    <Addresses 
        country1="Spanien"
        country2="Vereinigtes Königreich"
    />
    <Form 
        title="Schreiben Sie Uns"
        enter_mail="E-Mail Addresse"
        enter_name="Name"
        enter_message="Ihre Nachricht"
        button="Senden"
    />
</div>

    








<style>

.page-title-container {
    display: grid;
    justify-items: center;
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

h3 {
    max-width: 700px;
}

@media (min-width: 1300px) {

    .add-form {
        display: flex;
        justify-content: center;
    }

}
    
</style>
