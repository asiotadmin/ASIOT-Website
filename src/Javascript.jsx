import $ from 'jquery';
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $("#gotop").fadeIn();
      $("#top-btn").click(function () {
        $(window).scrollTop(0);
      });
    }
    else {
      $("#gotop").fadeOut();
    }
  });

  $('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');

  $("#menu-icon").on("click", function () {
    $("nav").slideToggle();
    $(this).toggleClass("active");
  });

  // accordian

  const accordionBtns = document.querySelectorAll(".accordion");
  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.classList.toggle("is-open");

      let content = this.nextElementSibling;
      console.log(content);

      if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
      } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
      }
    };
  });
});


//scroll effect

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      $('.wcu-list').addClass('wcu-lists')
      if ($('.why-choose-us .reveal').hasClass('active')) {
        $('.wcu-list').addClass('wcu-lists2');
      }
      else {
        $('.wcu-list').removeClass('wcu-lists2');
      }
    }
    else {
      reveals[i].classList.remove("active");
      $('.wcu-list').removeClass('wcu-lists')
      $('.about-us .wcu-list').removeClass('wcu-lists2')

    }
  }
}

window.addEventListener("scroll", reveal);


