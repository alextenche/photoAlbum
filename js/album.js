// "use strict";

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
    var test = "alex"

    // original
    $('.gallery_preview').html('<a href="' + photo_fullsize + '" title="' + photo_caption + '" style="background-image:url(' + photo_preview + ');"><img src="'+ photo_preview+'"/></a>');

    // $('.gallery_alex').html('<a href="' + test + '" style="background-image:url('+photo_fullsize+')">Upload</a>');
    // $('.gallery_preview').html('<a href="' + test + '" style="background-image:url('+photo_fullsize+')"><img src="'+photo_preview+'"/></a>');
    // $('.gallery_caption').html('<p>'+test+'</p>');
    // $(".gallery_alex").html("<a href='" + test + "'></a>");
    // $('.gallery_preview').html('<a href="' + photo_fullsize + '" title="' + photo_caption + '" style="background-image:url(' + photo_preview + ')">');

    // console.log(check);
  });


});
