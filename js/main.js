$(document).ready(function () {

  if (window.matchMedia("(min-width: 1025px)").matches) {
    $("#panzoom").panzoom({
      $zoomIn: $(".zoom-in"),
      $zoomOut: $(".zoom-out"),
      $zoomRange: $(".zoom-range"),
      minScale: 1,
      maxScale: 2,
      // increment: 4,
      // pan: true,
      contain: 'invert',
      disablePan: false,
      disableZoom: false
    });
  } else {
  var zm = new Zoom(document.getElementById('panzoom'), {
    pan: false,
    rotate: false,
  });
  }



  $(".pin").hover(function () {
    let iPin = $(this).attr("data-index");
    $('[data-index="'+ iPin +'"]').toggleClass('active');
  });

  // $(".pin").on("mouseover", function () {
  //   let iPin = $(this).attr("data-index");
  //   $('[data-index="'+ iPin +'"]').addClass('active');
  // });

  // $(".pin").on("mouseout", function () {
  //   let iPin = $(this).attr("data-index");
  //   $('[data-index="'+ iPin +'"]').removeClass('active');
  // });
});