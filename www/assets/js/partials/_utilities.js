vin65.utilities={
	init : function(){
		//Logic
		vin65.utilities.mainMenu();
		vin65.utilities.equalizeTableDays();
		vin65.utilities.equalizeProductGroupProducts();
		vin65.tabPicker();
		vin65.quickViewOpen();
		vin65.utilities.v65Click();
		vin65.utilities.v65Change();
		vin65.utilities.v65KeyUp();
		vin65.utilities.v65Submit();
		vin65.utilities.v65Confirm();
	},
	element:{
		show: function(v65jsSelector) {
			//Variables
			$element = $("[v65js='"+v65jsSelector+"']");
			
			//Logic
			$element.removeClass("v65-hidden");
		},
		hide: function(v65jsSelector){
			//Variables
			$element = $("[v65js='"+v65jsSelector+"']");
			
			//Logic
			$element.addClass("v65-hidden");
		},
		toggle: function(v65jsSelector) {
			//Variables
			$element = $("[v65js='"+v65jsSelector+"']");
			
			//Logic
			if($element.hasClass("v65-hidden")){
				vin65.utilities.element.show(v65jsSelector);
			}else{
				vin65.utilities.element.hide(v65jsSelector);
			}
		}
	},
	//Event Runner
	v65Change: function(){
		//Logic
		$(document).on("change","[v65js-change]", function(event){
			var contents = $(this).attr("v65js-change");
			vin65.utilities.v65EventRunner.call(this,event,contents);
			return false;
		});
	},
	v65Confirm: function(){
		//Logic
		$(document).on("click","[v65js-confirm]", function(event){
			var contents = $(this).attr("v65js-confirm");
			if(confirm(contents)){
				vin65.utilities.v65EventRunner.call(this,event,contents);
			}else{
				return false;
			}
		});
	},
	v65Click: function(){
		//Logic
		$(document).on("click","[v65js-click]", function(event){
			var contents = $(this).attr("v65js-click");
			vin65.utilities.v65EventRunner.call(this,event,contents);
			return false;
		});
	},
	v65EventRunner: function(event,contents){
		//Logic
		try{
			//For each element we've going to try to grab the attrs and run the funciton.
			contents.split(';').filter(function(n){return n.trim()}).forEach(function(value, index, array){
				var fn = value.split("(").slice(0,1).toString(),
				fnParams = value.match(/\((.*?)\)/)[0].replace(/\'|\"|\(|\)/g,"").split(",");

				if(typeof eval(fn) == "function" && value.split(".")[0].trim() == "vin65"){
					eval(fn).apply(event.target,fnParams)
				}else{
					eval(value.toString());
				}
			});
		}
		//If something missed 
		catch(error){
			console.log("Vin65:eventRunner() error.")
			eval(contents.toString());
		}
	},
	v65KeyUp: function(){
		//Logic
		$(document).on("keyup","[v65js-keyup]", function(event){
			var contents = $(this).attr("v65js-keyup");
			vin65.utilities.v65EventRunner.call(this,event,contents);
			return false;
		});
	},
	v65Submit: function(){
		//Logic
		$(document).on("submit","[v65js-submit]", function(event){
			var contents = $(this).attr("v65js-submit");
			vin65.utilities.v65EventRunner.call(this,event,contents);
			return false;
		});
	},
	mainMenu : function(){
		//Logic
		$(".v65-layoutHeaderNav ul li ul li").hover(function(){
			$(this).parent().parent().children("a").toggleClass("hover");
		});
	},
	equalizeTableDays: function(){
		//Logic
		$(".v65-calendarDay").equalize(7);
	},
	equalizeProductGroupProducts: function(){
		//Logic
		$(".v65-product-group .v65-product").equalize(4);
	}
}

// Runner
vin65.utilities.init();
