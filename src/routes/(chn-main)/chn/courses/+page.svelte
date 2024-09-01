<script>
    import Course from "$lib/components/sub-sites/education-travel/course3.svelte";
</script>

<div class="main-container">
    <div class="page-title-container">
        <h1>我们的必修课程</h1>
        <h3>在这里，您可以看到 Berndt Education 的课程目录。</h3>
    </div>
    <div class="boxes">
        <Course
            box_lang_title="BE 德语"
            background_img="/img/flags/ger.png"
            p1="通过 Zoom 在家学习德语，由合格的
            学习德语。"
            p2="小组学习"
            p3="每周 4 次"
            p4="周一至周四"
            link="/chn/contact"
            button="立即加入"   
        />
        <Course
            box_lang_title="BE 西班牙语"
            background_img="/img/flags/esp.png"
            p1="通过 Zoom 在家学习西班牙语，由合格的
            通过合格的教师和引人入胜的学习系统在家学习西班牙语"。
            p2="小组学习"
            p3="每周 4 次"
            p4="周一至周四"
            link="/chn/contact"
            button="立即加入"
        />
        <Course
            box_lang_title="BE English"
            background_img="/img/flags/uk.png"
            p1="通过 Zoom 在家学习英语，由合格的
            教师和引人入胜的学习系统"。
            p2="小组学习"
            p3="每周 4 次"
            p4="周一至周四"
            link="/chn/contact"
            button="立即加入"
        />
        <Course
            box_lang_title="BE 法语"
            background_img="/img/flags/frn.png"
            p1="通过 Zoom 在家学习法语，由合格的
            学习法语。"
            p2="小组学习"
            p3="每周 4 次"
            p4="周一至周四"
            link="/chn/contact"
            button="立即加入"
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

</style>
