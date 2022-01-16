(function ($) {
  "use strict";
  var menuToggler = $(".menu_toggler"),
    offsetMenu = $(".offset_menu"),
    menuQuit = $(".cross");
  menuToggler.on("click", function (e) {
    e.preventDefault();
    offsetMenu.addClass("visible");
  });
  menuQuit.on("click", function () {
    offsetMenu.removeClass("visible");
  });

  // Mix js
  var containerEl = document.querySelector("#project_mix");
  //    var mixer = mixitup(containerEl);
  var mixer = mixitup(containerEl, {
    selectors: {
      target: ".mix",
    },
    animation: {
      effects: "fade",
      duration: 700,
    },
  });

  //message js

  var pauseBtn = $(".sound_toggle_btn"),
    playing = false;
  pauseBtn.on("click", function () {
    $(this).children("span").toggleClass("fa fa-times fa fa-clone");
  });

  //Service slick js

  $(".service_slic").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left slidprev4"></i>',
    nextArrow: '<i class="fa fa-chevron-right slidNext4"></i>',
    autoplaySpeed: 1300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //testimonial slick js

  $(".testimonial_slick").slick({
    centerPadding: "0px",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: '<i class="fa fa-long-arrow-right slidPrev3"></i>',
    nextArrow: '<i class="fa fa-long-arrow-left slidNext3"></i>',
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(document).ready(function () {
    // Add scrollspy to <body>
    $("body").scrollspy({
      target: ".nav_area",
      offset: 50,
    });
    $("#navbar-example a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          1000,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-132188557-1");
  });

  // newsletter

  $(window).load(function () {
    setTimeout(function () {
      $("#enquirypopup").modal("show");
    }, 100);
  });
  //Preloader
  //TODO: Implement this in jsx
  $(window).load(function () {
    $("#preloader").fadeOut(1000);
  });

  // bottom to top

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      // If page is scrolled more than 50px
      $("#top_to").fadeIn(500); // Fade in the arrow
    } else {
      $("#top_to").fadeOut(300); // Else fade out the arrow
    }
  });
  $("#top_to").click(function () {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0, // Scroll to top of body
      },
      1200
    );
  });

  $("#contactform").submit(function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;
    $.ajax({
      type: "post",
      url: "mail.php",
      data: {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
      },
      cache: false,
      success: function (html) {
        alert(html);
        $("#name").val("");
        $("#email").val("");
        $("#mobile").val("");
        $("#message").val("");
      },
    });
    return false;
  });

  // feature design hover js ends
})(jQuery);
