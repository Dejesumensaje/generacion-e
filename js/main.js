/*$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top + 15
    }, 1000);
    return false;
});*/



     $(document).ready(function() {  
        //Abriendo cada contenido "uno sobre el otro"              
      $(".copen").click(function() {
  
         $(".c").hide();
       //$(".c").fadeOut();
 
         var cid = $(this).data("c");
         //$("#"+cid).show(); 
       $("#"+cid).fadeIn("2000");
  
      });
      
      
 //Menú móvil     
        $('.menu-tab').click(function(){
    $('.menu-hide').toggleClass('show');
    $('.menu-tab').toggleClass('active');
  });
  $('.menu-hide nav ul li a').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });
      
   });

//Acordeón
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('fa-plus fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);