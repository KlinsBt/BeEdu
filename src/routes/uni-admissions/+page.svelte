<script>
	
    import Course from "../comp library/Course3.svelte";
    import Navbar from "../Navbar.svelte";
    import Header from "..//Header.svelte";
    import Footer from "../Footer.svelte";
    import "../styles.css";

    import Services from "../comp library/Services.svelte";
    
</script>
    
    
    
    
    
    
    <Header />
    <Navbar />  
    
    
    
    <section>

        <div class="title"> 
            <h1>University Admissions Consulting</h1>
        </div>

        <br>
        <br>
        <br>

        <div class="sub-title">
            <!-- <p>Here you can see our Berndt Education course catalogue.</p> -->
        </div>

        <div>

            <div class="info-box">
                <img src="/img/uni-admissions/1.jpg" alt="Img">
                <p>
                    Berndt Education offers comprehensive and personalised support to
                    help students gain admission to top universities worldwide. Our team of
                    experienced consultants have a proven track record of successful outcomes for our clients.
                </p>
            </div>

            <div class="info-box">
                <p>
                    13 years of experience as a consultant and leader of top educational programmes in the
                    UK, and worked with hundredes of students in world-class
                    institutions such as Oxford, Cambridge, London. 
                    Berndt Education tutors will design successful personalised academic and career plans for students.
                    At our consultancy, we pride ourselves on our team of experienced consultants. 
                    All of our tutors have been admissions officers and/or taught for the University of Oxford. 
                    This provides unique insights and support into the admissions process of top universities, 
                    allowing us to offer a comprehensive and strategic approach to university admissions.
                </p>
                <img src="/img/uni-admissions/2.jpg" alt="Img">
            </div>

            <div class="info-box">
                <img src="/img/uni-admissions/3.jpg" alt="Img">
                <p>
                    Our team of consultants with Oxford admissions experience are dedicated to providing
                    personalised support to each student, covering all aspects of the university application
                    process, including course and university/college selection, work experience, interview
                    preparation, admissions test preparation, scholarship applications, and more. Their in-depth
                    knowledge and experience enable us to develop successful personalised academic and career
                    plans for students, maximising their chances of admission to top universities worldwide.
                    Our team of experienced consultants with their diverse backgrounds and expertise offers a
                    unique offering to students worldwide.
                </p>
            </div>
        </div>

    </section>

    <br>
    <br>
    <br>

    <section class="services-container">
        <Services />
    </section>
    
    <br>
    <br>
    <br>
    
    <Footer />







    
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

    .sub-title {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: 20px;
            padding: 0px 50px 0px 50px;
    }

    .info-box {
        display: grid;
        justify-items: center;
        grid-template-columns: auto auto;
        align-items: center;
        /* padding: 10px; */
        /* max-height: 800px; */
        background-color: beige;
        border-top: 5px solid #cfbaa7;
        border-bottom: 5px solid #cfbaa7;
    }

    .info-box:nth-child(even) {
        background-color: azure;
        border: none;
    }

    .info-box > img {
        width: 100%;
        height: auto;
        max-height: 400px; 
    }

    .info-box:nth-child(2) > img {
        width: 100%;
        height: auto;
        max-height: 570px; 
    }

    .info-box > p {
        font-size: 20px;
        font-weight: 500;
        padding: 25px 10%;
    }

    .services-container {
        display: grid;
        justify-items: center;
        align-items: end;
        grid-template-columns: auto auto auto;
    }

    @media (min-width: 550px) and (max-width: 775px) {

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto auto;
        }
    }

    @media (min-width: 1px) and (max-width: 450px) {

        .title {
            margin-top: 150px;
        }
    }

    @media (min-width: 371px) and (max-width: 549px) {

        .info-box {
            grid-template-columns: auto;
        }

        .info-box:nth-child(2) > p {
            grid-row: 2/2;
        }

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto;
        }
    }

    @media (min-width: 1px) and (max-width: 370px) {

        .info-box {
            grid-template-columns: auto;
        }

        .info-box:nth-child(2) > p {
            grid-row: 2/2;
        }

        .info-box > p {
            font-size: 18px;
        }

        .services-container {
            grid-template-columns: auto;
        }
    }

    
    </style>