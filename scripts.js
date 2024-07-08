  $(document).ready(function() {
    $('#banner .news_item').each(function() {
		$(this).find("h5,.leader, .msl_news_org").wrapAll('<div class="news-content"><div class="text-container"></div></div>');
	    $(this).find(".news-content").insertAfter($(this).find(".news_image"));
	});
	
	$('#banner .msl-item').each(function() {
		$(this).find(".msl-organisation, .msl-title, .msl-leader").wrapAll('<div class="news-content"><div class="text-container"></div></div>');
	    $(this).find(".news-content").insertAfter($(this).find(".msl-image"));
	});
	$('#banner .msl-item .news-content').each(function() {
	    $(this).find(".msl-organisation").insertBefore($(this).find(".msl-title"));
	});
	
	
	$('#banner .news_all, #banner .killfloat').remove();
	
	$('#banner .msl-item').each(function() {
		link = $(this).find('a').attr('href');
		leader = $(this).find('.msl-leader');
		leaderText = leader.text();
		readMore = 'More';
			$(this).find('.msl-leader').after('<a aria-label="View more" class="cta" href="' + link + '">' + readMore + '</a>');
	});
	
	$('#banner > div').slick({
		dots: true,
		arrows: true,
		infinite: true,
		fade:true,
		adaptiveHeight: true,
		autoplay: false,
		speed: 200
	});
	
	//Get Involved CTA
	$('.ql ul li').each(function() {
		link = $(this).find('a').attr('href');
		title = $(this).find('.msl-imagenav-title');
		qlText = title.text();
		readMore = 'View';
			$(this).find('.msl-imagenav-page').after('<a aria-label="View more" class="cta" href="' + link + '">' + readMore + ' ' + qlText + '</a>');
	});
	//Officer details
	  $('.officer-nav ul li ').each(function() {
		$(this).find(".msl-imagenav-title,.msl-imagenav-description").wrapAll('<div class="title-container"></div>');
		$(this).find(".title-container").insertAfter($(this).find(".msl-imagenav-image"));
		$(this).find(".cta").appendTo($(this).find(".title-container"));
    });
    $('.officer-nav ul li .title-container ').each(function() {
		$(this).find(".msl-imagenav-description").insertBefore($(this).find(".msl-imagenav-title"));
    });
	
	
  

});



