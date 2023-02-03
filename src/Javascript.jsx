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
});

function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    $(".mainMenu").toggleClass("active");
    $(".mainMenu a").toggleClass("active");
}

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
