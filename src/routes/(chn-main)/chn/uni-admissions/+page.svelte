<script>

import ImgBoxes from "$lib/components/sub-sites/uni-admissions/img-text-boxes.svelte";
import Services from "$lib/components/sub-sites/uni-admissions/services.svelte";
    
</script>


    
    
    
    
    
    
    
    
<section>

    <div class="page-title-container"> 
        <h1>大学招生咨询</h1>
    </div>

    <ImgBoxes 
        box_1_text="Berndt Education 提供全面、个性化的支持，帮助学生进入世界一流大学。
        我们的顾问团队经验丰富，拥有为客户取得成功的良好记录。"

        box_2_text="作为英国顶级教育课程的顾问和领导者，拥有 13 年的丰富经验，曾在牛津大学、剑桥大学、
        伦敦大学和哈佛大学等世界一流学府教授过数百名学生。Berndt Education 的导师将为学生设计成功的个性化学术和职业规划。
        我们的顾问团队经验丰富，我们引以为豪。我们的所有导师都曾是牛津大学和其他顶尖大学的招生官和/或教师。
        这为我们提供了对顶尖大学录取过程的独特见解和支持，使我们能够为大学录取提供全面的战略性方法。"

        box_3_text="我们的顾问团队拥有牛津大学招生经验，致力于为每位学生提供个性化支持，涵盖大学申请流程的方方面面，
        包括课程和大学/学院选择、工作经验、面试准备、入学考试准备、奖学金申请等。他们深入的知识和丰富的经验使我们能够为学生制定成功的个性化学业和职业规划，
        最大限度地提高他们被世界顶尖大学录取的机会。我们的顾问团队经验丰富，拥有不同的背景和专业知识，可为全球学生提供独一无二的服务。"
    />

    <div class="services-container">
        <Services 
            bronze_title="青铜"
            bronze_info="根据需求和预算提供个性化支持。"
            bronze_bulletpoint_1="- 课程和大学/学院选择"
            bronze_bulletpoint_2="- 工作经验"
            bronze_bulletpoint_3="- 面试准备"
            bronze_bulletpoint_4="- 入学考试准备"
            bronze_bulletpoint_5="- 奖学金申请"
            bronze_bulletpoint_6="... 及更多"

            silver_title="银色"
            silver_info="在申请过程中为每个学生提供全面的端到端战略支持 为每个学生量身定制申请流程。"
            silver_bulletpoint_1="- 课程和大学/学院选择"
            silver_bulletpoint_2="- 工作经验"
            silver_bulletpoint_3="- 面试准备"
            silver_bulletpoint_4="- 入学考试准备"
            silver_bulletpoint_5="- 奖学金申请"
            silver_bulletpoint_6="... 及更多"

            gold_title="金色"
            gold_info="在申请过程中提供全面的端到端战略支持 为每个学生量身定制。"
            gold_bulletpoint_1="- 课程和大学/学院选择"
            gold_bulletpoint_2="- 工作经验"
            gold_bulletpoint_3="- 面试准备"
            gold_bulletpoint_4="- 入学考试准备"
            gold_bulletpoint_5="- 奖学金申请"
            gold_bulletpoint_6="- UCAS 申请检查，包括导师报告、个人陈述、志愿工作、工作经验、竞赛等补充领域的建议。"

            application_check="UCAS 申请检查"
            button="联系我们"
            button_link="/chn/contact"
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