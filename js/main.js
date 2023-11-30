jQuery(function($) {'use strict';
	 
	 
	$(document).on("scroll",function(){
		if($(document).scrollTop()>10){
			$("#main-menu").addClass("dark");
		} else{
			$("#main-menu").removeClass("dark");
		}
	});	
	 
	 $(function() {
        
		$('#da-slider').cslider({
			autoplay	: true,
			bgincrement	: 1,
			interval: 10000
		});
	
	});
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top +1}, 1000);
		return false;
	});
	
	$('a.cotiza').on('click', function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top +1}, 1000);
		return false;
	});
	
	
	
	
	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   150;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){		
			contentTop.push( $( $(this).attr('href') ).offset().top);			
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		//alert(contentTop);
		$.each( contentTop, function(i){			
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Slider
	$(document).ready(function() {
		var time = 7; // time inseconds
		
	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
	
		
		$('.info').slick({	
			  dots:true,			 
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  cssEase: 'linear',
			  autoplay:false,
			  autoplaySpeed:3000,
			  arrows:false
		});
		
		
		$('.clientes').slick({	
			  dots:true,			 
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  cssEase: 'linear',
			  autoplay:true,
			  autoplaySpeed:3000,
			  arrows:false,
			  responsive: [
				{
				  breakpoint: 1000,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});
		
		
		
		$('.clientescolor').slick({	
			  dots:true,			 
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  cssEase: 'linear',
			  autoplay:true,
			  autoplaySpeed:3000,
			  arrows:false,
			  responsive: [
				{
				  breakpoint: 1000,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});
		
		
		$('.enlaces').slick({	
			  dots:true,			 
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  cssEase: 'linear',
			  autoplay:true,
			  autoplaySpeed:3000,
			  arrows:false,
			  responsive: [
				{
				  breakpoint: 1000,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			  ]
		});
		
				
		$(".openmore").on('click', function(){
			$(this).parent().find(".moreinfo").addClass('displayed');
			return false;
		});
		
		
		
		$(".moreinfo .close").on('click', function(){
			$(this).parent().parent().removeClass('displayed');
			return false;
		});
		
				
		
	});

	

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email esta enviandose...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Gracias por contactarnos. Tan pronto sea posible le contactaremos.</p>').delay(3000).fadeOut();
		});
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

	

});