/* Demo Scripts for Bootstrap Carousel and Animate.css article
 * on SitePoint by Maria Antonietta Perna
 */
(function ($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#home-carousel"),
    $firstAnimatingElems = $myCarousel
      .find(".item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel({
    interval: 5000,
    cycle: true,
    pause: "false",
  });

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function (e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );

    doAnimations($animatingElems);
  });
  // End of bootsrap Carousel--------------------

  // close menu on click menu item
  $(".navigation-menu-list .menu-item a").click(function () {
    $(".menu-close").click();
    $(
      ".navigation-type-split .navigation-menu-wrapper .navigation-overlay .str "
    ).removeClass("str-new");
  });

  // $('.menu-close').click(function() {
  //     // $('.menu-close').click();
  //     $('.navigation-type-split .navigation-menu-wrapper .navigation-overlay .str ').removeClass('str-new');

  // });
  // On scroll fixed menu
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 75) {
      $("#homenavigation").addClass("fixMenu");
    } else {
      $("#homenavigation").removeClass("fixMenu");
    }
  });

  // rellax initialization
  var rellax = new Rellax(".rellax");
  // var rellax1 = new Rellax('.rellax1',{
  //     wrapper:'.scroll-wrap1'
  // });
  // var rellax2 = new Rellax('.rellax2',{
  //     wrapper:'.scroll-wrap2'
  // });
  var rellax3 = new Rellax(".rellax3", {
    wrapper: ".scroll-wrap3",
  });
  var rellax4 = new Rellax(".rellax4", {
    wrapper: ".scroll-wrap4",
  });

  //Menu Smooth Scroll
  $(".m-link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        }
      );
    } // End if
  });

  //carousel------
  // $('.ami-carousel').owlCarousel({
  //     items: 5,
  //     loop: true,
  //     margin: 25,
  //     autoplay: true,
  //     autoplayTimeout: 2000,
  //     autoplayHoverPause: true,
  //     nav: true,
  //     dots: false,
  //     navText: ["<img src='images/left.png'>", "<img src='images/right.png'>"],
  //     responsive: {
  //         0: {
  //             items: 2
  //         },
  //         768: {
  //             items: 4
  //         }
  //     }
  // });

  //Fancybox ---------
  $('[data-fancybox="interior"]').fancybox({
    //slide effect- zoom-in-out
    transitionEffect: "slide",
    loop: true,

    buttons: [
      //'slideShow',
      //'share',
      "zoom",
      "fullScreen",
      "close",
      //'download'
    ],
    thumbs: {
      autoStart: false,
    },
  });
  $('[data-fancybox="view"]').fancybox({
    //slide effect- zoom-in-out
    transitionEffect: "slide",
    loop: true,

    buttons: [
      //'slideShow',
      //'share',
      "zoom",
      "fullScreen",
      "close",
      //'download'
    ],
    thumbs: {
      autoStart: false,
    },
  });

  $('[data-fancybox="view360"]').fancybox({
    //slide effect- zoom-in-out
    transitionEffect: "slide",
    loop: true,

    buttons: [
      //'slideShow',
      //'share',
      "zoom",
      "fullScreen",
      "close",
      //'download'
    ],
    thumbs: {
      autoStart: false,
    },
  });

  $(".price-click").click(function () {
    $("#price-modal").modal("show");
    $("#poptitle").html("Price");
  });
  $(".sqft-click").click(function () {
    $("#price-modal").modal("show");
    $("#poptitle").html("Area SQ.FT");
  });
  $(".i-am").click(function () {
    $("#interested").modal("show");
  });
  $(".getin-touch").click(function () {
    $("#interested").modal("show");
  });
  $(".brochure").click(function () {
    //$('#interested').modal('show');
    $("#broucher-modal").modal("show");
  });
  $(".disc-btn").click(function () {
    $("#disclaimer").modal("show");
  });
  $(".floorclick").click(function () {
    $("#broucher-modal").modal("show");
  });
  $(".map-click").click(function () {
    $("#mapPop").modal("show");
  });

  //AOS Initialization
  AOS.init({
    //easing: 'ease-in-out-sine'
    easing: "ease-out-back",
  });

  $("#burger").on("click", function () {
    $(".navigation-type-split .navigation-menu-wrapper .menu-logo ").addClass(
      "mob-logo"
    );
    // $('.navigation-type-split .navigation-menu-wrapper .navigation-overlay .str ').addClass('str-new');
  });

  // $('#burger').on('click', function() {
  //     $('.navigation-type-split .navigation-menu-wrapper .menu-logo ').addClass('mob-logo');
  //     $('.navigation-type-split .navigation-menu-wrapper .navigation-overlay .str ').addClass('str-new');
  // });

  // Mian PopUp
  if (!Get_Cookie("popout")) {
    //console.log($('.popupDiv'));
    $(window).load(function () {
      // var width = $(window).width();
      // if(width >= 767){
      setTimeout(function () {
        if (
          !$("#broucher-modal").is(":visible") &&
          !$("#otpverification-modal").is(":visible")
        ) {
          $("#main-modal").modal("show");
        }
      }, 20000);
      // }
    });
  }
  $(".modal .close").click(function () {
    Set_Cookie("popout", "it works", "", "/", "", "");
  });

  // Jquery Mobile Validation
  jQuery.validator.addMethod(
    "country",
    function (value, element) {
      return this.optional(element) || /^[^+]/.test(value);
    },
    "Enter Number Without Country Code"
  );
  jQuery.validator.addMethod(
    "number",
    function (value, element) {
      return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    },
    "Please enter the number without beginning with '0'"
  );
  jQuery.validator.addMethod(
    "mobile",
    function (value, element) {
      return this.optional(element) || $(element).intlTelInput("isValidNumber");
    },
    "Please enter a valid mobile number"
  );
  jQuery.validator.addMethod(
    "alphabets",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    },
    "Please enter Alphabets only"
  );
  jQuery.validator.addMethod(
    "email",
    function (value, element) {
      return (
        this.optional(element) ||
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        )
      );
    },
    "Please enter a valid email address."
  );
  jQuery.validator.addMethod(
    "valueNotEquals",
    function (value, element, arg) {
      return arg !== value;
    },
    "Value must not equal arg."
  );
  if ($("#enquire-now").length > 0) {
    $("#enquire-now").validate({
      rules: {
        fname: {
          required: true,
          maxlength: 100,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: {
          required: "Enter Your Name",
        },
        mobile: {
          required: "Enter Your Number",
        },
        email: {
          required: "Enter Your Email",
        },
      },
    });
  }
  if ($("#contact-form").length > 0) {
    $("#contact-form").validate({
      rules: {
        fname: {
          required: true,
          maxlength: 100,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: {
          required: "Enter Your Name",
        },
        mobile: {
          required: "Enter Your Number",
        },
        email: {
          required: "Enter Your Email",
        },
      },
    });
  }
  if ($("#price-popup").length > 0) {
    $("#price-popup").validate({
      rules: {
        fname: {
          required: true,
          maxlength: 100,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: {
          required: "Enter Your Name",
        },
        mobile: {
          required: "Enter Your Number",
        },
        email: {
          required: "Enter Your Email",
        },
      },
    });
  }
  if ($("#main-popup").length > 0) {
    $("#main-popup").validate({
      rules: {
        fname: {
          required: true,
          maxlength: 100,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: {
          required: "Enter Your Name",
        },
        mobile: {
          required: "Enter Your Number",
        },
        email: {
          required: "Enter Your Email",
        },
      },
    });
  }
  if ($("#brochure-form").length > 0) {
    $("#brochure-form").validate({
      rules: {
        fname: {
          required: true,
          maxlength: 100,
        },
        mobile: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        fname: {
          required: "Enter Your Name",
        },
        mobile: {
          required: "Enter Your Number",
        },
        email: {
          required: "Enter Your Email",
        },
      },
    });
  }
})(jQuery);
