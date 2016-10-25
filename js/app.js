(function(){
	"use strict";
	var app = {
		init:function(){
			$.get('http://192.168.1.21:1337/example.md', function(response){

				$('#app').html(response);
			});

			
			
		},
	};


	$(document).ready(function(){
		app.init();
	});
})();

function convert(){
var converter = new showdown.Converter(),
    text      = '#hello, markdown!',
    html      = converter.makeHtml(text);
};

convert();

