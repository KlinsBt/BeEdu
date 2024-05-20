<script>
	
import Addresses from "$lib/components/sub-sites/contact/address.svelte";
import Form from "$lib/components/sub-sites/contact/form1.svelte";
    
</script>
    
    
    
    

    
    
    
    

<div class="page-title-container"> 
    <h1>Envíenos Su Consulta</h1>
    <h3>
        Envíenos un mensaje para concertar una reunión de consulta gratis de 15 minutos.<br>
        Estaremos encantados de ayudarle a alcanzar sus objetivos lingüísticos, desarrollar 
        su currículo de aprendizaje y resolver cualquier reto que pueda tener en cuanto a 
        soluciones lingüísticas, es decir, traducción e interpretación, así como cursos de 
        oratoria y gestión en el idioma deseado.
    </h3>
</div>
<div class="add-form">
    <Addresses 
        country1="España"
        country2="Reino Unido"
    />
    <Form 
        title="Escríbanos"
        enter_mail="Introduce tu correo electrónico"
        enter_name="Introduce tu nombre"
        enter_message="Escriba aquí su mensaje"
        button="Enviar"
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
