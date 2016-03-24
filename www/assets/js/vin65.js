// JavaScript Document

var vin65 = {

	loading:{
		add:function($element){
			console.log("loadingAdd");
			vin65.notifications.cleanNotifications();
			$element.prepend("<span class='v65-loading' />");
			$element.css("position","relative");
		},

		remove:function($element){
			console.log("test");
			$element.find(".v65-loading").remove();
		}
	},
	tabPicker : function() {
		$(".v65-product-tabs li a").click(function(event) {
			var currentIndex;
			var parentElement;
			parentElement=$(this).parent();
			currentIndex=$(".v65-product-tabs li").index(parentElement);
			vin65.showTab(currentIndex);
			event.preventDefault();
		});
	},

	showTab : function(tIndex) {
		var currentTab = tIndex;
		$(".v65-product-tabs li").removeClass('v65-product-tabsActive');
		$(".v65-product-tabs li:eq("+currentTab+")").addClass('v65-product-tabsActive');
		$(".v65-product-tab").removeClass('v65-product-tabActive');
		$(".v65-product-tab:eq("+currentTab+")").addClass('v65-product-tabActive');
	},

	quickViewOpen : function() {
		$(".v65-product-quickViewOpen").click(function(event) {
			$(".v65-product-quickView").css("display","block");
			event.preventDefault();
		});

		$(".v65-product-quickViewClose").click(function(event) {
			$(".v65-product-quickView").css("display","none");
			event.preventDefault();
		});
	}
};
