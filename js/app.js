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
				var link1 = "http://192.168.1.40:1337" + responseDeux.menu[1].path;
				var link2 = "http://192.168.1.40:1337" + responseDeux.menu[0].path;
				var title1= responseDeux.menu[1].title;
				var title2 = responseDeux.menu[0].title;
				$('#titre').html("<a href = "+ link1 + ">" + title1 + "</a>");
				$('#app').html("<a href = "+ link2 + ">" + title2 + "</a>");
				console.log(link1);
			});

		},

	};


	$(document).ready(function(){
		app.init();
	});
})();






