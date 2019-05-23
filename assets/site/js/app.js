jQuery(function($) {
  $("#toBottom").click(function(e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $("#header").height() + $("#rectangle").height() - 20
      },
      200
    );
  });

  function backToTop() {
    // Display "Back to top" button if page height is longer than
    // 700px or twice the browser height
    if ($(document).height() > $(window).height() * 2) {
      if ($(this).scrollTop() > Math.min(700, $(window).height())) {
        $("#backToTop").fadeIn();
        $("#backToTop").css("display", "flex");
      } else {
        $("#backToTop").fadeOut();
      }
    }
  }

  backToTop();

  $("#backToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /*-------------------------------------------------*/
  //Navbar Functions OVERRIDES

  var $window = $(window);
  var $menuAnchor = $("#nav-main-menu .dropdown-toggle");

  function stickyNavBar() {
    var windowWidth = $window.width();
    var alwaysSticky = 769;
    var sctop = window.STICKY_SCROLL_TOP || 768;
    if ($(window).width() < alwaysSticky || $(document).scrollTop() > sctop) {
      $("#navigation").addClass("sticky");
    } else {
      $("#navigation").removeClass("sticky");
    }

    if (windowWidth < 769) {
      if (
        !$("#navigation").hasClass("sticky") ||
        $("#navigation").scrollTop()
      ) {
        $("#navigation").addClass("sticky");
      }
      //Dropdown list
      $(".dropdown-toggle").attr("data-toggle", "dropdown");
      $(".dropdown-toggle").click(function() {
        if ($(this).hasClass("open")) {
          $(this).removeClass("open");
        } else {
          $(this).addClass("open");
        }
      });
    } else {
      if ($("#navbar-collapse-1").hasClass("in")) {
        $("#navbar-collapse-1").removeClass("in");
      }
      $(".dropdown-toggle").attr("data-toggle", "");

      if ($("#navigation").hasClass("sticky")) {
        var navHeight = $("main").length
          ? $("main").offset().top - $("#sticky-nav").outerHeight()
          : $("#app-user-services").offset().top -
            $("#sticky-nav").outerHeight();
        if (window.pageYOffset <= navHeight) {
          $("#navigation").removeClass("sticky");
        }
      } else {
        var navOffset =
          $("#menu-main-menu").offset().top -
          $("#navbar-collapse-1").offset().top;
        if (window.pageYOffset > navOffset) {
          $("#navigation").addClass("sticky");
        }
      }
    }
  }

  function sizeDependentMenuBehaviour() {
    var windowWidth = $(window).width();
    var breakpoint = 0;
    if (windowWidth < breakpoint) {
      $menuAnchor.attr("data-toggle", "dropdown");
    } else {
      $menuAnchor.attr("data-toggle", "");
    }
    if (!window.STICKYNAV_DISABLED) {
      stickyNavBar();
    }
  }

  sizeDependentMenuBehaviour();
  $window.resize(sizeDependentMenuBehaviour);
  $window.scroll(function() {
    if (!window.STICKYNAV_DISABLED) {
      /* Navbar minimization */
      stickyNavBar();
    }

    if (!window.BACKTOTOP_DISABLED) {
      backToTop();
    }
  });

  /*-------------------------------------------------*/
  //Agenda Page Functions
  $(document).ready(function() {
    if (document.getElementById("agenda-page")) {
      $("#schedule-day2").hide();

      var touchEvent = "ontouchstart" in window ? "touchstart" : "click";

      document
        .getElementById("btn-day1")
        .addEventListener(touchEvent, function(e) {
          e.stopPropagation();
          if (!$("#btn-day1").hasClass("active")) {
            $("#btn-day1").toggleClass("active");
            if ($("#btn-day2").hasClass("active")) {
              $("#btn-day2").toggleClass("active");
            }
            $("#schedule-day2").hide("slow");
            $("#schedule-day1").show("slow");
          }
        });

      document
        .getElementById("btn-day2")
        .addEventListener(touchEvent, function(e) {
          e.stopPropagation();
          if (!$("#btn-day2").hasClass("active")) {
            $("#btn-day2").toggleClass("active");
            if ($("#btn-day1").hasClass("active")) {
              $("#btn-day1").toggleClass("active");
            }
            $("#schedule-day1").hide("slow");
            $("#schedule-day2").show("slow");
          }
        });
    }
  });
});
