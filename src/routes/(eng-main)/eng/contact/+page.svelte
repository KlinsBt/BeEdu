<script>
	
import Addresses from "$lib/components/sub-sites/contact/address.svelte";
import Form from "$lib/components/sub-sites/contact/form1.svelte";
    
</script>
    
    
    
    

    
    
    
    

<div class="page-title-container"> 
    <h1>Send us an Inquiry</h1>
    <h3>Send us a message for a free 15-minute consultation meeting.<br>
        We are happy to help you achieve your language goals, develop your learning curriculum and solve 
        any challenges you may have in terms of language solutions, i.e., translation and interpretation, 
        as well as courses on public speaking and management in the desired language.
    </h3>
</div>
<div class="add-form">
    <Addresses 
        country1="Spain"
        country2="United Kingdom"
    />
    <Form 
        title="Write Us"
        enter_mail="Enter your E-Mail"
        enter_name="Enter your Name"
        enter_message="Enter your Message"
        button="Send"
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
