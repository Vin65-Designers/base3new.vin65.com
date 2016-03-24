vin65.blog = {
	init: function(){

	},
	toggleArchives: function(blogYear) {
		$("[vin65js=v65-blogArchiveYear" + blogYear + "]").toggle('fast');
	}
}

// Runner
vin65.blog.init();