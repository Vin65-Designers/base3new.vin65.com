vin65.cart = {
	init: function(){

	},
	toggleCart: function() {
		var cartVisible = $(".v65-cartDropdown").is(':visible');
		if(cartVisible === true) {
			$(".v65-cartDropdown").slideUp("slow");
		} else {
			$(".v65-cartDropdown").slideDown("slow");
		}
	}
}


// Runner
vin65.cart.init();