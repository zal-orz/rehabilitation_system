(function($){

	'use strict';

    // Variables
    //URL: http://www.bootstrapmb.com

	var window_width = $(window).width();
	var pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);


	
	/**********************
	*Mobile Menu Activatin
	***********************/ 

	var mainMenuNav = $('.main-navigation');
	mainMenuNav.meanmenu({
	    meanScreenWidth: '991',
	    meanMenuContainer: '.mobile-menu',
	    meanMenuClose: '<span class="menu-close"></span>',
	    meanMenuOpen: '<span class="menu-bar"></span>',
	    meanRevealPosition: 'right',
	    meanMenuCloseSize: '0',
	});

	/**********************
	*Verical Menu Expand
	***********************/ 

	function verticalMenuExpand(){
		$('.vertical-has-children > a').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('menu-open');
			$(this).siblings('.sub-menu').slideToggle('slow');
		})
	}
	
	$('#verticalHeader').slimScroll({
		alwaysVisible: true,
		railVisible: true,
		railColor: '#343434'
	});
	$('#miniCart').slimScroll({
		alwaysVisible: false,
		railVisible: true,
		railColor: '#343434'
	});

	function sideNavExpand(){
		$('.sidenav-open').on('click', function(e){
			e.preventDefault();
			$('.vertiacl-header-wrapper').addClass('nav-expand');
			$('.sidenav-close').toggleClass('expand');
		});	
		$('.sidenav-close').on('click', function(e){
			e.preventDefault();
			$(this).removeClass('expand');
			$('.vertiacl-header-wrapper').removeClass('nav-expand');
		});
	}

	


	/**********************
	*Adding Slide effect to dropdown
	***********************/ 

	function dropdownAnimation(){
		$('.dropdown').on('show.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
		});

		$('.dropdown').on('hide.bs.dropdown', function(e){
		  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
		});		
	}


	/**********************
	*Cart Dropdown
	***********************/ 
	
	function cartDrpdownExpand(){
		$('#cartDropdown').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).siblings('.mini-cart__dropdown-menu').addClass('open').slideToggle(500);
			if($('.dropdown-menu').hasClass('show')){
				$('.dropdown-menu').removeClass('show').slideUp(500);
			}
		});
		$('#cart-close').on('click', function(e){
			e.preventDefault();
			$('.mini-cart__dropdown-menu').removeClass('open').slideUp(500);
		})
		$('.mini-cart__dropdown-menu').on('click', function(e){
			e.stopPropagation();
		});
		$('.dropdown-toggle').on('click', function(){
			if($('.mini-cart__dropdown-menu').hasClass('open')){
				$('.mini-cart__dropdown-menu').slideUp(500);
			}
		});
	}


	/**********************
	*Homepage Slider Activation
	***********************/
	var homeSlider = $('.homepage-slider');
    homeSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.single-slider').find('[data-animation]');
        doAnimations($firstAnimatingElements);  
    });
	homeSlider.slick({
		slidesToShow: 1,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<i class="fa fa-angle-left slick-btn slick-prev"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-btn slick-next"></i>',
	});
    homeSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.single-slider[data-slick-index="' + nextSlide + '"]')
        .find('[data-animation]');
        doAnimations($animatingElements);  
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationDuration = $this.data('duration');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }

	/**********************
	*Homepage Static Slider Activation
	***********************/
	
	$('.static-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
		dots: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
					
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});







	$('.product-tab__link').on('click', function(){
		var parent = $(this).parent('.product-tab__item');
		parent.addClass('active');
		parent.siblings().removeClass('active');
	});
	/**********************
	*Magnific Popup Activation
	***********************/ 

	var imagePopup = $('.popup-btn');
	imagePopup.magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});



	/**********************
	*Bootstrap tab items resize
	***********************/ 

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var currentID = e.target.getAttribute('href');
	});


	/**********************
	* Thumb Tab
	***********************/

	$('.modal').on('shown.bs.modal', function (e) {
	    $('.thumb-menu-item').resize();
	})
	    
	$('.thumb-menu-item a').on('click',function(e){
	      e.preventDefault();
	     
	      var $href = $(this).attr('href');
	     
	      $('.thumb-menu-item a').removeClass('active');
	      $(this).addClass('active');
	     
	      $('.product-details-thumb-large .tab-pane').removeClass('active show');
	      $('.product-details-thumb-large '+ $href ).addClass('active show');

	      $('.product-thumb-large .tab-pane').removeClass('active show');
	      $('.product-thumb-large '+ $href ).addClass('active show');
	     
	});

	/**********************
	* Product Quantity
	***********************/

	function customQantity(){
	    $(".quantity").append('<div class="dec qtybutton"><i class="fa fa-angle-down"></i></div><div class="inc qtybutton"><i class="fa fa-angle-up"></i></div>');

	    $(".qtybutton").on("click", function () {
	        var $button = $(this);
	        var oldValue = $button.parent().find("input").val();
	        if ($button.hasClass("inc")) {
	            var newVal = parseFloat(oldValue) + 1;
	        } else {
	            // Don't allow decrementing below zero
	            if (oldValue > 1) {
	                var newVal = parseFloat(oldValue) - 1;
	            } else {
	                newVal = 1;
	            }
	        }
	        $button.parent().find("input").val(newVal);
	    });		
	}


	/**********************
	* Scroll To Top
	***********************/

    function scrollToTop(){
		var scrollTop = $(".scroll-to-top");
		$(window).on('scroll', function() {
			var topPos = $(this).scrollTop();

			if (topPos > 100) {
				$(scrollTop).css("opacity", "1");

			} else {
				$(scrollTop).css("opacity", "0");
			}

		}); 

		$(scrollTop).on('click', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
			return false;
		}); 

    }


	/**********************
	* Nice Select Activation
	***********************/

	$('.nice-select').niceSelect();

	/**********************
	* Sticky Header
	***********************/

	function stickyHeader(){
		$(window).on('scroll', function(){
			var headerHeight = $('.header')[0].getBoundingClientRect().height;
		    if ($(window).scrollTop() >= headerHeight) {
		        $('.fixed-header').addClass('sticky-header');
		    }
		    else {
		        $('.fixed-header').removeClass('sticky-header');
		    }
		});		
	}



	/**********************
	* Expand User Activation
	***********************/

	function expandAction(){
		$(".expand_action").on('click', function(){
			var target = $(this).data('attr');
			$(target).slideToggle('slow');
		});
	}

	/**********************
	* Popup Close
	***********************/

	function popupClose(){
		$('.popup-close').on('click', function(e){
			e.preventDefault();
			$('#subscribe-popup').fadeOut('slow');
		});
		$('.subscribe-btn').on('click', function(e){
			$('#subscribe-popup').fadeOut('slow');
		});
		$('.popup-subscribe-box-body').on('click', function(e){
			e.stopPropagation();
		});
	}


   
	/**********************
	* Expand new account info
	***********************/

	function expandNewAccountInfo(){
		$("#createaccount").on('change', function(){
			if(  $("#createaccount").prop( "checked" ) ){
				$(".new-account").slideToggle('slow');
			}else{
				$(".new-account").slideToggle('slow');
			}
		})
	}


	/**********************
	*Expand new shipping info  
	***********************/

	function expandShippingInfo(){
		$("#shipdifferetads").on('change', function(){
			if(  $("#shipdifferetads").prop( "checked" ) ){
				$(".ship-box-info").slideToggle('slow');
			}else{
				$(".ship-box-info").slideToggle('slow');
			}
		})
	}

	/**********************
	*Expand Shipping Calculator
	***********************/

	function expandShippingCalc(){
		$(".expand-calculator").on('click', function(e){
			e.preventDefault();
			$(this).siblings('#shipping-calculator').slideToggle('500');
		});
	}

	function expandSearchForm(){
		$('.search-hide').hide();
		$('.search-btn').on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('search-open');
			$('.search-hide').fadeToggle('slow');
		});
	}
	

	/**********************
	*Product carousel
	***********************/ 
	$('.js-product-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
					
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	/**********************
	*Product carousel two
	***********************/ 
	$('.js-product-carousel-2').slick({
		slidesToShow: 5,
		arrows: true,
		prevArrow: '<span class="slick-btn slick-prev"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="slick-btn slick-next"><i class="fa fa-angle-right"></i></span>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
					
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/**********************
	*Blog Carousel
	***********************/ 
	$('.blog-carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-btn slick-prev"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="slick-btn slick-next"><i class="fa fa-angle-right"></i></span>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	/**********************
	*Gallery Post Slider
	***********************/ 	

	$('.post-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-btn slick-prev"><i class="fa fa-angle-left"></i></span>',
		nextArrow: '<span class="slick-btn slick-next"><i class="fa fa-angle-right"></i></span>',
	});



	/**********************
	*Single Product Thumb Carousel Activation
	***********************/

	$('#product-slider').slick({
		prevArrow: '<i class="fa fa-angle-left slick-prev slick-btn"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next slick-btn"></i>',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
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


	/**********************
	*Single Product Thumb Carousel Activation
	***********************/

	$('#thumbmenu-horizontal').slick({
		slidesToShow: 4,
		arrows: true,
		infinite: true,
		prevArrow: '<i class="fa fa-angle-left slick-prev slick-btn"></i>',
		nextArrow: '<i class="fa fa-angle-right slick-next slick-btn"></i>',
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	/**********************
	*Single Product Thumb Vertical Carousel Activation
	***********************/

	$('#thumbmenu-vertical').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		prevArrow: '<i class="fa fa-angle-up slick-prev slick-btn"></i>',
		nextArrow: '<i class="fa fa-angle-down slick-next slick-btn"></i>',
		vertical: true,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	/**********************
	*Single Product Thumb Vertical Carousel Activation
    *URL: http://www.bootstrapmb.com
	***********************/

	$('#modal-thumbmenu').slick({
		arrows: false,
		dots: false,
		slidesToShow: 4,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});

	/**********************
	*Sticky Sidebar
	***********************/

    $('#sticky-sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 80
    });

	/**********************
	*Image Zoom
	***********************/

	$('.easyzoom').easyZoom();
	
	/**********************
	*Tooltip
	***********************/

	$('[data-toggle="tooltip"]').tooltip();

	
	/**********************
	*CounterUp activation 
	***********************/

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	/**********************
	*Review Button Target
	***********************/

	function reviewBtnTarget(){
		$('.review-btn').on('click', function(e){
			e.preventDefault();
			var scrollTarget = $(this).attr('href');
			var targetLink = $('#nav-review-tab');
			var targetLinkSib = targetLink.parent().siblings().children();
			var targetPane = $('#nav-review');
			var targetPaneSib = targetPane.siblings();

			$('html, body').stop().animate({
				scrollTop: $(scrollTarget).offset().top - 200
			}, 800);

			if(targetLink.not('.active')){
				targetLinkSib.removeClass('active');
				targetLink.addClass('active');
			}

			if(targetPane.not('.active')){
				targetPaneSib.removeClass('active');
				targetPane.addClass('active');
			}
		});		
	}

	/**********************
	*Click on Documnet
	***********************/

	function clickDom(){
		$('body').on('click', function(){
			$('#subscribe-popup').fadeOut('slow');
			if($('.mini-cart__dropdown-menu').hasClass('open')){
				$('.mini-cart__dropdown-menu').slideUp('500');
			}
		});
	};

	clickDom();

	/**********************
	*Product View Mode
	***********************/
	function porductViewMode(){
		$(window).on({
		    load:function(){
				var activeChild = $('.product-view-mode a.active');
				var firstChild = $('.product-view-mode').children().first();

		    	if(window_width < 576){
		    		$('.product-view-mode a').removeClass('active');
		    		$('.product-view-mode').children().first().addClass('active');
		    		$('.shop-product-wrap').removeClass('gridview-3 gridview-4 gridview-5').addClass('gridview-2');
		    	}
		    },
		    resize:function(){

		    	var ww = $(window).width();
				var activeChild = $('.product-view-mode a.active');
				var firstChild = $('.product-view-mode').children().first();
				var defaultView = $('.product-view-mode').data('default');

				if(ww < 1200 && ww > 575){
					if(activeChild.hasClass('grid-5')){
						$('.product-view-mode a.grid-5').removeClass('active');
						if(defaultView == 4){
							$('.product-view-mode a.grid-4').addClass('active');
							$('.shop-product-wrap').removeClass('gridview-2 gridview-3 gridview-5').addClass('gridview-4');		
						}else if(defaultView == 'list'){
							$('.product-view-mode a.list').addClass('active');
							$('.shop-product-wrap').removeClass('gridview-2 gridview-3 gridview-4 gridview-5').addClass('listview');	
						}else{
							$('.product-view-mode a.grid-3').addClass('active');
							$('.shop-product-wrap').removeClass('gridview-2 gridview-4 gridview-5').addClass('gridview-3');		
						}
					}
				}

				if(ww < 768 && ww > 575){
					if(activeChild.hasClass('grid-4')){
						$('.product-view-mode a.grid-4').removeClass('active');
						if(defaultView == 'list'){
							$('.product-view-mode a.list').addClass('active');
							$('.shop-product-wrap').removeClass('gridview-2 gridview-3 gridview-4 gridview-5').addClass('listview');	
						}else{
							$('.product-view-mode a.grid-3').addClass('active');
							$('.shop-product-wrap').removeClass('gridview-2 gridview-4 gridview-5').addClass('gridview-3');
						}	
					}
				}
				if(activeChild.hasClass('list')){
					
				}else{
					
			    	if(ww < 576){
			    		$('.product-view-mode a').removeClass('active');
			    		$('.product-view-mode').children().first().addClass('active');
			    		$('.shop-product-wrap').removeClass('gridview-3 gridview-4 gridview-5').addClass('gridview-2');
			    	}else{
			    		if(activeChild.hasClass('grid-2')){
				    		if(ww < 1200){
								$('.product-view-mode a:not(:first-child)').removeClass('active');
				    		}else{
								$('.product-view-mode a').removeClass('active');
								$('.product-view-mode a:nth-child(2)').addClass('active');
								$('.shop-product-wrap').removeClass('gridview-2 gridview-4 gridview-5').addClass('gridview-3');
				    		}
				    		
				    	}
			    	}	
				}
		    }
		});
		$('.product-view-mode a').on('click', function(e){
		    e.preventDefault();
		    
		    var shopProductWrap = $('.shop-product-wrap');
		    var viewMode = $(this).data('target');
		    
		    
		    $('.product-view-mode a').removeClass('active');
		    $(this).addClass('active');
		    if(viewMode == 'listview'){
				shopProductWrap.removeClass('grid');
		    }else{
		    	if(shopProductWrap.not('.grid') )
		    	shopProductWrap.addClass('grid');
		    }
		    shopProductWrap.removeClass('gridview-2 gridview-3 gridview-4 gridview-5 listview').addClass(viewMode);
		});
	}

	/**********************
	*Bootstrap Accordion 
	***********************/

	$('.accordion__link').on('click', function(){
		$(this).parents('.accordion__single').siblings().removeClass('open');
		$(this).parents('.accordion__single').toggleClass('open');
	});

	/**********************
	*Initialization 
	***********************/
	
	dropdownAnimation();
	cartDrpdownExpand();
	customQantity();
	expandAction();
	expandNewAccountInfo();
	expandShippingInfo();
	expandShippingCalc();
	scrollToTop();
	stickyHeader();
	popupClose();
	expandSearchForm();
	verticalMenuExpand();
	sideNavExpand();
	porductViewMode();
	reviewBtnTarget();

})(jQuery);