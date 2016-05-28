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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW1nRGlyICAgPSAnLi9hc3NldHMvaW1hZ2VzLycsXG5cdFx0XHRoZXJvMSAgICA9ICdoZXJvMDEuanBnJyxcblx0XHRcdGhlcm8yICAgID0gJ2hlcm8wMi5qcGcnLFxuXHRcdFx0aGVybzMgICAgPSAnaGVybzAzLmpwZycsXG5cdFx0XHRoZXJvNCAgICA9ICdoZXJvMDQuanBnJyxcblx0XHRcdGhlYWRlcjEgID0gJ0l04oCZcyBTdW1tZXJ0aW1lLicsXG5cdFx0XHRoZWFkZXIyICA9ICdHZXQgV2V0LicsXG5cdFx0XHRoZWFkZXIzICA9ICdGaXJlICYgV2F0ZXIuJyxcblx0XHRcdGhlYWRlcjQgID0gJ091dGRvb3IgTGl2aW5nLicsXHRcdFx0XG5cdFx0XHRiYW5uZXIxYSA9ICdEb3dubG9hZCB0aGUgQ2hlY2tsaXN0ICZuYnNwOyZyYXJyOycsIFxuXHRcdFx0YmFubmVyMWIgPSAnMTAgVGlwcyBmb3IgYSBQZXJmZWN0IFBvb2wnLCBcblx0XHRcdGJhbm5lcjJhID0gJ0Rvd25sb2FkIHRoZSBSZXBvcnQgJm5ic3A7JnJhcnI7JywgXG5cdFx0XHRiYW5uZXIyYiA9ICcxMSBUaXBzIGZvciBhIFBlcmZlY3QgU3BhJywgXG5cdFx0XHRiYW5uZXIzYSA9ICdEb3dubG9hZCB0aGUgQmx1ZXByaW50ICZuYnNwOyZyYXJyOycsIFxuXHRcdFx0YmFubmVyM2IgPSAnMTIgVGlwcyBmb3IgYSBQZXJmZWN0IEZpcmVwaXQnLCBcblx0XHRcdGJhbm5lcjRhID0gJ0Rvd25sb2FkIHRoZSBIb3ctVG8gR3VpZGUgJm5ic3A7JnJhcnI7JywgXG5cdFx0XHRiYW5uZXI0YiA9ICcxMyBUaXBzIGZvciBhIFBlcmZlY3QgUGF0aW8nLCBcblx0XHRcdHF1b3RlMSAgID0gJ3Jldmlld2JnMDEuanBnJyxcblx0XHRcdHF1b3RlMiAgID0gJ3Jldmlld2JnMDIuanBnJyxcblx0XHRcdHF1b3RlMyAgID0gJ3Jldmlld2JnMDMuanBnJyxcblx0XHRcdHF1b3RlNCAgID0gJ3Jldmlld2JnMDQuanBnJyxcblx0XHRcdHF1b3RlNSAgID0gJ3Jldmlld2JnMDUuanBnJztcblxuXG5cdCQoJyNoZXJvLXVsIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9KTtcblxuXHQkKCcjaGVybzAxJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0JCgnLmhlcm8nKS5hdHRyKCdzdHlsZScsXG5cdFx0XHQnYmFja2dyb3VuZDogdXJsKCcgKyBpbWdEaXIgKyBoZXJvMSArIFxuXHRcdFx0Jyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cblx0XHQkKCcjYmFubmVyLWEnKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYVwiIGNsYXNzPVwiYm9sZCBoaWRkZW4tb24tbW9iaWxlXCI+JyArIGJhbm5lcjFhICsgJzwvc3Bhbj4nKTtcblx0XHQkKCcjYmFubmVyLWInKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYlwiIGNsYXNzPVwiYm9sZFwiPicgKyBiYW5uZXIxYiArICc8L3NwYW4+Jyk7XG5cdFx0JCgnI2hlcm8taGVhZGVyJykucmVwbGFjZVdpdGgoJzxoMSBpZD1cImhlcm8taGVhZGVyXCI+JyArIGhlYWRlcjEgKyAnPC9oMT4nKTtcblxuXHR9KTtcblxuXHQkKCcjaGVybzAyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0JCgnLmhlcm8nKS5hdHRyKCdzdHlsZScsXG5cdFx0XHQnYmFja2dyb3VuZDogdXJsKCcgKyBpbWdEaXIgKyBoZXJvMiArIFxuXHRcdFx0Jyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XHRcblx0XHQkKCcjaGVyby1oZWFkZXInKS5yZXBsYWNlV2l0aCgnPGgxIGlkPVwiaGVyby1oZWFkZXJcIj4nICsgaGVhZGVyMiArICc8L2gxPicpO1xuXHRcdCQoJyNiYW5uZXItYScpLnJlcGxhY2VXaXRoKCc8c3BhbiBpZD1cImJhbm5lci1hXCIgY2xhc3M9XCJib2xkIGhpZGRlbi1vbi1tb2JpbGVcIj4nICsgYmFubmVyMmEgKyAnPC9zcGFuPicpO1xuXHRcdCQoJyNiYW5uZXItYicpLnJlcGxhY2VXaXRoKCc8c3BhbiBpZD1cImJhbm5lci1iXCIgY2xhc3M9XCJib2xkXCI+JyArIGJhbm5lcjJiICsgJzwvc3Bhbj4nKTtcblx0fSk7XG5cblx0JCgnI2hlcm8wMycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdCQoJy5oZXJvJykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybCgnICsgaW1nRGlyICsgaGVybzMgKyBcblx0XHRcdCcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wOyB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOycpO1xuXHRcdCQoJyNoZXJvLWhlYWRlcicpLnJlcGxhY2VXaXRoKCc8aDEgaWQ9XCJoZXJvLWhlYWRlclwiPicgKyBoZWFkZXIzICsgJzwvaDE+Jyk7XG5cblx0XHQkKCcjYmFubmVyLWEnKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYVwiIGNsYXNzPVwiYm9sZCBoaWRkZW4tb24tbW9iaWxlXCI+JyArIGJhbm5lcjNhICsgJzwvc3Bhbj4nKTtcblxuXHRcdCQoJyNiYW5uZXItYicpLnJlcGxhY2VXaXRoKCc8c3BhbiBpZD1cImJhbm5lci1iXCIgY2xhc3M9XCJib2xkXCI+JyArIGJhbm5lcjNiICsgJzwvc3Bhbj4nKTtcblxuXHR9KTtcblxuXHQkKCcjaGVybzA0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCQoJy5oZXJvJykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybCgnICsgaW1nRGlyICsgaGVybzQgKyBcblx0XHRcdCcpOyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wOyB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlOycpO1xuXHRcdCQoJyNoZXJvLWhlYWRlcicpLnJlcGxhY2VXaXRoKCc8aDEgaWQ9XCJoZXJvLWhlYWRlclwiPicgKyBoZWFkZXI0ICsgJzwvaDE+Jyk7XG5cblx0XHQkKCcjYmFubmVyLWEnKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYVwiIGNsYXNzPVwiYm9sZCBoaWRkZW4tb24tbW9iaWxlXCI+JyArIGJhbm5lcjRhICsgJzwvc3Bhbj4nKTtcblx0XHQkKCcjYmFubmVyLWInKS5yZXBsYWNlV2l0aCgnPHNwYW4gaWQ9XCJiYW5uZXItYlwiIGNsYXNzPVwiYm9sZFwiPicgKyBiYW5uZXI0YiArICc8L3NwYW4+Jyk7XG5cdH0pO1xuXG5cblxuXG5cdCQoJyNxdW90ZTAxJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCcucmV2aWV3JykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3Jldmlld2JnMDEuanBnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcucXVvdGUgcCcpLnJlcGxhY2VXaXRoKCc8cD5cIlN1biBSYXkgUG9vbHMgdG9vayBncmVhdCBjYXJlIG9mIHVzLlwiPC9wPicpO1xuXHRcdCQoJy5xdW90ZSBoNicpLnJlcGxhY2VXaXRoKCc8aDY+Um9iZXJ0IFNtaXRoLCBSb3dsZXR0PC9oNj4nKTtcblx0XHRcIkJvYiAmYW1wOyBEaWFuZSBhcmUgd29uZGVyZnVsIHRvIHdvcmsgd2l0aC4gSSBoaWdobHkgcmVjb21tZW5kIHRoZW0uIEEgNSBzdGFyIHRyZWF0bWVudCFcIlxuXHR9KTtcblxuXHQkKCcjcXVvdGUwMicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnJldmlldycpLmF0dHIoJ3N0eWxlJyxcblx0XHRcdCdiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yZXZpZXdiZzAyLmpwZyk7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7Jyk7XG5cdFx0JCgnLnF1b3RlIHAnKS5yZXBsYWNlV2l0aCgnPHA+XCJBbm90aGVyIEdvb2QgUmV2aWV3XCI8L3A+Jyk7XG5cdFx0JCgnLnF1b3RlIGg2JykucmVwbGFjZVdpdGgoJzxoNj5UaGUgQmVhY2ggQm95czwvaDY+Jyk7XG5cdH0pO1xuXG5cdCQoJyNxdW90ZTAzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCcucmV2aWV3JykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3Jldmlld2JnMDMuanBnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcucXVvdGUgcCcpLnJlcGxhY2VXaXRoKCc8cD5cIkErXCI8L3A+Jyk7XG5cdFx0JCgnLnF1b3RlIGg2JykucmVwbGFjZVdpdGgoJzxoNj5UaGUgQ2FycGVudGVyczwvaDY+Jyk7XG5cdH0pO1xuXG5cdCQoJyNxdW90ZTA0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCcucmV2aWV3JykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3Jldmlld2JnMDQuanBnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcucXVvdGUgcCcpLnJlcGxhY2VXaXRoKCc8cD5cIkFuZCBtb3JlIHJldmlld3MhXCI8L3A+Jyk7XG5cdFx0JCgnLnF1b3RlIGg2JykucmVwbGFjZVdpdGgoJzxoNj5KZW4gU2FsZTwvaDY+Jyk7XG5cdH0pO1xuXG5cdCQoJyNxdW90ZTA1Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblx0XHQkKCcucmV2aWV3JykuYXR0cignc3R5bGUnLFxuXHRcdFx0J2JhY2tncm91bmQ6IHVybChhc3NldHMvaW1hZ2VzL3Jldmlld2JnMDUuanBnKTsgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTsnKTtcblx0XHQkKCcucXVvdGUgcCcpLnJlcGxhY2VXaXRoKCc8cD5cIkxhc3QgZmVhdHVyZWQgdGVzdGltb25pYWwuXCI8L3A+Jyk7XG5cdFx0JCgnLnF1b3RlIGg2JykucmVwbGFjZVdpdGgoJzxoNj5EZWNsYW4gVGFpbnRvcjwvaDY+Jyk7XG5cdH0pO1xuXG5cdCQoJy5xdW8tbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdCQoJ2xpLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0XG4gICQoJy5zbW9vdGhTY3JvbGwnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCBcbiAgICAgICAgfSwgNjAwKTsgLy8gVGhlIG51bWJlciBoZXJlIHJlcHJlc2VudHMgdGhlIHNwZWVkIG9mIHRoZSBzY3JvbGwgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG5cdCAgdmFyIHN0aWNreSA9ICQoJy5zdGlja3knKSxcblx0ICAgIHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuXHQgIGlmIChzY3JvbGwgPj0gNDQwKSBzdGlja3kuYWRkQ2xhc3MoJ2ZpeGVkJyk7XG5cdCAgZWxzZSBzdGlja3kucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG5cdH0pO1xuICBcbiAgJCgnLm1vYmlsZS1tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBpZiAoJCgnI25hdi1tb2JpbGUnKS5oYXNDbGFzcygnY29sbGFwc2VkJykpIHtcbiAgICAgICQoJyNuYXYtbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKCcjbmF2LW1vYmlsZScpLmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICB9XG4gIH0pO1xuXG5cbiAgJCgnLmZhbmN5Ym94JykuZmFuY3lib3goKTtcblxuXG4gIHZhciBpY29ucyA9IG5ldyBTa3ljb25zKHtcbiAgXHQnY29sb3InOicjMDA3NEU0JyxcbiAgXHQncmVzaXplQ2xlYXInOiB0cnVlXG4gIH0pLFxuICAgIGxpc3QgID0gW1xuICAgICAgXCJjbGVhci1kYXlcIiwgXCJjbGVhci1uaWdodFwiLCBcInBhcnRseS1jbG91ZHktZGF5XCIsXG4gICAgICBcInBhcnRseS1jbG91ZHktbmlnaHRcIiwgXCJjbG91ZHlcIiwgXCJyYWluXCIsIFwic2xlZXRcIiwgXCJzbm93XCIsIFwid2luZFwiLFxuICAgICAgXCJmb2dcIlxuICAgIF0sXG4gICAgaTtcblxuXHRmb3IoaSA9IGxpc3QubGVuZ3RoOyBpLS07IClcblx0ICBpY29ucy5zZXQobGlzdFtpXSwgbGlzdFtpXSk7XG5cblx0aWNvbnMucGxheSgpO1xuXG5cdC8vIGNvbnNvbGUubG9nKGxpc3QpO1xuXG5cbi8vIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cbnZhciBhcGlLZXkgPSAnYmQ3ODA0YTU2ZjVhNDI0OGJmYTIyMjEwODE2MjQwNSc7XG5cbnZhciBvcHRpb25zID0ge1xuICBob3N0OiAnYXBpLmFwaXh1LmNvbScsXG4gIHBvcnQ6IDgwLFxuICBwYXRoOiAnL3YxL2N1cnJlbnQuanNvbj9rZXk9JyArIGFwaUtleSArICcmcT0nLFxuICBtZXRob2Q6ICdHRVQnXG59O1xuXG5cblxuZnVuY3Rpb24gY3VycmVudFdlYXRoZXIocXVlcnksIGNhbGxiYWNrKXtcblx0b3B0aW9ucy5wYXRoID0gJy92MS9jdXJyZW50Lmpzb24/a2V5PScgKyBhcGlLZXkgKyAnJnE9JyArIHF1ZXJ5O1xuXHRodHRwLnJlcXVlc3Qob3B0aW9ucywgZnVuY3Rpb24ocmVzKSB7XG5cdCAgcmVzLnNldEVuY29kaW5nKCd1dGY4Jyk7XG5cdCAgcmVzLm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0Y29uc29sZS5sb2coY2h1bmspO1xuXHQgIH0pO1xuXHQgIHJlcy5vbignZW5kJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdCAgfSk7XG5cdH0pLm9uKCdlcnJvcicsIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBoYW5kbGUgZXJyb3JzIHdpdGggdGhlIHJlcXVlc3QgaXRzZWxmXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdpdGggdGhlIHJlcXVlc3Q6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgIH0pLmVuZCgpO1xufVxuXG5cblxuXG5cdC8vIHZhciB3ZWF0aGVyID0gcmVxdWlyZSgnLi93ZWF0aGVybGliJyk7XG5cblx0ZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKCl7XG5cdFx0Y29uc29sZS5sb2coJ2dvdCBzb21lIGVycm9yJylcblx0fVxuXHRcblx0Ly9jdXJyZW50IHdlYXRoZXIgdGFrZXMgcGluIGNvZGUgb3IgbG9jYXRpb24gYXMgZmlyc3QgcGFyYW1ldGVyLCBlcnJvciBoYW5kbGVyIGNhbGxiYWNrIGFzIHNlY29uZFxuXHQvLyB3ZWF0aGVyLmN1cnJlbnRXZWF0aGVyKDc1MDg5LCBlcnJvckhhbmRsZXIpO1xuXG5cblxuXG5cblxuXG5cblxuXHQvLyB7IGN1cnJlbnQudGVtcF9mIH1cblxuXHQvLyB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdC8vIHhoci5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2FwaS5hcGl4dS5jb20vdjEvY3VycmVudC5qc29uP2tleT1iZDc4MDRhNTZmNWE0MjQ4YmZhMjIyMTA4MTYyNDA1JnE9NzUwODlcIiwgdHJ1ZSk7XG5cdC8vIC8vIEFkZCB5b3VyIGNvZGUgYmVsb3chXG5cdC8vIHhoci5zZW5kKCk7XG5cdC8vIGNvbnNvbGUubG9nKHhoci5zdGF0dXMpO1xuXHQvLyBjb25zb2xlLmxvZyh4aHIuc3RhdHVzVGV4dCk7XG5cblxufSApO1xuIl0sImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
