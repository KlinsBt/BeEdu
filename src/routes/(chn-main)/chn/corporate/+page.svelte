<script>
	
import PrivCourses from "$lib/components/sub-sites/corporate-clients/private-courses1.svelte";

</script>
    









<div class="main-container">
    <div class="page-title-container"> 
        <h1>我们的企业 BE 课程</h1>
    </div>
    <div class="comp">
        <PrivCourses
            title="在线个人课程"
            point1="按自己的节奏学习"
            point2="个人支持"
            point3="与老师进行单独的现场教学"
            level="级别"
            level_text="A1, A2, B1, B2, C1, C2"
            start="开始"
            start_text="随时"
            duration="持续时间"
            duration_text="每个次级水平 4 周；A1 和 A2 各 12 周"
            hours="每周小时数"
            hours_text="每周自学 8 小时 咨询后现场授课 2-4 次"
            participants="与会者"
            participants_text="只有你和你的老师"
            platform="访问学习平台"
            platform_text="整个课程时间"
            button="联系我们"
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