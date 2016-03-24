vin65.member = {
	email: "",
	smsNumber: "",
	username: "",
	init: function(){
		$(document).on("ready",function(){
			vin65.member.persistOriginalValues();
		});
	},
	persistOriginalValues: function() {
		vin65.member.email = $('[name="email"]').val();
		vin65.member.smsNumber = $('[name="smsNumber"]').val();
		vin65.member.username = $('[name="username"]').val();
	},
	togglePasswords: function() {
		// If username, email, or sms number changed value, or password > 0, show currentPassword
		if(vin65.member.email != $('[name="email"]').val() || vin65.member.smsNumber != $('[name="smsNumber"]').val() || vin65.member.username != $('[name="username"]').val() || $('[name="password"]').val().length > 0) {
			vin65.utilities.element.show('currentPassword');
		} else {
			vin65.utilities.element.hide('currentPassword');
		}
		
		// If password > 0, show confirmPassword
		if($('[name="password"]').val().length > 0) {
			vin65.utilities.element.show('confirmPassword');
		} else {
			vin65.utilities.element.hide('confirmPassword');
		}
	},
	toggleMemberMenu: function() {
		var cartVisible = $(".v65-memberDropdown").is(':visible');
		if(cartVisible === true) {
			$(".v65-memberDropdown").slideUp("slow");
		} else {
			$(".v65-memberDropdown").slideDown("slow");
		}
	},
	toggleEmailPermissionStatus: function() {
		if($(this).val() == 'OptOut'){
			$('[name=contactTypeIDs]').removeAttr('checked');
		}
	},
	toggleContactTypeIDs: function() {
		if($(this).is(':checked')){
			$('[name=emailStatus]').val('OptIn');
		}
	},
	toggleSMSPermissionStatus: function() {
		if($('[name="smsNumber"]').val().length > 0) {
			vin65.utilities.element.show('smsPermissionStatus');
		} else {
			vin65.utilities.element.hide('smsPermissionStatus');
			// We need to reset the permissions if they are not being used
			$('[name="smsPermissionStatus"]').val('');
		}
	}
}

// Runner
vin65.member.init();
