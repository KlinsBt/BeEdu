<script>

import ImgBoxes from "$lib/components/sub-sites/uni-admissions/img-text-boxes.svelte";
import Services from "$lib/components/sub-sites/uni-admissions/services.svelte";
    
</script>


    
    
    
    
    
    
    
    
<section>

    <div class="page-title-container"> 
        <h1>University Admissions Consulting</h1>
    </div>

    <ImgBoxes 
        box_1_text="Berndt Education offers comprehensive and personalised 
        support to help students gain admission to top universities worldwide. 
        Our team of experienced consultants have a proven track record of 
        successful outcomes for our clients."

        box_2_text="13 years of experience as a consultant and leader of top 
        educational programmes in the UK, and worked with hundredes of students 
        in world-class institutions such as Oxford, Cambridge, London and 
        Harvard University. Berndt Education tutors will design successful 
        personalised academic and career plans for students. At our consultancy, 
        we pride ourselves on our team of experienced consultants. All of our 
        tutors have been admissions officers and/or taught for the University 
        of Oxford and other top universities. This provides unique insights and 
        support into the admissions process of top universities, allowing us to 
        offer a comprehensive and strategic approach to university admissions."

        box_3_text="Our team of consultants with Oxford admissions experience are 
        dedicated to providing personalised support to each student, covering all 
        aspects of the university application process, including course and 
        university/college selection, work experience, interview preparation, 
        admissions test preparation, scholarship applications, and more. 
        Their in-depth knowledge and experience enable us to develop successful 
        personalised academic and career plans for students, maximising their 
        chances of admission to top universities worldwide. Our team of 
        experienced consultants with their diverse backgrounds and expertise offers 
        a unique service to students worldwide."
    />

    <div class="services-container">
        <Services 
            bronze_title="Bronze"
            bronze_info="Personalised support to suit requirements and budget."
            bronze_bulletpoint_1="- Course and university/college selection"
            bronze_bulletpoint_2="- Work experience"
            bronze_bulletpoint_3="- Interview preparation"
            bronze_bulletpoint_4="- Admissions test preparation"
            bronze_bulletpoint_5="- Scholarship applications"
            bronze_bulletpoint_6="... and more"

            silver_title="Silver"
            silver_info="Comprehensive end-to-end strategic support on the application 
            process tailored to each student."
            silver_bulletpoint_1="- Course and university/college selection"
            silver_bulletpoint_2="- Work experience"
            silver_bulletpoint_3="- Interview preparation"
            silver_bulletpoint_4="- Admissions test preparation"
            silver_bulletpoint_5="- Scholarship applications"
            silver_bulletpoint_6="... and more"

            gold_title="Gold"
            gold_info="Comprehensive end-to-end strategic support on the application process 
            tailored to each student."
            gold_bulletpoint_1="- Course and university/college selection"
            gold_bulletpoint_2="- Work experience"
            gold_bulletpoint_3="- Interview preparation"
            gold_bulletpoint_4="- Admissions test preparation"
            gold_bulletpoint_5="- Scholarship applications"
            gold_bulletpoint_6="- UCAS applications check which includes advice on the tutor 
            report, personal statement, supplementary areas such as voluntary work, work 
            experience, competitions, and more."

            application_check="Application Check"
            button="Contact Us"
            button_link="/eng/contact"
        />
    </div>
</section>










<style>

.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

.services-container {
    display: grid;
    justify-items: center;
    align-items: end;
    grid-template-columns: auto auto auto;
    margin: 50px 0px;
}

@media (min-width: 550px) and (max-width: 775px) {
    .services-container {
        grid-template-columns: auto auto;
    }
}

@media (min-width: 371px) and (max-width: 549px) {
    .services-container {
        grid-template-columns: auto;
    }
}

@media (min-width: 0px) and (max-width: 370px) {
    .services-container {
        grid-template-columns: auto;
    }
}

    
</style>