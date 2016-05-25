$( function() {
	var imgDir   = './assets/images/',
			hero1    = 'hero01.jpg',
			hero2    = 'hero02.jpg',
			hero3    = 'hero03.jpg',
			hero4    = 'hero04.jpg',
			header1  = 'It’s Summertime.',
			header2  = 'Get Wet.',
			header3  = 'Fire & Water.',
			header4  = 'Outdoor Living.',			
			banner1a = 'Download the Checklist &nbsp;&rarr;', 
			banner1b = '10 Tips for a Perfect Pool', 
			banner2a = 'Download the Report &nbsp;&rarr;', 
			banner2b = '11 Tips for a Perfect Spa', 
			banner3a = 'Download the Blueprint &nbsp;&rarr;', 
			banner3b = '12 Tips for a Perfect Firepit', 
			banner4a = 'Download the How-To Guide &nbsp;&rarr;', 
			banner4b = '13 Tips for a Perfect Patio', 
			quote1   = 'reviewbg01.jpg',
			quote2   = 'reviewbg02.jpg',
			quote3   = 'reviewbg03.jpg',
			quote4   = 'reviewbg04.jpg',
			quote5   = 'reviewbg05.jpg';

	$('#hero-ul a').on('click', function(){
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	$('#hero01').on('click', function(e){
		e.preventDefault();

		$('.hero').attr('style',
			'background: url(' + imgDir + hero1 + 
			'); background-size: cover; background-position: center center; transition: all 0.4s ease;');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner1a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner1b + '</span>');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header1 + '</h1>');

	});

	$('#hero02').on('click', function(e){
		e.preventDefault();

		$('.hero').attr('style',
			'background: url(' + imgDir + hero2 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');	
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header2 + '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner2a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner2b + '</span>');
	});

	$('#hero03').on('click', function(e){
		e.preventDefault();

		$('.hero').attr('style',
			'background: url(' + imgDir + hero3 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header3 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner3a + '</span>');

		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner3b + '</span>');

	});

	$('#hero04').on('click', function(e){
		e.preventDefault();
		$('.hero').attr('style',
			'background: url(' + imgDir + hero4 + 
			'); background-size: cover; background-position: center top; transition: all 0.4s ease;');
		$('#hero-header').replaceWith('<h1 id="hero-header">' + header4 + '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + banner4a + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + banner4b + '</span>');
	});




	$('#quote01').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg01.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
		$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
		"Bob &amp; Diane are wonderful to work with. I highly recommend them. A 5 star treatment!"
	});

	$('#quote02').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg02.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Another Good Review"</p>');
		$('.quote h6').replaceWith('<h6>The Beach Boys</h6>');
	});

	$('#quote03').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg03.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"A+"</p>');
		$('.quote h6').replaceWith('<h6>The Carpenters</h6>');
	});

	$('#quote04').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg04.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"And more reviews!"</p>');
		$('.quote h6').replaceWith('<h6>Jen Sale</h6>');
	});

	$('#quote05').on('click', function(){
		$('.review').attr('style',
			'background: url(assets/images/reviewbg05.jpg); background-size: cover; background-position: center center; transition: all 0.4s ease;');
		$('.quote p').replaceWith('<p>"Last featured testimonial."</p>');
		$('.quote h6').replaceWith('<h6>Declan Taintor</h6>');
	});

	$('.quo-li').on('click', function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	});

	
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 600); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });

	$(window).scroll(function() {
	  var sticky = $('.sticky'),
	    scroll = $(window).scrollTop();

	  if (scroll >= 440) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
	});
  
  $('.mobile-menu').click(function(){
    if ($('#nav-mobile').hasClass('collapsed')) {
      $('#nav-mobile').removeClass('collapsed');
    } else {
      $('#nav-mobile').addClass('collapsed');
    }
  });


  $('.fancybox').fancybox();


  var icons = new Skycons({
  	'color':'#0074E4',
  	'resizeClear': true
  }),
    list  = [
      "clear-day", "clear-night", "partly-cloudy-day",
      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
      "fog"
    ],
    i;

	for(i = list.length; i--; )
	  icons.set(list[i], list[i]);

	icons.play();

	// console.log(list);


// http = require('http');

var apiKey = 'bd7804a56f5a4248bfa222108162405';

