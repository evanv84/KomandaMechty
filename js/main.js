$(document).ready(function() {
	
	//Team carousel
	$(".team--fotos").owlCarousel({
 
      loop:true,
      margin:20,
      nav:true,
      dots: false,
      navText: ["<img src='../img/arrow-left.png' class='prev'>","<img src='../img/arrow-right.png' class='next'>"],
      stagePadding: 0,
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:true,
      autoplaySpeed: 1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
 
  	});

  	//Team carousel
	$("#clients-logo").owlCarousel({
 
      loop:true,
      margin:20,
      nav:false,
      dots: false,
      stagePadding: 0,
      autoplay:true,
      autoplayTimeout:3500,
      autoplayHoverPause:false,
      autoplaySpeed: 1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
 
  	});


  	var acc = $('.faq-content h4');
	var i;

	for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}

  $("a.portfolio-img").fancybox();

  $("a.celeb-gallery").fancybox();

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

   $("[data-tab='tab-2']").on("click", function() {
     $("#tab-2").load("projects.html", function(response, status, xhr) {
         $("img.lazy-2").lazyload();
     });              
 });

   $("[data-tab='tab-3']").on("click", function() {
     $("#tab-3").load("work.html", function(response, status, xhr) {
         $("img.lazy-3").lazyload();
     });              
 });

   $("[data-tab='tab-4']").on("click", function() {
     $("#tab-4").load("wedding.html", function(response, status, xhr) {
         $("img.lazy-4").lazyload();
     });              
 });

   $("[data-tab='tab-5']").on("click", function() {
     $("#tab-5").load("session.html", function(response, status, xhr) {
         $("img.lazy-5").lazyload();
     });              
 });

   $("[data-tab='tab-6']").on("click", function() {
     $("#tab-6").load("show.html", function(response, status, xhr) {
         $("img.lazy-6").lazyload();
     });              
 });

});