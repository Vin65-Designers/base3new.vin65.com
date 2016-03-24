vin65.calendars = {
	init: function(){
		
	},
	changeCalendar: function(eventCalendarID,goToDate){
		// Variables
		var $element = $(this);

		// Function

		// Logic
		vin65.loading.add($element.parent().parent());

		$.get("/index.cfm?method=calendars.showCalendar&eventCalendarID="+eventCalendarID+"&goToDate="+goToDate, function(data) {
			vin65.loading.remove($element.parent().parent());
			$element.parent().parent().replaceWith(data);
		});

	}
}

// Runner
vin65.calendars.init();
