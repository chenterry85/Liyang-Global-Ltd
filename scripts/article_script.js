$(function() {
   var thumbnail =  $('.thumbnail');
   var container = $('.viewer-body');
   var close = $('.close');
   var next = $('.next');
   var prev = $('.prev');

   thumbnail.click(function(){
    var content = $(this).html();
    thumbnail.removeClass('open');
    $(this).addClass('open');
    $('body').addClass('view-open');
    $('.w3-top').hide();
    container.html(content);
  });

  next.click(function() {
    var total = $('.media .thumbnail').length;
    if ($('.open').index() === total- 1){
       $('.thumbnail:last-child').addClass('open');
    }
    else{$('.open').removeClass('open').next().toggleClass('open');}
    var content = $('.open').html();
    container.html(content);
  });

  prev.click(function() {
    if ($('.open').index() == 0){$('.thumbnail:first-child').addClass('open');}
    else{ $('.open').removeClass('open').prev().toggleClass('open');}
     var content = $('.open').html();
     container.html(content);
  });

   close.click(function() {
     $('body').removeClass('view-open');
     $('.w3-top').show();
   });

});



$(document).ready(function() {
  // convert markdown to html
  var output = markdown.toHTML( markdown_source );
  document.write(output);
});


// get markdown content
 var body_location = 'test.md';

 function getText(myUrl){
     var result = null;
     $.ajax( { url: myUrl,
               type: 'get',
               dataType: 'html',
               async: false,
               success: function(data) { result = data; }
             }
     );
     FileReady = true;
     return result;
 }

 var markdown_source = getText(body_location);
