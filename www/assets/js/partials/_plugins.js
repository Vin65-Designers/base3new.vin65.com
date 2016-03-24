//plugin
;(function($,undefined){
	$.fn.equalize = function(length){
		for(var i = 0; i < this.length; i+=length) {
			var elems = this.slice(i, i+length),
			equalizeArray = [];
			var j;
			for(j = 0; j < length; j++){
				equalizeArray.push(elems.eq(j).height());
			}
			var height = Math.max.apply( Math, equalizeArray);
			elems.css('height', height);
		}
		return this;
	};
})(jQuery);