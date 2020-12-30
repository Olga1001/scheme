$(document).ready(function () {


  if (window.matchMedia("(min-width: 1025px)").matches) {
    var $pz = $("#panzoom");

    $pz.panzoom({
      $zoomIn: $(".zoom-in"),
      $zoomOut: $(".zoom-out"),
      $zoomRange: $(".zoom-range"),
      minScale: 1,
      maxScale: 2,
      // increment: 4,
      // pan: true,
      contain: 'invert',
      // pan: true,
      // zoom: true,
      // ...or set a class on the element
      // excludeClass: 'pin',
      // disableYAxis: true,
      // disableXAxis: true,
    });
  
  } else {
    var zm = new Zoom(document.getElementById('panzoom'), {
      pan: false,
      rotate: false,
      excludeClass: 'pin'
    });
   
  }

  // modals desktop
  $(".pin").hover(function () {
    let iPin = $(this).attr("data-index");
    console.log(iPin);
    $('[data-index-modal="'+ iPin +'"]').toggleClass('active');
  });

  //modalsmobie
  $(".pin").bind('touchstart', function (e){
    e.stopPropagation();
    let iPin = $(this).attr("data-index");
    $('[data-index-modal="'+ iPin +'"]').addClass('active');
  });
  $(".pin").bind('touchend ', function (e){
    e.stopPropagation();
    let iPin = $(this).attr("data-index");
    $('[data-index-modal="'+ iPin +'"]').removeClass('active');
  });

  // modal count mobile
  $(".modal_list-item").bind('touchstart', function (e){
    e.stopPropagation();
    $(this).find(".modal_count").addClass('active');
  });
  $(".modal_list-item").bind('touchend ', function (e){
    e.stopPropagation();
    $(this).find(".modal_count").removeClass('active');
  });

  $(".modal_count input").on("click", function() {
    $(this).focus();
  });

  $(".modal_count input").on("touchstart touchend", function(e) {
    e.stopPropagation();
    // $(this).focus();
  });
  
});
