vin65.businessLocator = {
	init: function(){
		
	},
    businessLocationCategoryChange: function() {
		if($('[name="countryCode"]').length) {
			vin65.businessLocator.countryCodeSelector();
		} else {
			vin65.businessLocator.stateCodeSelector();
		}
    },
    citySelector: function() {
        var d = new Date(),
			formLabelsAndValues=$('.v65-citySearchForm').serialize();
        $.getJSON("/index.cfm?method=businessLocator.selectCitiesJSON&timeStamp=" + d.getTime() + '&' + formLabelsAndValues,{}, function(j){
            var options = '';
            for (var i = 0; i < j.length; i++) {
                options += '<option value="' + j[i].optionValue + '" ' + j[i].optionSelected + ' >' + j[i].optionDisplay + '</option>';
            }
            $('[name="city"]').html(options);
        });
    },
	countryCodeSelector: function() {
        var d = new Date();
        var formLabelsAndValues=$('.v65-citySearchForm').serialize();
        $.getJSON("/index.cfm?method=businessLocator.selectCountriesJSON&timeStamp=" + d.getTime() + '&' + formLabelsAndValues,{}, function(j){
            var options = '';
            for (var i = 0; i < j.length; i++) {
                options += '<option value="' + j[i].optionValue + '" ' + j[i].optionSelected + ' >' + j[i].optionDisplay + '</option>';
            }
            $('[name="countryCode"]').html(options);
            
            vin65.businessLocator.stateCodeSelector();
        });
    },
    stateCodeSelector: function() {
        var d = new Date();
        var formLabelsAndValues=$('.v65-citySearchForm').serialize();
        $.getJSON("/index.cfm?method=businessLocator.selectStatesJSON&timeStamp=" + d.getTime() + '&' + formLabelsAndValues,{}, function(j){
            var options = '';
            for (var i = 0; i < j.length; i++) {
                options += '<option value="' + j[i].optionValue + '" ' + j[i].optionSelected + ' >' + j[i].optionDisplay + '</option>';
            }
            $('[name="stateCode"]').html(options);
            
            vin65.businessLocator.citySelector();
        });
    },
    searchSubmit: function(selector) {
        var d = new Date(),
            submitURL = '/index.cfm?method=businessLocator.renderBusinessList&timeStamp=' + d.getTime(),
            formLabelsAndValues = $('.' + selector).serialize();
        vin65.loading.add($('.v65-businessLocatorList'));
		vin65.loading.add($('.v65-businessLocatorMap'));
        $.post(submitURL,formLabelsAndValues, function(response) {
            vin65.businessLocator.renderBusinessListHTML(response);
        });
		$.post(submitURL + '&format=JSON',formLabelsAndValues, function(response) {
			var responseJSON=JSON.parse(response);
			if(responseJSON[0].level==undefined){
				vin65.businessLocator.initializeGoogleMap(responseJSON[0].lat,responseJSON[0].long,responseJSON)
			} else {
				vin65.businessLocator.initializeGoogleMap(responseJSON[0].lat,responseJSON[0].long,responseJSON,responseJSON[0].level)
			}
        });
    },
    renderBusinessListHTML: function(response) {
        vin65.loading.remove($('.v65-businessLocatorList'))
        $('.v65-businessLocatorList').html(response);
    },
    initializeGoogleMap: function(lat,long,mapPoints,level) {
        var myLatLng = new google.maps.LatLng(lat,long);
        if(level==undefined){
            if(lat==0){			
                var myOptions = {
                    center: myLatLng,
                    zoom: 1,
                    panControl: true,
                    zoomControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            }else{			
                var myOptions = {
                    center: myLatLng,
                    zoom: 12,
                    panControl: true,
                    zoomControl: true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            }
        }else{
            var myOptions = {
                center: myLatLng,
                zoom: level,
                panControl: true,
                zoomControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }
        var map = new google.maps.Map(document.getElementById('v65-map_canvas'), myOptions);
        for (var i = 0; i < mapPoints.length; i++) {
            point = new google.maps.LatLng(mapPoints[i].lat,mapPoints[i].long);
            html=mapPoints[i].html;
            vin65.businessLocator.createMarker(map, point, html, i+1);
        }
		vin65.loading.remove($('.v65-businessLocatorMap'))
    },
    createMarker: function(map, point, htmlString, count) {
        if(html != ''){
            var marker = new google.maps.Marker({
                position: point,
                map: map,
                label : count.toString()
            });
            var infoWindow = new google.maps.InfoWindow;
            google.maps.event.addListener(marker, 'click', function(){
                var marker = this;
                var latLng = marker.getPosition();
                infoWindow.setContent(htmlString);
                infoWindow.open(map, marker);
            });
        }
        return marker;
    }
}

// Runner
vin65.businessLocator.init();