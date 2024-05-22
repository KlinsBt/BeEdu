<script>
	
import PrivCourses from "$lib/components/sub-sites/corporate-clients/private-courses1.svelte";

</script>
    









<div class="main-container">
    <div class="page-title-container"> 
        <h1>Our Corporate BE Courses</h1>
    </div>
    <div class="comp">
        <PrivCourses
            title="Online Individual Courses"
            point1="Learn at your own pace"
            point2="Personal support"
            point3="Individual live sessions with your teacher"
            level="Level"
            level_text="A1, A2, B1, B2, C1, C2"
            start="Start"
            start_text="Anytime"
            duration="Duration"
            duration_text="4 weeks per sub-level; A1 and A2 12 weeks each"
            hours="Hours per week"
            hours_text="8 hours of self-study per week 2-4 live sessions after consultation"
            participants="Participants"
            participants_text="Only you and your teacher"
            platform="Access to learning platform"
            platform_text="Entire course duration"
            button="Contact Us"
        />
    </div>
</div>










<style>

.main-container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
}
    
.page-title-container {
    text-align: center;
    margin: 50px 0px;
    padding: 0px 15px;
}

.comp {
    margin: 50px 0px;
}

</style>