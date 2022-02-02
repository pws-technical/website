jQuery(function($) {
	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});
	
	//navHeight calc
	var navHeight =  $('.navbar-header').height();
	
	
	//#main-slider
	var slideHeight = $(window).height();
	$('#home-slider .item').css('height',slideHeight);
	
	$(window).resize(function(){
		slideHeight = $(window).height();
		$('#home-slider .item').css('height',slideHeight);
	});

	$('.navbar-collapse ul li a').on('click', function() {  
		var navHeight1=$('.main-nav').height();
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 0.5*navHeight1}, 1000);
		return false;
	});

	//Initiat WOW JS
	new WOW().init();

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success" style="color:#fff;">Thank you for contacting us. We will contact you as early as possible.</p>').delay(3000).fadeOut();
		});
	});

	// raise pws logo when navbar uncollapse
	//.logo for index.html && .hide-nav-logo img for image_gallery.html
	
	$('.navbar-header button').click(function(){			
			if(!($('.navbar-collapse').hasClass('collapse in'))){
				displaceLogo(0);
			}
			else{
				displaceLogo(1);
				}
	});
	
	
	$(window).resize(function(){
		if($(window).width()>768){
			displaceLogo(1);
		}
		else if(($('.navbar-collapse').hasClass('collapse in'))){
				displaceLogo(0);
			}
	});
	
	//offset for scrollspy
	
	$('body').attr('data-offset',navHeight);
	$(window).resize(function(){
		navHeight =  $('.navbar-header').height();
		$('body').attr('data-offset',navHeight);		
	});
	
	
function displaceLogo(v1){
	if(v1==1){
		$('.logo2,.hide-nav-logo img').css('height','77px');
		$('.logo2,.hide-nav-logo img').css('width','77px');
		$('.navbar-brand').removeClass('raise-logo-1');
	}
	else{
		$('.logo2,.hide-nav-logo img').css('height',navHeight);
		$('.logo2,.hide-nav-logo img').css('width',navHeight);
		$('.navbar-brand').addClass('raise-logo-1');
	}
}
		
	//For youtube video embed
	
    $(".youtube1").each(function() {
        // Based on the YouTube ID, we can easily find the thumbnail image
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
		// Overlay the Play icon to make it look like a video player
        $(this).append($('<div/>', {'class': 'play'}));
    
        $(document).delegate('#'+this.id, 'click', function() {
            // Create an iFrame with autoplay set to true
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
    
            // The height and width of the iFrame should be the same as parent
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': '100%', 'height': '100%' })
    
            // Replace the YouTube thumbnail with YouTube HTML5 Player
            $(this).replaceWith(iframe);
        });
		
		
    });
	//uncollapse navbar on clicking anywhere in page but only on click of left mouse button
	
	$(document).click(function(event){
		var $navbar = $(".navbar-collapse"); 
		var mouseButton=event.button;
		if ($navbar.hasClass("in")&& mouseButton!=2 ) {      
			$navbar.collapse('hide');
			displaceLogo(1);
		}
	});
	
	$('.scroll a').click(function(){                  
			$(".navbar-collapse").collapse('hide');
			displaceLogo(1);
	});
	
	var aoh=$(window).width();
	
	if(aoh<850 && aoh>767){
		$('#hide-aoh').css('display','none');
	}
	else
		$('#hide-aoh').css('display','');
	
	$(window).resize(function(){
		aoh=$(window).width();
			
		if(aoh<850 && aoh>767){
			$('#hide-aoh').css('display','none');
		}
		else
			$('#hide-aoh').css('display','');
	});
	//to resize gallery images
	var tempEvent1=$('#temp-event-1').height();
	$('#temp-event-2').css('height',tempEvent1);
	$(window).resize(function(){
		tempEvent1=$('#temp-event-1').height();
		$('#temp-event-2').css('height',tempEvent1);
	});
	
	var environDay=$('#envir-day-2').height();
	$('#envir-day-1').css('height',environDay);
	$(window).resize(function(){
		environDay=$('#envir-day-2').height();
		$('#envir-day-1').css('height',environDay);
	});
	
	var polCheck=$('#Pol-check').height();
	$('.Pol-check').css('height',polCheck);
	$(window).resize(function(){
		polCheck=$('#Pol-check').height();
		$('.Pol-check').css('height',polCheck);
	});
	
	var solidWaste=$('#solid-waste').height();
	$('.solid-waste').css('height',solidWaste);
	$(window).resize(function(){
		polCheck=$('#solid-waste').height();
		$('.solid-waste').css('height',solidWaste);
	});
	
	var graffiti=$('#graffiti').height();
	$('.graffiti').css('height',graffiti);
	$(window).resize(function(){
		graffiti=$('#graffiti').height();
		$('.graffiti').css('height',graffiti);
	});
	
	var bus_stop_clean=$('#bus-stop-clean').height();
	$('.bus-stop-clean').css('height',bus_stop_clean);
	$(window).resize(function(){
		bus_stop_clean=$('#bus-stop-clean').height();
		$('.bus-stop-clean').css('height',bus_stop_clean);
	});

	var treePaint=$('#tree-paint').height();
	$('.tree-paint').css('height',treePaint);
	$(window).resize(function(){
		treePaint=$('#tree-paint').height();
		$('.tree-paint').css('height',treePaint);
	});
	
	//up-down navigation using keyboard for chrome

	const scrollDown = (h) => {
	  let i = h || 0;
	  if (i < 50) {
		setTimeout(() => {
		  window.scrollTo(window.scrollX, window.scrollY+10);
		  scrollDown(i + 10);
		}, 10);
	  }
	}

	const scrollUp = (h) => {
	  let i = h || 0;
	  if (i < 50) {
		setTimeout(() => {
		  window.scrollTo(window.scrollX, window.scrollY-10);
		  scrollUp(i + 10);
		}, 10);
	  }
	}
	
	if(typeof window.chrome == "object"){
		window.addEventListener('keydown', function( e ) { 
			if( e.keyCode == 40 ) {
				scrollDown();
			}
			if( e.keyCode == 38 ) { 
				scrollUp();
			} 
		});
	}
	
});//end of $(function(){});
