<cfoutput> <!DOCTYPE html>
<html>
<head>	<cf_vin65GlobalAssets>	<cf_metaTags>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
	<link rel="stylesheet" href="/assets/slick/slick.css"/>
	<cf_blog_RSSFeed>
</head>
<body>
	<section class="v65-tools">
		<cf_login>
		<cf_modalCart>
	</section>

	<header>
		<div class="logo">
			<img src="/assets/images/logo.svg" alt="<cf_websiteName options="{'element':''}">">
		</div>
		<cf_mainNav depth="2" options="{'element':'nav','attributes':{'class':'v65-mainNav'}}">
	</header>

	<section>
		<article class="blogContent">
			<cf_mainContent>
		</article>

		<aside class="blogTools">
			<!--
				<h4>Blog Search</h4>
				<cf_search type="blog">
			-->

			<cf_blog_subscribeByRSS>

			<h4>Recent Posts</h4>

			<cf_blog_recentPosts>
			<!--/v65-blogRecentPosts-->

			<h4>Blog Categories</h4>

			<cf_blog_categories>
			<!--/v65-blogCategories-->

			<h4>Blog Authors</h4>

			<cf_blog_authors>
			<!--/v65-blogAuthors-->

			<h4>Blog Archives</h4>
			
			<cf_blog_archives>
			<!--/v65-blogArchives-->
		</aside>
	</section>

	<footer>
		<cf_footerNav options="{'element':'nav','attributes':{'class':'v65-footerNav'}}">

		<p class="footerTools"> 
			<a href="tel:1-8999-999-9999">Call Us Toll Free: <strong>1-999-999-9999</strong></a>
			<a href="mailto:info@generic.com">info@generic.com</a></li>
			<a href="http://maps.google.com">Box 0000, City, State PostalCode</a></li>
		</p>

		<p class="footerLegal">
			<cf_copyright fromYear="2014" options="{'element':'span','attributes':{'class':'v65-copyright'}}">
			<cf_vin65Accolade options="{'element':'span','attributes':{'class':'v65-vin65Accolade'}}">
		</p>

	</footer>
	<script src="/assets/slick/slick.min.js"></script>
	<script src="/assets/js/scripts.js"></script>
	<cf_vin65GlobalFooterAssets></body>
</html> </cfoutput>
