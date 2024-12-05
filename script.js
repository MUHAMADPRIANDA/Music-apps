$('.navbar .nav-tabs a[data-toggle="tab"]').on('show.bs.tab', function (e) {
  $("#panel").collapse('show');
});

$('#panel').on('hide.bs.collapse', function (e) {
  $('.navbar .nav-tabs li.active').removeClass('active');
})


/*
off canvas
*/
var backdrop = $('.modal-backdrop.hidden');
var body = $('body');
$("#bs-example-navbar-collapse-1")
  .on('show.bs.collapse', function () {
    backdrop.removeClass('hidden');
    body.addClass('offcanvas');
  })
  .on('shown.bs.collapse', function () {
    
    backdrop.addClass('in');
    body.addClass('in');
    $('.dropdown-toggle').first().dropdown('close');
    backdrop.on('click', function(){ 
      $("#bs-example-navbar-collapse-1").collapse('hide');
    });
  })
  .on('hide.bs.collapse', function () {
    body.removeClass('in');
    backdrop.removeClass('in');
  })
  .on('hidden.bs.collapse', function () {
    body.removeClass('offcanvas');
    backdrop.addClass('hidden');
  });



$("#panel")
  .on('show.bs.collapse', function () {
    body.addClass('offcanvas-top');
    backdrop.removeClass('hidden');
    
  
    
  })
  .on('shown.bs.collapse', function () {
    body.addClass('in');
    backdrop.addClass('in');
    backdrop.on('click', function(){ 
      target.collapse('hide');
    });
  })
  .on('hide.bs.collapse', function () {
    body.removeClass('in');
    backdrop.removeClass('in')
  })
  .on('hidden.bs.collapse', function () {
    body.removeClass('offcanvas-top');
    backdrop.addClass('hidden');
  });