(function(){
	"use strict";
	var app = {

		init:function(){
			app.alice();
			app.json();
			app.convertir();
			
		},

		alice: function(){
			$.ajax({
				url : 'http://localhost:2000/alice.md',
				method : 'GET',
				datatype : 'html',
				success : function(response){
					
				}
				
			})
		},

		json : function(){
			$.ajax({
				url : 'http://localhost:2000/menu.json',
				method : 'GET',
				datatype : 'html',
				success : function(data){
					var tab = data.menu;
					for(var i = 0; i < tab.length; i++){
						var titres = tab[i].title;
						var pathpath = "http://localhost:2000" + tab[i].path;
						$("#app").append('<li>'+'<a class="marko"data-info="'+pathpath+'" href="#">'+titres+'</a>'+'</li>');
						app.convertir();
					}
				}
			})
		},

		convertir : function(){
			$(".marko").click(function(){
				app.data($(this).data('info'));
			});
			
		},
		data : function(path){
			$.ajax({
				url : path,
				method : 'GET',
				success : function(response){
					var converter = new showdown.Converter(app.response);
					var convertHtml = converter.makeHtml(response);
					$("#md").html(convertHtml);
				}
			})
		},

	};


	$(document).ready(function(){
		app.init();
	});
})();





































