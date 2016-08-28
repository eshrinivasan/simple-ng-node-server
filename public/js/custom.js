$(document).ready(function() {

         var i = 0,
         delay = 2000,
         animate = 400;
         function animateList(){
                 var imax = $("ul#list li").length -1;
                
                 $("ul#list li:eq(" + i + ")")
                         .animate({"fontSize" : "40px"}, animate)
                         .animate({"fontSize" : "40px"}, delay)
                         .animate({"fontSize" : "30px"}, animate, function(){
                             
                                 (i == imax) ? i=0 : i++;
                                 animateList();
                         });
                                     
                 };
                 
       animateList();           
});


$(document).ready(function  () {
    // $('.bxslider').bxSlider();
    // $('#container').isotope();   
});

$(document).ready(function  () {
    init();
});
function init(){
    wow();
    owlCarousel();
   
}

function owlCarousel(){
    $("#owl").owlCarousel({
        items: 1,
        itemsTablet: [1215, 1],
        itemsTabletSmall: [497, 1],
        autoPlay: true,
        responsive: true,
        responsiveRefreshRate:100,
        responsiveBaseWidth: window,
        autoHeight: false,

    });
    $("#owl1").owlCarousel({
     items: 1,
     itemsTablet: [1215, 1],
     itemsTabletSmall: [497, 1],
     autoPlay: true,
     responsive: true,
     responsiveRefreshRate:100,
     responsiveBaseWidth: window,
     autoHeight: false,

    });
}
    
function wow(){
    new WOW().init();
}