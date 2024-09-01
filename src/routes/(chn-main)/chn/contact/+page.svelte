<script>
	
import Addresses from "$lib/components/sub-sites/contact/address.svelte";
import Form from "$lib/components/sub-sites/contact/form1.svelte";
    
</script>
    
    
    
    

    
    
    
    

<div class="page-title-container"> 
    <h1>发送咨询</h1>
    <h3>请给我们留言，我们将为您提供 15 分钟的免费咨询。<br>
        我们很乐意帮助您实现语言目标，开发学习课程，并解决您在语言解决方案方面可能遇到的任何挑战。
        您在语言解决方案（即笔译和口译）方面可能遇到的任何挑战、 以及用所需语言进行公开演讲和管理的课程。
    </h3>
</div>
<div class="add-form">
    <Addresses 
        country1="西班牙"
        country2="英国"
    />
    <Form 
        title="给我们写信"
        enter_mail="输入您的电子邮件"
        enter_name="输入您的姓名"
        enter_message="输入您的信息"
        button="发送"
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
