<script>
	
    import PrivCourses from "../comp library/PrivCourses.svelte";
    import '../../styles.css';
    
</script>
    
    
    
    
    
    
    
    
    
    
    <main>

        <div class="title"> 
            <h1>Nuestros cursos de BE para empresas</h1>
        </div>

        <div class="comp">
            <PrivCourses/>
        </div>

    </main>
    
    







    
    <style>

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins",sans-serif;
    }
    
    .title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 50px;
            padding: 0px 50px 0px 50px;
    }

    .comp {
        margin: 50px 0px;
    }

   
    @media (max-width: 450px) {
            .title {
                margin-top: 150px;
            }
        }

    @media (min-width: 50px) and (max-width: 300px) {
        h1 {
            font-size: 30px;
        }
    }

    @media (min-width: 301px) and (max-width: 370px) {

        h1 {
            font-size: 30px;
        }
    }

    @media (min-width: 371px) and (max-width: 449px) {

        h1 {
            font-size: 30px;
        }
    }

    /* @media (min-width: 450px) and (max-width: 570px) {

        h1 {
            font-size: 70px;
        }

        p {
            font-size: 25px;
        }
    } */

    
    </style>