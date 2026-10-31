var THEMEMASCOT = {};
(function($) {

	"use strict";


  /* ---------------------------------------------------------------------- */
  /* --------------------------- Start Demo Switcher  --------------------- */
  /* ---------------------------------------------------------------------- */
  var showSwitcher = false;
  var $body = $('body');
  var $style_switcher = $('#style-switcher');
  if( !$style_switcher.length && showSwitcher ) {
      $.ajax({
          url: "color-switcher/style-switcher.html",
          success: function (data) { $body.append(data); },
          dataType: 'html'
      });
  }
  /* ---------------------------------------------------------------------- */
  /* ----------------------------- En Demo Switcher  ---------------------- */
  /* ---------------------------------------------------------------------- */


  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") === "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.isLTR = {
    check: function() {
      if( $( "html" ).attr("dir") !== "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

// Hide Narasinema Preloader
function handlePreloader() {
    $('.preloader').stop(true, true).fadeOut(200, function () {
        $(this).remove();
    });
}

// Hilangkan logo loading maksimal sekitar 1,2 detik
$(document).ready(function () {
    setTimeout(function () {
        handlePreloader();
    }, 1200);
});

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();


	// Backtotop Js
	function back_to_top() {
	var btn = $('#back_to_top');
	var btn_wrapper = $('.back-to-top-wrapper');
	var windowOn = $(window); // Define windowOn properly

	windowOn.on('scroll', function () {
		if (windowOn.scrollTop() > 300) {
			btn_wrapper.addClass('back-to-top-btn-show');
		} else {
			btn_wrapper.removeClass('back-to-top-btn-show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 300); // Removed quotes from 300, since it's a number
	});
	}

	back_to_top();


  // Text Invert
  function initTextReveall() {

  // Home HP: jangan jalankan SplitType
  if (
    document.querySelector(".banner-section") &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    return;
  }

  const tagetedElementContainer =
    document.querySelectorAll(".text-reveal-anim");

  if (tagetedElementContainer?.length) {
    tagetedElementContainer.forEach(e => {
      var t = new SplitType(e, { types: "chars" });

      gsap.from(t.chars, {
        scrollTrigger: {
          trigger: e,
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          duration: 0.5
        },
        color: "var(--theme-color1)",
        stagger: 5,
        ease: "back.out"
      });
    });
  }
}
  initTextReveall();
  function initTextReveal() {

  // Home HP: jangan jalankan SplitType
  if (
    document.querySelector(".banner-section") &&
    window.matchMedia("(max-width: 767px)").matches
  ) {
    return;
  }

  const tagetedElementContainer =
    document.querySelectorAll(".text-reveal-anim2");

  if (tagetedElementContainer?.length) {
    tagetedElementContainer.forEach(e => {
      var t = new SplitType(e, { types: "chars" });

      gsap.from(t.chars, {
        scrollTrigger: {
          trigger: e,
          start: "top 75%",
          end: "top 25%",
          scrub: true,
          duration: 0.5
        },
        color: "#FFFFFF99",
        letterSpacing: "-0.01em",
        stagger: 0.05,
        ease: "back.out"
      });
    });
  }
}
  initTextReveal();

    // Words Animation
// Nonaktifkan SplitText hanya pada Home HP

if (
  !(
    document.querySelector(".banner-section") &&
    window.matchMedia("(max-width: 767px)").matches
  )
) {
  let wordsAnimation = gsap.utils.toArray(".denge-words");

  wordsAnimation.forEach(splitWords => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitWords,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none"
      }
    });

    const textSplitWords = new SplitText(splitWords, {
      type: "words"
    });

    gsap.set(splitWords, { perspective: 400 });

    textSplitWords.split({ type: "words" });

    tl.from(textSplitWords.words, {
      duration: .4,
      delay: .3,
      opacity: 0,
      rotationX: 10,
      x: 50,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: .1
    });
  });
}

  // Fade Animation Bottom
  let fade_animation = gsap.utils.toArray(".denge-fade");
  fade_animation.forEach((fade) => {
    const ease_value = fade.getAttribute("data-ease");

    gsap.from(fade, {
      scrollTrigger: {
        trigger: fade,
        start: "top 90%",
      },
      delay: 0.5,
      opacity: 0,
      y: 30,
      ease: ease_value,
      duration: .4,
    });
  });
    // Characters Animation
// Nonaktifkan SplitText hanya pada Home HP

if (
  !(
    document.querySelector(".banner-section") &&
    window.matchMedia("(max-width: 767px)").matches
  )
) {
  let charsAnimation = gsap.utils.toArray(".denge-chars");

  charsAnimation.forEach(splitChars => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitChars,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none"
      }
    });

    const textSplitChars = new SplitText(splitChars, {
      type: "chars"
    });

    gsap.set(splitChars, { perspective: 400 });

    textSplitChars.split({ type: "chars" });

    tl.from(textSplitChars.chars, {
      duration: .4,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 100,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: .1
    });
  });
}

    });document.addEventListener("DOMContentLoaded", function () {
      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
          gsap.registerPlugin(ScrollTrigger);

          ScrollTrigger.matchMedia({
              "(min-width: 1200px)": function () {
                  const animations = [
                      { selector: ".get-in-text", x: 200 },
                      // চাইলে আরও class add করতে পারো
                      // { selector: ".another-class", x: -200 },
                  ];

                  animations.forEach(anim => {
                      const elements = document.querySelectorAll(anim.selector);
                      if (elements.length) {
                          elements.forEach(el => {
                              gsap.to(el, {
                                  x: anim.x,
                                  ease: "none",
                                  scrollTrigger: {
                                      trigger: el,
                                      start: "top bottom",
                                      end: "top top",
                                      scrub: true,
                                  },
                              });
                          });
                      }
                  });
              }
          });
      }
  });

  if ($(".service-block11 .inner-block").length) {
    const $boxes = $(".service-block11 .inner-block");

    if ($boxes.length) {
      // Click logic - toggle collapse/expand
      $boxes.on("click", function () {
        var $clickedBox = $(this);
        var isActive = $clickedBox.hasClass("active");

        // If the clicked box is already active, collapse it
        if (isActive) {
          $clickedBox.removeClass("active");
          $clickedBox.find(".content-box").slideUp().removeClass("active");
        } else {
          // Otherwise, collapse all and expand the clicked one
          $boxes.removeClass("active");
          $(".service-block11 .content-box").slideUp().removeClass("active");

          $clickedBox.addClass("active");
          $clickedBox.find(".content-box").slideDown().addClass("active");
        }
      });

      // Activate the first box on load (after handler is attached)
      const $firstBox = $boxes.first();
      $firstBox.trigger("click");
    }
  }

  // ScrollSmoother - using agntix-html approach
  if($('#smooth-wrapper').length && $('#smooth-content').length){
    ScrollSmoother.create({
      smooth: 1.35,
      effects: true,
      smoothTouch: .1,
      ignoreMobileResize: true
    })
  }

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}

	document.querySelectorAll('.project-block-two, .image').forEach(card => {

  const viewAll = card.querySelector('.view-button');
  if (!viewAll) return;   // 🔥 important line

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  card.addEventListener('mouseenter', () => {
    viewAll.style.opacity = '1';
    viewAll.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  card.addEventListener('mouseleave', () => {
    viewAll.style.opacity = '0';
    viewAll.style.transform = 'translate(-50%, -50%) scale(0)';
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    viewAll.style.left = `${currentX}px`;
    viewAll.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});
  

  // if ($('.teams-section-three').length > 0) {
  //   let project_text = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".teams-text-box",
  //       start: 'top center-=350',
  //       end: "bottom 70%",
  //       pin: ".teams-style-text",
  //       markers: false,
  //       pinSpacing: false,
  //       scrub: 1,
  //     }
  //   })
  //   project_text.set(".teams-style-text", {
  //     scale: 1,
  //     duration: 3
  //   })
  //   project_text.to(".teams-style-text", {
  //     scale: 2,
  //     duration: 3
  //   })
  //   project_text.to(".teams-style-text", {
  //     scale: 2,
  //     duration: 3
  //   }, "+=2")

  //        project_text.to(".teams-style-text", {
  //           autoAlpha: 0,
  //           duration: 2
  //       });
  // }

  window.addEventListener("DOMContentLoaded", () => {

    let current = 0;

    const teams_slider = document.querySelectorAll('.teams-slide3');
    const dots = document.querySelectorAll('.dot');

    // যদি element না থাকে তাহলে stop
    if (teams_slider.length === 0 || dots.length === 0) return;

    function goToSlide(n) {

      // safety check
      if (!teams_slider[current] || !dots[current]) return;

      // remove active
      teams_slider[current].classList.remove('active');
      dots[current].classList.remove('active');

      // new index (loop safe)
      current = (n + teams_slider.length) % teams_slider.length;

      // add active
      teams_slider[current].classList.add('active');
      dots[current].classList.add('active');
    }

    function changeSlide(dir) {
      goToSlide(current + dir);
    }

    // Auto slide
    setInterval(() => {
      changeSlide(1);
    }, 4000);

    // Dot click support
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (e.key === "ArrowRight") changeSlide(1);
      if (e.key === "ArrowLeft") changeSlide(-1);
    });

  });

  // project-block-three
  const bproject = document.querySelectorAll(".project-block-three, .inner-block");

  bproject.forEach(box => {

  box.addEventListener("mouseenter",()=>{

  bproject.forEach(b => b.classList.remove("active"));

  box.classList.add("active");

  });

  });


	// Image move with mouse Block
	if ($(".team-block .inner-block").length) {
		$(".team-block .inner-block").each(function () {
			const $item = $(this);
			const $hoverImage = $item.find(".hover-image");

			if ($hoverImage.length === 0) return;

			$item.on("mousemove", function (e) {
				const offset = $item.offset();
				const dx = e.pageX - offset.left;
				const dy = e.pageY - offset.top;

				// ✅ Keep the rotate(30deg) here always
				$hoverImage.css(
					"transform",
					`translate(${dx}px, ${dy}px) rotate(0deg)`
				);
			});
		});
	}

	//service-carousel One
	if ($('.banner-slider-one').length) {
		var swiper = new Swiper(".banner-slider-one", {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 600,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

  

	if ($('.service-one-slider').length) {
		var swiper = new Swiper(".service-one-slider", {
			speed:1500,
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1023: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
			// Navigation arrows
			navigation: {
				nextEl: '.slider-next',
				prevEl: '.slider-prev',
			},
		});
	}


  if ($('.testimonial-slider-h2').length > 0) {
    const brandSlider2 = new Swiper(".testimonial-slider-h2", {
      spaceBetween: 12,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }


  if ($('.testimonial-slider-h3').length > 0) {
    const brandSlider2 = new Swiper(".testimonial-slider-h3", {
      spaceBetween: 24,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".testimonial-slider-pagination",
        clickable: true,
      },
    });
  }


  if ($('.testimonial-slider-h4').length > 0) {
    const brandSlider2 = new Swiper(".testimonial-slider-h4", {
      spaceBetween: 24,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1400: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }


  if ($('.client-slider').length > 0) {
    const brandSlider2 = new Swiper(".client-slider", {
      spaceBetween: 25,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".dot",
        clickable: true,
      },
      breakpoints: {
      
        1399: {
          slidesPerView: 6,
        },
        1199: {
          slidesPerView: 4,
        },
        991: {
          slidesPerView: 3,
        },
        767: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  }

  // Project Image Slider
  if ($('.project-image-slider').length) {
    var swiper = new Swiper(".project-image-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 600,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1023: {
          slidesPerView: 2,
        },
      },
    });
  }


	if ($('.testi-slider-content').length) {
		var swiper = new Swiper(".testi-slider-content", {
			speed:1500,
			loop: true,
			slidesPerView: 1,
			spaceBetween: 70,
			autoplay: true,
		});
	}

	// Background image area start here ***
	$("[data-background").each(function() {
	  $(this).css(
	    "background-image",
	    "url( " + $(this).attr("data-background") + "  )"
	  );
	});

	// Background image hover change area start here ***
	$(".service-block").hover(function() {
	  let newBackground = $(this).data("bg");
	  $(".services-section .outer-box")
	    .attr("data-background", newBackground)
	    .css("background-image", "url(" + newBackground + ")");
	});

	if ($('.swiper-slide .service-block .inner-box').length) {
    $(document).ready(function() {
      const $stepBlocks = $('.swiper-slide .service-block .inner-box');
      let $lastActiveBlock = $stepBlocks.eq(2); // Start with 2nd div active

      // Initialize - set middle block active
      $stepBlocks.removeClass('active');
      $lastActiveBlock.addClass('active');

      // Hover handling using .on()
      $stepBlocks.on('mouseenter', function() {
        $stepBlocks.removeClass('active');
        $(this).addClass('active');
        $lastActiveBlock = $(this);
      });

      $stepBlocks.on('mouseleave', function() {
        $stepBlocks.removeClass('active');
        $lastActiveBlock.addClass('active');
      });
		});
	}

	if ($('.team-block1').length) {
    var $team_block = $('.team-block1 .inner-block');
    $($team_block).on('mouseenter', function (e) {
      $(this).find('.content .social-icon').stop().slideDown(300);
      return false;
    });
    $($team_block).on('mouseleave', function (e) {
      $(this).find('.content .social-icon').stop().slideUp(300);
      return false;
    });
	}

	// 21. Image Reveal Animation  used
  let imgs_reveal = document.querySelectorAll(".img-reveal");

  imgs_reveal.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "restart none none reset"
      }
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: Power2.out
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out
    });
  });
		
	
	
// Section Title Animation
// Nonaktifkan hanya pada Home versi HP

if (
  $('.char-animation').length > 0 &&
  !(
    document.querySelector(".banner-section") &&
    window.matchMedia("(max-width: 767px)").matches
  )
) {
  let char_come = gsap.utils.toArray(".char-animation");

  char_come.forEach(splitTextLine => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none"
      }
    });

    const itemSplitted = new SplitText(splitTextLine, {
      type: "chars, words"
    });

    gsap.set(splitTextLine, { perspective: 300 });

    itemSplitted.split({ type: "chars, words" });

    tl.from(itemSplitted.chars, {
      duration: 1,
      delay: .5,
      x: 100,
      autoAlpha: 0,
      stagger: .05
    });
  });
}

	//>> Footer Instagram Slider Start <<//
	if($('.footer-instagram-slider').length > 0) {
		const footerInstagramSlider = new Swiper(".footer-instagram-slider", {
			spaceBetween: 10,
			speed: 1300,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			
			breakpoints: {
				1199: {
					slidesPerView: 5,
				},
				991: {
					slidesPerView: 4,
				},
				767: {
					slidesPerView: 3,
				},
				575: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}


  if ($('.service-slider-h2').length > 0) {
    const brandSlider2 = new Swiper(".service-slider-h2", {
      spaceBetween: 24,
      speed: 2000,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".service-slider-pagination",
        clickable: true,
      },
    });
  }

  function show_secondary_price(pricing_tables){
    pricing_tables.addClass('show-secondary-price');
    var pricing_btn = pricing_tables.find('.btn');
    var secondary_btn_url = pricing_btn.data("secondary-link");
    pricing_btn.attr("href", secondary_btn_url);
  }
  function hide_secondary_price(pricing_tables){
    pricing_tables.removeClass('show-secondary-price');
    var pricing_btn = pricing_tables.find('.btn');
    var normal_btn_url = pricing_btn.data("normal-link");
    pricing_btn.attr("href", normal_btn_url);
  }

  //smart btn
  var TM_Pricing_Switcher_Smart = function ($scope) {
    var pricing_smart_switcher = $('.tm-pricing-smart-switcher, .tm-pricing-plan-switcher');
    if( pricing_smart_switcher.length > 0 ) {
      pricing_smart_switcher.find("[data-pricing-trigger]").on("click", function (e) {
        var $self = $(e.target);
        $self.toggleClass("secondary-active");
        var pricing_tables = $self.parents("section").find(".tm-pricing-table");

        if( $self.hasClass( 'secondary-active' ) ) {
          show_secondary_price(pricing_tables);
        } else {
          hide_secondary_price(pricing_tables);
        }
      });
    }
  };

  //round, flat btn
  var TM_Pricing_Switcher_Btn = function ($scope) {
    var pricing_btn_switcher = $('.tm-pricing-smart-switcher-button');
    if( pricing_btn_switcher.length > 0 ) {
      pricing_btn_switcher.find("[data-pricing-trigger]").on("click", function (e) {
        var target_id = $(this).data('show');
        var $self = $(e.target);
        pricing_btn_switcher.find("[data-pricing-trigger]").removeClass("active");
        $(this).addClass("active");
        var pricing_tables = $self.parents("section").find(".tm-pricing-table");

        if( target_id == "year" ) {
          show_secondary_price(pricing_tables);
        } else {
          hide_secondary_price(pricing_tables);
        }
      });
    }
  };

	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
    });
	};

	if ($('.room-section-h1-two .bxslider').length) {
		$('.room-section-h1-two .bxslider').bxSlider({
        nextSelector: '.room-section-h1-two #slider-next',
        prevSelector: '.room-section-h1-two #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '1000',
        pagerCustom: '.room-section-h1-two .slider-pager .thumb-box'
    });
	};

	//Distance Range Slider
	if ($('.distance-range-slider').length) {
		$(".distance-range-slider").slider({
			range: true,
			min: 0,
			max: 2000,
			values: [0, 1500],
			slide: function (event, ui){
				$("input.range-amount").val(ui.values[0] + " - " + ui.values[1]);
			}
		});
		$("input.range-amount").val($(".distance-range-slider").slider("values", 0) + " - " + $(".distance-range-slider").slider("values", 1));
	}

  $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}

  //Accordion Box
  if ($('.accordion-box').length) {
    $(".accordion-box").on('click', '.acc-btn', function () {

      var outerBox = $(this).parents('.accordion-box');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active ');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }

  //Accordion Box
  if ($('.accordion-box3').length) {
    $(".accordion-box3").on('click', '.acc-btn', function () {

      var outerBox = $(this).parents('.accordion-box3');
      var target = $(this).parents('.accordion');

      if ($(this).hasClass('active') !== true) {
        $(outerBox).find('.accordion .acc-btn').removeClass('active ');
      }

      if ($(this).next('.acc-content').is(':visible')) {
        return false;
      } else {
        $(this).addClass('active');
        $(outerBox).children('.accordion').removeClass('active-block');
        $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
        target.addClass('active-block');
        $(this).next('.acc-content').slideDown(300);
      }
    });
  }

	//Accordion Box
	if ($('.accordion-box2').length) {
		$(".accordion-box2").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box2');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.15,
				'dynamicDraw': true,
				'displayInput': false
			});

			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});

			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}


	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}

	

	//Dropdown Button
	$('.pricing-tabs .tab-buttons .yearly').on('click', function() {
		$('.round').addClass('boll-right');
	});
	
	//Dropdown Button
	$('.pricing-tabs .tab-buttons .monthly').on('click', function() {
		$('.round').removeClass('boll-right');
	});

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			});
		});
	}

	// Home 1 Destination js
	var swiper = new Swiper(".destination-active", {
		speed:1500,
		loop: true,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,            // time between slides (in ms)
			disableOnInteraction: false, // keep autoplay after user interactions
			pauseOnMouseEnter: false,    // optional: autoplay won't pause on hover
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		// pagination
		pagination: {
			el: ".destination-dots",
			clickable:true,
		},
	});

	// Home 1 Destination js
	var swiper = new Swiper(".testimonial-active-home-two", {
		speed:1500,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 50,
		autoplay: {
			delay: 3000,            // time between slides (in ms)
			disableOnInteraction: false, // keep autoplay after user interactions
			pauseOnMouseEnter: false,    // optional: autoplay won't pause on hover
		},
		// Navigation arrows
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
		// pagination
		pagination: {
			el: ".blog-slider-pagination",
			clickable:true,
		},
	});

	//Projects Swiper One
	if ($('.testimonial-swiper-layout1').length) {
		var swiper = new Swiper(".testimonial-swiper-layout1", {
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 600,
			loop: true,
			autoplay: false,
			navigation: {
				nextEl: ".swiper-arry-next",
				prevEl: ".swiper-arry-prev",
			},
		});
	}

  //service-carousel One
  if ($('.testimonial-swiperh5').length) {
    var swiper = new Swiper(".testimonial-swiperh5", {
      slidesPerView: 3,
      spaceBetween: 24,
      speed: 500,
      loop: true,
      autoplay: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        991: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        }
      },
      
      navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
      },
    });
  }


	// Aos Animation
	AOS.init();

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
					var el = $(this);
					var percent = el.data("percent");
					$(el).css("width", percent).addClass("counted");
				}, {
					accY: -50
			}
		);
	}

	//Image Reveal Animation
	if($('.reveal').length){
		gsap.registerPlugin(ScrollTrigger);
		let revealContainers = document.querySelectorAll(".reveal");
		revealContainers.forEach((container) => {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
				trigger: container,
				toggleActions: "play none none none"
				}
			});
			tl.set(container, { autoAlpha: 1 });
			tl.from(container, 1.5, {
				xPercent: -100,
				ease: Power2.out
			});
			tl.from(image, 1.5, {
				xPercent: 100,
				scale: 1.3,
				delay: -1.5,
				ease: Power2.out
			});
		});
	}

	document.querySelectorAll(".scroll-text").forEach((section) => {
		let tl = gsap.timeline({
			scrollTrigger: {
			trigger: section,
			start: "top 100%",
			end: "bottom top",
			scrub: 1,
			markers: false,
			},
		});
		tl.from(section.querySelector(".text1"), { xPercent: 20 })
		.from(section.querySelector(".text2"), { xPercent: -20 }, 0);
		tl.from(section.querySelector(".scroll-anim-top"), { yPercent: 10 }, 0)
		.from(section.querySelector(".scroll-anim-bottom"), { yPercent: -10 }, 0);
	});

	//Bg Parallax
	if($('.bg-parallax').length){
		gsap.to(".bg-parallax", {
			backgroundPosition: "70% 75%",
			ease: "ease1",
			scrollTrigger: {
			trigger: ".bg-parallax",
			start: "top bottom",
			end: "bottom top",
			scrub: 1
			}
		});
	}

		// Select2 Dropdown
	$('.custom-select').select2({
		minimumResultsForSearch: 7,
	});

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	//Custom Data Attributes
	if($('[data-tm-bg-color]').length){
		$('[data-tm-bg-color]').each(function() {
		  $(this).css("cssText", "background-color: " + $(this).data("tm-bg-color") + " !important;");
		});
	}

	if($('.scroll-to-fixed-parent').length){
	  var scroll_childs = $('.scroll-to-fixed-child');
	  for (var i = 0, length = scroll_childs.length; i < length; i++) {
	    var scroll_child = $(scroll_childs[i]);
	    scroll_child.scrollToFixed({
	      marginTop: $('header').outerHeight(true) + 10,
	      zIndex: 2,
	      spacerClass: 'd-none',
	      removeOffsets: true,
	      limit: function() {
	        var parent = this.parents('.scroll-to-fixed-parent');
	        return parent.offset().top + parent.outerHeight(true) - this.outerHeight(true) - 0;
	      }
	    });
	  }
	 }

  /* ---------------------------------------------------------------------- */
  /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
  /* ---------------------------------------------------------------------- */
  var $onepage_nav = $('.onepage-nav');
  var $sections = $('section');
  var $window = $(window);
  function TM_activateMenuItemOnReach() {
	  if( $onepage_nav.length > 0 ) {
	    var cur_pos = $window.scrollTop() + 2;
	    var nav_height = $onepage_nav.outerHeight();
	    $sections.each(function() {
	      var top = $(this).offset().top - nav_height - 80,
	        bottom = top + $(this).outerHeight();

	      if (cur_pos >= top && cur_pos <= bottom) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $sections.removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
	      }

	      if (cur_pos <= nav_height && cur_pos >= 0) {
	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
	        $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
	      }
	    });
	  }
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

$(window).on('load', function() {
    handlePreloader();
    TM_Pricing_Switcher_Smart();
    TM_Pricing_Switcher_Btn();
});

// Fallback: hide preloader even if some assets load slowly
$(document).ready(function() {
    setTimeout(function() {
        handlePreloader();
    }, 1200);
});

})(window.jQuery);