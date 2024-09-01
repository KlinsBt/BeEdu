<script>
    import Header from "$lib/components/header/header.svelte";
	import Footer from "$lib/components/footer/footer.svelte";
	import "../../styles.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	inject({ mode: dev ? "development" : "production" });
</script>










<svelte:head>
    <title>Berndt Education： 为您提供个性化语言课程</title>
    <link rel="icon" href="/favicon.png" />
    <meta name="description" content="德语、英语、西班牙语和法语个性化语言课程。根据您的需求量身定制，帮助您有效学习并实现目标。">
    <meta name="keywords" content="语言, 教育, 课程, 学习, 在线, 英语, 德语, 法语, 西班牙语, 个性化, 虚拟课程, zoom">
    <link rel="icon" type="image/png" href="/favicon.png">

    <meta property="og:title" content="Berndt Education： 为您提供个性化语言课程" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://berndteducation.com" />
    <meta property="og:site_name" content="Berndt Education： 为您提供个性化语言课程" />
    <meta property=“og:description“ content="德语、英语、西班牙语和法语个性化语言课程。根据您的需求量身定制，帮助您有效学习并实现目标。" />
    <!-- <meta name="google-site-verification" content="dThTT2bH3f172KZ7ZB5QTzFPLGL9K14pqrPUG3uAQ3c" /> -->
</svelte:head> 

<div class="app">
	
	<Header
		currentLanguage=3
		mail_us="给我们发送邮件:"
		call_us="致电我们:"
		link1_text="首页" 
		link1="/chn" 
		link2_text="必修课程"
		link2="/chn/courses"
		sublink2_text_1="教育旅行"
		sublink2_1="/chn/education-travel" 
		link3_text="企业客户"
		link3="/chn/corporate"
		sublink3_text_1="翻译"
		sublink3_1="/chn/coming-soon"
		sublink3_text_2="口译"
		sublink3_2="/chn/coming-soon"
		sublink3_text_3="公司课程"
		sublink3_3="/chn/coming-soon"
		link4_text="大学招生"
		link4="/chn/uni-admissions"
		link5_text="博客"
		link5="/chn/blog"
		link6_text="关于我们"
		link6="/chn/about-us" 
		link7_text="联系方式"
		link7="/chn/contact" 
	/> 

	<main>
		<slot />
	</main>
	
	<Footer 
		contact_us="联系我们"
		country1="西班牙"
		country2="英国"
		privacy_policy="隐私政策"
		privacy_policy_link="/chn/privacy-policy"
	/>

</div>










<style>
</style>