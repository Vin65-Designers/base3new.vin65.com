vin65.form = {
	init: function(){

		//On Form Submit
		$(document).off("submit", "[v65js=form]");
		$(document).off("submit", "[v65js=view]");
		$(document).on("submit", "[v65js=form]",vin65.form.submit);
		$(document).on("submit", "[v65js=view]",vin65.form.submit);
	},
	clearCaptcha: function(url){
		$.ajax({
			type: "GET",
			url: url,
			success: function(response){
				$('.googleRecaptcha').html(response);
			}
		});
	},
	submit: function(){
		//Variables
		var $element = $(this),
		d = new Date();

		//Functions

		//Logic
		if($element.attr("action")){
			postURL = $element.attr("action") + "&timestamp=" + d.getTime();
		}else if($element.attr("href")){
			postURL = $element.attr("href") + "&timestamp=" + d.getTime();
		}else if($element.attr("data-href")){
			postURL = $element.attr("data-href") + "&timestamp=" + d.getTime();
		}

		vin65.loading.add($element);

		//Request
		request = $.post(postURL,$element.serialize())
		
		//On Request Success
		request.done(function(response){
			vin65.form.response(response,$element)
		});

		//On Request Fail
		request.fail(function(response){
			vin65.notifications.parseNotifications(response,$element);
		});

		return false
	},

	response: function(response,$element){
		//Variables
		var d = new Date();

		//Functions

		//Logic

		//Let's try to parse the JSON, if we can it's valid, if we can't we'll load it in!
		try{response = JSON.parse(response)} catch(e){}

		if(response.isSuccessful == 1){
			if(response.loadInDiv == 1){
				var loadURL = response.successAction + "&timestamp=" + d.getTime();
				$element.load(loadURL);
			} else {
				switch(response.successAction){
					case "reload":
						location.reload();
					break;
					case "closeModal":
						vin65.modal.closeModal();
						vin65.notifications.parseNotifications(response,$element);
					break;
					default:
						window.document.location = response.successAction;
					break;
				}
			}

			if(response.jsCallback){
				eval(response.jsCallback);
			}
		}else if(response.isSuccessful == 0){
			vin65.notifications.parseNotifications(response,$element);
		}else{
			$element.replaceWith(response);
		}
	}
}

//Runner
vin65.form.init();
