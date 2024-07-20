<script>
    import Course from "$lib/components/sub-sites/education-travel/course3.svelte";
</script>

<div class="main-container">
    <div class="page-title-container">
        <h1>Our BE Courses</h1>
        <h3>Here you can see our Berndt Education course catalogue.</h3>
    </div>
    <div class="boxes">
        <Course
            box_lang_title="BE German"
            background_img="/img/flags/ger.png"
            p1="Learn German from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Small groups"
            p3="4 times a week"
            p4="From Monday to Thursday"
            link="/eng/contact"
            button="Join Now"
        />
        <Course
            box_lang_title="BE Spanish"
            background_img="/img/flags/esp.png"
            p1="Learn Spanish from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Small groups"
            p3="4 times a week"
            p4="From Monday to Thursday"
            link="/eng/contact"
            button="Join Now"
        />
        <Course
            box_lang_title="BE English"
            background_img="/img/flags/uk.png"
            p1="Learn English from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Small groups"
            p3="4 times a week"
            p4="From Monday to Thursday"
            link="/eng/contact"
            button="Join Now"
        />
        <Course
            box_lang_title="BE French"
            background_img="/img/flags/frn.png"
            p1="Learn French from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Small groups"
            p3="4 times a week"
            p4="From Monday to Thursday"
            link="/eng/contact"
            button="Join Now"
        />
    </div>

    <div class="boxes-2">
        <Course
            box_lang_title="Learn Calculus"
            background_img="/img/bg2.jpg"
            p1="Learn Calculus from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Individual or small groups"
            p3="Flexible schedule"
            p4="Flexible routine"
            link="/contact"
            button="Join Now"
        />

        <Course
            box_lang_title="Learn Math"
            background_img="/img/bg2.jpg"
            p1="Learn Math from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Individual or small groups"
            p3="Flexible schedule"
            p4="Flexible routine"
            link="/contact"
            button="Join Now"
        />

        <Course
            box_lang_title="Learn Physics"
            background_img="/img/bg2.jpg"
            p1="Learn Physics from home via Zoom with qualified
            teachers and an engaging learning system."
            p2="Individual or small groups"
            p3="Flexible schedule"
            p4="Flexible routine"
            link="/contact"
            button="Join Now"
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

    .boxes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }

    .boxes-2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 50px;
    }
</style>