var options = {
  host: 'api.apixu.com',
  port: 80,
  path: '/v1/current.json?key=' + apiKey + '&q=',
  method: 'GET'
};



function currentWeather(query, callback){
	options.path = '/v1/current.json?key=' + apiKey + '&q=' + query;
	http.request(options, function(res) {
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
		console.log(chunk);
	  });
	  res.on('end', function (chunk) {
	  });
	}).on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);
        callback(err);
    }).end();
}




	// var weather = require('./weatherlib');

	errorHandler = function (){
		console.log('got some error')
	}
	
	//current weather takes pin code or location as first parameter, error handler callback as second
	// weather.currentWeather(75089, errorHandler);









	// { current.temp_f }

	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", "http://api.apixu.com/v1/current.json?key=bd7804a56f5a4248bfa222108162405&q=75089", true);
	// // Add your code below!
	// xhr.send();
	// console.log(xhr.status);
	// console.log(xhr.statusText);


} );

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW1nRGlyICAgPSAnLi9hc3NldHMvaW1hZ2VzLycsXG5cdFx0XHRoZXJvMSAgICA9ICdoZXJvMDEuanBnJyxcblx0XHRcdGhlcm8yICAgID0gJ2hlcm8wMi5qcGcnLFxuXHRcdFx0aGVybzMgICAgPSAnaGVybzAzLmpwZycsXG5cdFx0XHRoZXJvNCAgICA9ICdoZXJvMDQuanBnJyxcblx0XHRcdGhlYWRlcjEgID0gJ0l04oCZcyBTdW1tZXJ0aW1lLicsXG5cdFx0XHRoZWFkZXIyICA9ICdHZXQgV2V0LicsXG5cdFx0XHRoZWFkZXIzICA9ICdGaXJlICYgV2F0ZXIuJyxcblx0XHRcdGhlYWRlcjQgID0gJ091dGRvb3IgTGl2aW5nLicsXHRcdFx0XG5cdFx0XHRiYW5uZXIxYSA9ICdEb3dubG9hZCB0aGUgQ2hlY2tsaXN0ICZuYnNwOyZyYXJyOycsIFxuXHRcdFx0YmFubmVyMWIgPSAnMTAgVGlwcyBmb3IgYSBQZXJmZWN0IFBvb2wnLCBcblx0XHRcdGJhbm5lcjJhID0gJ0Rvd25sb2FkIHRoZSBSZXBvcnQgJm5ic3A7JnJhcnI7JywgXG5cdFx0XHRiYW5uZXIyYiA9ICcxMSBUaXBzIGZvciBhIFBlcmZlY3QgU3BhJywgXG5cdFx0XHRiYW5uZXIzYSA9ICdEb3dubG9hZCB0aGUgQmx1ZXByaW50ICZuYnNwOyZyYXJyOycsIFxuXHRcdFx0YmFubmVyM2IgPSAnMTIgVGlwcyBmb3IgYSBQZXJmZWN0IEZpcmVwaXQnLCBcblx0XHRcdGJhbm5lcjRhID0gJ0Rvd25sb2FkIHRoZSBIb3ctVG8gR3VpZGUgJm5ic3A7JnJhcnI7JywgXG5cdFx0XHRiYW5uZXI0YiA9ICcxMyBUaXBzIGZvciBhIFBlcmZlY3QgUGF0aW8nLCBcblx0XHRcdHF1b3RlMSAgID0gJ3Jldmlld2JnMDEuanBnJyxcblx0XHRcdHF1b3RlMiAgID0gJ3Jldmlld2JnMDIuanBnJyxcblx0XHRcdHF1b3RlMyAgID0gJ3Jldmlld2JnMDMuanBnJyxcblx0XHRcdHF1b3RlNCAgID0gJ3Jldmlld2JnMDQuanBnJyxcblx0XHRcdHF1b3RlNSAgID0gJ3Jldmlld2JnMDUuanBnJztcblxuXHQkKCcjaGVyby11bCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0JCgnI2hlcm8wMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQoJy5oZXJvJykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybCgnICsgaW1nRGlyICsgaGVybzEgKyBcblx0XHRcdCcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOycpO1xuXG5cdFx0JCgnI2Jhbm5lci1hJykucmVwbGFjZVdpdGgoJzxzcGFuIGlkPVwiYmFubmVyLWFcIiBjbGFzcz1cImJvbGQgaGlkZGVuLW9uLW1vYmlsZVwiPicgKyBiYW5uZXIxYSArICc8L3NwYW4+Jyk7XG5cdFx0JCgnI2Jhbm5lci1iJykucmVwbGFjZVdpdGgoJzxzcGFuIGlkPVwiYmFubmVyLWJcIiBjbGFzcz1cImJvbGRcIj4nICsgYmFubmVyMWIgKyAnPC9zcGFuPicpO1xuXHRcdCQoJyNoZXJvLWhlYWRlcicpLnJlcGxhY2VXaXRoKCc8aDEgaWQ9XCJoZXJvLWhlYWRlclwiPicgKyBoZWFkZXIxICsgJzwvaDE+Jyk7XG5cblx0fSk7XG5cblx0JCgnI2hlcm8wMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQoJy5oZXJvJykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybCgnICsgaW1nRGlyICsgaGVybzIgKyBcblx0XHRcdCcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wOyB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOycpO1x0XG5cdFx0JCgnI2hlcm8taGVhZGVyJykucmVwbGFjZVdpdGgoJzxoMSBpZD1cImhlcm8taGVhZGVyXCI+JyArIGhlYWRlcjIgKyAnPC9oMT4nKTtcblx0XHQkKCcjYmFubmVyLWEnKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYVwiIGNsYXNzPVwiYm9sZCBoaWRkZW4tb24tbW9iaWxlXCI+JyArIGJhbm5lcjJhICsgJzwvc3Bhbj4nKTtcblx0XHQkKCcjYmFubmVyLWInKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYlwiIGNsYXNzPVwiYm9sZFwiPicgKyBiYW5uZXIyYiArICc8L3NwYW4+Jyk7XG5cdH0pO1xuXG5cdCQoJyNoZXJvMDMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkKCcuaGVybycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoJyArIGltZ0RpciArIGhlcm8zICsgXG5cdFx0XHQnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcjaGVyby1oZWFkZXInKS5yZXBsYWNlV2l0aCgnPGgxIGlkPVwiaGVyby1oZWFkZXJcIj4nICsgaGVhZGVyMyArICc8L2gxPicpO1xuXG5cdFx0JCgnI2Jhbm5lci1hJykucmVwbGFjZVdpdGgoJzxzcGFuIGlkPVwiYmFubmVyLWFcIiBjbGFzcz1cImJvbGQgaGlkZGVuLW9uLW1vYmlsZVwiPicgKyBiYW5uZXIzYSArICc8L3NwYW4+Jyk7XG5cblx0XHQkKCcjYmFubmVyLWInKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYlwiIGNsYXNzPVwiYm9sZFwiPicgKyBiYW5uZXIzYiArICc8L3NwYW4+Jyk7XG5cblx0fSk7XG5cblx0JCgnI2hlcm8wNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHQkKCcuaGVybycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoJyArIGltZ0RpciArIGhlcm80ICsgXG5cdFx0XHQnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcjaGVyby1oZWFkZXInKS5yZXBsYWNlV2l0aCgnPGgxIGlkPVwiaGVyby1oZWFkZXJcIj4nICsgaGVhZGVyNCArICc8L2gxPicpO1xuXG5cdFx0JCgnI2Jhbm5lci1hJykucmVwbGFjZVdpdGgoJzxzcGFuIGlkPVwiYmFubmVyLWFcIiBjbGFzcz1cImJvbGQgaGlkZGVuLW9uLW1vYmlsZVwiPicgKyBiYW5uZXI0YSArICc8L3NwYW4+Jyk7XG5cdFx0JCgnI2Jhbm5lci1iJykucmVwbGFjZVdpdGgoJzxzcGFuIGlkPVwiYmFubmVyLWJcIiBjbGFzcz1cImJvbGRcIj4nICsgYmFubmVyNGIgKyAnPC9zcGFuPicpO1xuXHR9KTtcblxuXG5cblxuXHQkKCcjcXVvdGUwMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnJldmlldycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yZXZpZXdiZzAxLmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cdFx0JCgnLnF1b3RlIHAnKS5yZXBsYWNlV2l0aCgnPHA+XCJTdW4gUmF5IFBvb2xzIHRvb2sgZ3JlYXQgY2FyZSBvZiB1cy5cIjwvcD4nKTtcblx0XHQkKCcucXVvdGUgaDYnKS5yZXBsYWNlV2l0aCgnPGg2PlJvYmVydCBTbWl0aCwgUm93bGV0dDwvaDY+Jyk7XG5cdFx0XCJCb2IgJmFtcDsgRGlhbmUgYXJlIHdvbmRlcmZ1bCB0byB3b3JrIHdpdGguIEkgaGlnaGx5IHJlY29tbWVuZCB0aGVtLiBBIDUgc3RhciB0cmVhdG1lbnQhXCJcblx0fSk7XG5cblx0JCgnI3F1b3RlMDInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJy5yZXZpZXcnKS5hdHRyKCdzdHlsZScsXG5cdFx0XHQnYmFja2dyb3VuZDogdXJsKGFzc2V0cy9pbWFnZXMvcmV2aWV3YmcwMi5qcGcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOycpO1xuXHRcdCQoJy5xdW90ZSBwJykucmVwbGFjZVdpdGgoJzxwPlwiQW5vdGhlciBHb29kIFJldmlld1wiPC9wPicpO1xuXHRcdCQoJy5xdW90ZSBoNicpLnJlcGxhY2VXaXRoKCc8aDY+VGhlIEJlYWNoIEJveXM8L2g2PicpO1xuXHR9KTtcblxuXHQkKCcjcXVvdGUwMycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnJldmlldycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yZXZpZXdiZzAzLmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cdFx0JCgnLnF1b3RlIHAnKS5yZXBsYWNlV2l0aCgnPHA+XCJBK1wiPC9wPicpO1xuXHRcdCQoJy5xdW90ZSBoNicpLnJlcGxhY2VXaXRoKCc8aDY+VGhlIENhcnBlbnRlcnM8L2g2PicpO1xuXHR9KTtcblxuXHQkKCcjcXVvdGUwNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnJldmlldycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yZXZpZXdiZzA0LmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cdFx0JCgnLnF1b3RlIHAnKS5yZXBsYWNlV2l0aCgnPHA+XCJBbmQgbW9yZSByZXZpZXdzIVwiPC9wPicpO1xuXHRcdCQoJy5xdW90ZSBoNicpLnJlcGxhY2VXaXRoKCc8aDY+SmVuIFNhbGU8L2g2PicpO1xuXHR9KTtcblxuXHQkKCcjcXVvdGUwNScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnJldmlldycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yZXZpZXdiZzA1LmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cdFx0JCgnLnF1b3RlIHAnKS5yZXBsYWNlV2l0aCgnPHA+XCJMYXN0IGZlYXR1cmVkIHRlc3RpbW9uaWFsLlwiPC9wPicpO1xuXHRcdCQoJy5xdW90ZSBoNicpLnJlcGxhY2VXaXRoKCc8aDY+RGVjbGFuIFRhaW50b3I8L2g2PicpO1xuXHR9KTtcblxuXHQkKCcucXVvLWxpJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCdsaS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdH0pO1xuXG5cdFxuICAkKCcuc21vb3RoU2Nyb2xsJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgXG4gICAgICAgIH0sIDYwMCk7IC8vIFRoZSBudW1iZXIgaGVyZSByZXByZXNlbnRzIHRoZSBzcGVlZCBvZiB0aGUgc2Nyb2xsIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuXHQgIHZhciBzdGlja3kgPSAkKCcuc3RpY2t5JyksXG5cdCAgICBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cblx0ICBpZiAoc2Nyb2xsID49IDQ0MCkgc3RpY2t5LmFkZENsYXNzKCdmaXhlZCcpO1xuXHQgIGVsc2Ugc3RpY2t5LnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuXHR9KTtcbiAgXG4gICQoJy5tb2JpbGUtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgaWYgKCQoJyNuYXYtbW9iaWxlJykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAkKCcjbmF2LW1vYmlsZScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnI25hdi1tb2JpbGUnKS5hZGRDbGFzcygnY29sbGFwc2VkJyk7XG4gICAgfVxuICB9KTtcblxuXG4gICQoJy5mYW5jeWJveCcpLmZhbmN5Ym94KCk7XG5cblxuICB2YXIgaWNvbnMgPSBuZXcgU2t5Y29ucyh7XG4gIFx0J2NvbG9yJzonIzAwNzRFNCcsXG4gIFx0J3Jlc2l6ZUNsZWFyJzogdHJ1ZVxuICB9KSxcbiAgICBsaXN0ICA9IFtcbiAgICAgIFwiY2xlYXItZGF5XCIsIFwiY2xlYXItbmlnaHRcIiwgXCJwYXJ0bHktY2xvdWR5LWRheVwiLFxuICAgICAgXCJwYXJ0bHktY2xvdWR5LW5pZ2h0XCIsIFwiY2xvdWR5XCIsIFwicmFpblwiLCBcInNsZWV0XCIsIFwic25vd1wiLCBcIndpbmRcIixcbiAgICAgIFwiZm9nXCJcbiAgICBdLFxuICAgIGk7XG5cblx0Zm9yKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOyApXG5cdCAgaWNvbnMuc2V0KGxpc3RbaV0sIGxpc3RbaV0pO1xuXG5cdGljb25zLnBsYXkoKTtcblxuXHQvLyBjb25zb2xlLmxvZyhsaXN0KTtcblxuXG4vLyBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuXG52YXIgYXBpS2V5ID0gJ2JkNzgwNGE1NmY1YTQyNDhiZmEyMjIxMDgxNjI0MDUnO1xuXG52YXIgb3B0aW9ucyA9IHtcbiAgaG9zdDogJ2FwaS5hcGl4dS5jb20nLFxuICBwb3J0OiA4MCxcbiAgcGF0aDogJy92MS9jdXJyZW50Lmpzb24/a2V5PScgKyBhcGlLZXkgKyAnJnE9JyxcbiAgbWV0aG9kOiAnR0VUJ1xufTtcblxuXG5cbmZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyKHF1ZXJ5LCBjYWxsYmFjayl7XG5cdG9wdGlvbnMucGF0aCA9ICcvdjEvY3VycmVudC5qc29uP2tleT0nICsgYXBpS2V5ICsgJyZxPScgKyBxdWVyeTtcblx0aHR0cC5yZXF1ZXN0KG9wdGlvbnMsIGZ1bmN0aW9uKHJlcykge1xuXHQgIHJlcy5zZXRFbmNvZGluZygndXRmOCcpO1xuXHQgIHJlcy5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdGNvbnNvbGUubG9nKGNodW5rKTtcblx0ICB9KTtcblx0ICByZXMub24oJ2VuZCcsIGZ1bmN0aW9uIChjaHVuaykge1xuXHQgIH0pO1xuXHR9KS5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gaGFuZGxlIGVycm9ycyB3aXRoIHRoZSByZXF1ZXN0IGl0c2VsZlxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aXRoIHRoZSByZXF1ZXN0OicsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICB9KS5lbmQoKTtcbn1cblxuXG5cblxuXHQvLyB2YXIgd2VhdGhlciA9IHJlcXVpcmUoJy4vd2VhdGhlcmxpYicpO1xuXG5cdGVycm9ySGFuZGxlciA9IGZ1bmN0aW9uICgpe1xuXHRcdGNvbnNvbGUubG9nKCdnb3Qgc29tZSBlcnJvcicpXG5cdH1cblx0XG5cdC8vY3VycmVudCB3ZWF0aGVyIHRha2VzIHBpbiBjb2RlIG9yIGxvY2F0aW9uIGFzIGZpcnN0IHBhcmFtZXRlciwgZXJyb3IgaGFuZGxlciBjYWxsYmFjayBhcyBzZWNvbmRcblx0Ly8gd2VhdGhlci5jdXJyZW50V2VhdGhlcig3NTA4OSwgZXJyb3JIYW5kbGVyKTtcblxuXG5cblxuXG5cblxuXG5cblx0Ly8geyBjdXJyZW50LnRlbXBfZiB9XG5cblx0Ly8gdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHQvLyB4aHIub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9hcGkuYXBpeHUuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9YmQ3ODA0YTU2ZjVhNDI0OGJmYTIyMjEwODE2MjQwNSZxPTc1MDg5XCIsIHRydWUpO1xuXHQvLyAvLyBBZGQgeW91ciBjb2RlIGJlbG93IVxuXHQvLyB4aHIuc2VuZCgpO1xuXHQvLyBjb25zb2xlLmxvZyh4aHIuc3RhdHVzKTtcblx0Ly8gY29uc29sZS5sb2coeGhyLnN0YXR1c1RleHQpO1xuXG5cbn0gKTtcbiJdLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
