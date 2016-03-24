var v65 = {
	global : {
		init : function(){
		},
	},
	cookies : {
	},
	home : {
		initPhotoGallery : function(){
			if($(".v65-homepageSlider").length){
				$(".v65-homepageSlider").v65PhotoGallery({
					galleryID : "CD365957-E3BE-3E56-A5B2-ABDB4D28A1C3"
				});
			}
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
		},
		initPhotoGallery : function(){
			if($(".v65-photoGallery").length){
				$(".v65-photoGallery").v65PhotoGallery({
					galleryHeight : null,
					galleryWidth : null
				});
			}
		}
	}
}

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryID : $(this).attr("v65jsPhotoGalleryID"),
			galleryHeight : $(this).attr("v65jsPhotoGalleryHeight"),
			galleryWidth : $(this).attr("v65jsPhotoGalleryWidth"),
			timestamp : "&timestamp="+ new Date().getTime(),
			fade: false, // Specify sets like: 'fold,fade,sliceDown'
			animSpeed:500, // Slide transition speed
			pauseTime:5000, // How long each slide will show
			directionNav:true, // Next & Prev navigation
			controlNav:true // 1,2,3... navigation
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth
		});
		$.ajax({
    	type: "GET",
			url: "/index.cfm?method=photoGallery.renderPhotoGalleryJSON&photoGalleryID="+settings.galleryID+defaults.timestamp,
			dataType: "json",
			success: function(json) {
				var images = "";
				for (var key in json.photos) {
					var location = '/assets/images/photogallery/images/large/',
							photo = json.photos[key].src,
							caption = json.photos[key].caption,
							url = json.photos[key].link;
					if(url == undefined){
						images += '<div><img src="'+location+photo+'" title="'+caption+'"/></div>';
					} else {
						images += '<div><a href="'+url+'"><img src="'+location+photo+'" title="'+caption+'"/></a></div>';
					}
				}
				gallery.append(images);
			},
			error: function(response){
				console.log('The v65PhotoGallery function in your scripts.js file is invalid.');
			},
			complete: function(){
				gallery.slick({
					lazyLoad: 'ondemand',
					autoplay: true,
					arrows: settings.directionNav,
					speed: settings.animSpeed,
					autoplaySpeed: settings.pauseTime,
					fade: settings.fade,
					dots: settings.controlNav,
  					infinite: true
				});
	   	}
	  });
	}
})(jQuery);

v65.global.init();
v65.home.initPhotoGallery();
v65.page.init();