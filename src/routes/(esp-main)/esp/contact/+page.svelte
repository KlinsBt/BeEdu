<script>
	
import Addresses from "$lib/components/sub-sites/contact/address.svelte";
import Form from "$lib/components/sub-sites/contact/form1.svelte";
    
</script>
    
    
    
    

    
    
    
    

<div class="page-title-container"> 
    <h1>Envíanos tu Consulta</h1>
    <h3>
        Envíanos un mensaje para concertar una reunión de consulta gratis de 15 minutos.<br>
        Estaremos encantados de ayudarte a alcanzar tus objetivos lingüísticos, desarrollar tu currículum de aprendizaje 
        y resolver cualquier reto que puedas tener en cuanto a soluciones lingüísticas, es decir, traducción e interpretación, 
        así como cursos de oratoria 
        y gestión en el idioma deseado.
    </h3>
</div>
<div class="add-form">
    <Addresses 
        country1="España"
        country2="Reino Unido"
    />
    <Form 
        title="Escríbenos"
        enter_mail="Introduce tu correo electrónico"
        enter_name="Introduce tu nombre"
        enter_message="Escribe aquí tu mensaje"
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
