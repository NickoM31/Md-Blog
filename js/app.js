(function(){
	"use strict";
	var app = {

		init:function(){
			$.get('http://192.168.1.40:1337/alice.md', function(response){


				var converter = new showdown.Converter();
				var convertHtml = converter.makeHtml(response);
				$('#md').html(convertHtml);
				app.recupJson();
			});

		},

		recupJson : function(){
			$.get('http://192.168.1.40:1337/menu.json', function(responseDeux){
				var title= responseDeux.menu[1].title;
				$('#titre').html(title);
				console.log(title);
				
				//for (var i = 0; i<length.;i++){

				//};
					

				});
			},
		
	};


	$(document).ready(function(){
		app.init();
	});
})();





