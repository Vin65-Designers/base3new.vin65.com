vin65.notifications = {
	init: function(){

	},
    addNotification:function(response){
        var $element = $('[v65js=notifications]');
        response.messageArray.forEach(function(value,index,array){
            $($element).append("<div v65js='notificationItem' class='v65-"+value.type+"'>"+value.message+"</div>")
        });
        $('html,body').animate({scrollTop: $($element).offset().top-70},'slow');
        vin65.notifications.clearNotificationCookie();
    },
    addErrorNotification:function(response,$element){
        $($element).prepend("<div v65js='errorNotifications' class='v65-errorNotifications'></div>");
        response.messageArray.forEach(function(value,index,array){
            $("[v65js=errorNotifications]").append("<div v65js='errorItem' class='v65-error v65-field-"+value.field+"'>"+value.message+"</div>")
            if(value.field) {
                var fields = value.field.split(',');
                fields.forEach(function(fieldName){
                    if(fieldName){
                        $($element).find("[name="+fieldName+"]").addClass("v65-error"); //should be v65-has-error or v65-form-error
                        $($element).find("[for="+fieldName+"]").addClass("v65-error"); //should be v65-has-error or v65-form-error
                    }
                });
            }
        });
        $('html,body').animate({scrollTop: $("[v65js=errorNotifications]").offset().top-70},'slow');
        vin65.loading.remove($element);
    },
    clearNotificationCookie:function(){
        document.cookie='FLASHMESSAGES=;';
    },
    parseNotifications:function(response,$element){
        vin65.notifications.cleanNotifications();
        if(response.messageArray.length){
            switch (response.messageType) {
                case 'form':
                    vin65.notifications.addErrorNotification(response,$element);
                break;
                case 'page':
                    vin65.notifications.addNotification(response);
                break;
            }
        }
        if(response.jsCallback){
            eval(response.jsCallback);
        }
    },
    cleanNotifications:function(){
        console.log("notifications cleaned");
        $("[v65js=notifications]").html('');
        $("[v65js=errorNotifications]").remove();
        $(".v65-error").removeClass('v65-error'); //should be v65-has-error or v65-form-error
    }
}

//Runner
vin65.notifications.init();
