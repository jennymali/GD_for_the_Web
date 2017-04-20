// replace images when the page loads
$('img#hplogo').removeAttr('srcset')
$('img').attr('src', 'https://img.buzzfeed.com/buzzfeed-static/static/2015-01/13/13/enhanced/webdr06/anigif_enhanced-29634-1421173265-18_preview.gif');
$('img').attr('srcset', 'https://img.buzzfeed.com/buzzfeed-static/static/2015-01/13/13/enhanced/webdr06/anigif_enhanced-29634-1421173265-18_preview.gif');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'!') );
});

// when you click on an image hide it using CSS
//$('img').click(function() {
//	
//});

// when you click on the page 'body' apply .gradient to it from the CSS
//$('#hplogo').addClass('rotate');

$('body').click(function() {
	$(this).toggleClass('gradient');
    $(this).toggleClass('text-change');
});
    



