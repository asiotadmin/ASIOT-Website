import $ from 'jquery';
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 500) {
            $("#gotop").fadeIn();
            $("#top-btn").click(function(){
                $(window).scrollTop(0);
            });
         }
         else {
             $("#gotop").fadeOut();
         }    
    });



	$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});






const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const textArray = ["Streamline Marketing and Sales Automation Through ERPNext", "Streamline Marketing and Sales Automation Through DevOps", "Streamline Marketing and Sales Automation Through Frappe"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
  if (charIndex > 0) {
    cursor.classList.remove('blink');
    typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    cursor.classList.add('blink');
    textArrayIndex++;
    if (textArrayIndex > textArray.length - 1) {
      textArrayIndex = 0;
    }
    setTimeout(type, 1000);
  }
}

const type = () => {
  if (charIndex <= textArray[textArrayIndex].length - 1) {
    cursor.classList.remove('blink');
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    cursor.classList.add('blink');
    setTimeout(erase, 1000);
  }
}

  type();

});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            $('.wcu-list').addClass('wcu-lists')
            if ($('.why-choose-us .reveal').hasClass('active')){
                $('.wcu-list').addClass('wcu-lists2');
            }
            else{
                $('.wcu-list').removeClass('wcu-lists2');
            }
        } 
        else 
        {
            reveals[i].classList.remove("active");
            $('.wcu-list').removeClass('wcu-lists')
            $('.about-us .wcu-list').removeClass('wcu-lists2')

        }
    }
}

window.addEventListener("scroll", reveal);	




