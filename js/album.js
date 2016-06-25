"use strict";

$(document).ready(function(){
  $('.gallery_thumbnails a').click(function(event){
    event.preventDefault();

    $('.gallery_thumbnails a').removeClass('selected');
    $('.gallery_thumbnails a').children().css('opacity', '1');
    $(this).addClass('selected');
    $(this).children().css('opacity', '.4');

    var photo_caption = $(this).attr('title');
    var photo_fullsize = $(this).attr('href');
    var photo_preview = photo_fullsize.replace('_fullsize', '_preview');

    $('.gallery_caption').slideUp(500);
    $('.gallery_preview').fadeOut(500, function(){

      $('.gallery_preload_area').html('<img src="' + photo_preview + '"/>');
      $('.gallery_preload_area img').imgpreload(function(){
        $('.gallery_preview').html('<a href="' + photo_fullsize + '" title="' + photo_caption + '" style="background-image:url(' + photo_preview + ');"><img src="'+ photo_preview+'"/></a>');
        $('.gallery_caption').html('<p><a href="'+photo_fullsize+'" title="'+photo_caption+'">view larger</a></p><p>'+photo_caption+'</p>');
        $('.gallery_preview').fadeIn(500);
        $('.gallery_caption').slideDown(500);
      });

    });


  });


});
