$(document).ready(function () {
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
    pan: true,
    zoom: true,
    // ...or set a class on the element
    excludeClass: 'pin',
    disableYAxis: true,
    disableXAxis: true,
  });

  var zm = new Zoom(document.getElementById('panzoom'), {
    pan: false,
    rotate: false,
    excludeClass: 'pin'
  });

  $(".pin").hover(function () {
    let iPin = $(this).attr("data-index");
    $('[data-index="'+ iPin +'"]').toggleClass('active');
  });
  $(".pin").bind('touchstart touchend', function (){
    let iPin = $(this).attr("data-index");
    $('[data-index="'+ iPin +'"]').toggleClass('active');
  });
  $(".modal input").on("click touchstart", function() {
    $(this).focus();
  });
 
});
