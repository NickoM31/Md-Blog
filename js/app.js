(function(){
	"use strict";
	var app = {

		init:function(){
			app.json();
		},
		json : function(){
			$.ajax({
				url : 'http://localhost:2000/menu.json',
				method : 'GET',
				success : function(data){
					var tab = data.menu;
					for(var i = 0; i < tab.length; i++){
						var titres = tab[i].title;
						var pathpath = "http://localhost:2000" + tab[i].path;
						 
						$("#app").append('<li>'+'<a class="markD"data-info="'+pathpath+'" href="#">'+titres+'</a>'+'</li>');
					}
					app.convertir();
				}
			})
		},

		convertir : function(){
			$(".markD").click(function(){
				var url = $(this).data('info')
				app.getArticle(url);
			});
			
		},
		getArticle : function(path){
			$.ajax({
				url : path,
				method : 'GET',
				success : function(response){
					var converter = new showdown.Converter();
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





































