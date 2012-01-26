$(function(){
	if(!document.location.href.match(/^https:\/\/github.com\/\w+\/\w+\/?$/i)) return;
	shortened_url_length = 21;
	description = $("#repository_description p").children().remove().end().text().trim();
	title = $('.title-actions-bar strong').text();
	url = $('#slider .breadcrumb a').eq(0).attr('href');

	if(title.length + description.length > 117)
		description = description.substr(0, 117 - title.length - 2) + '…';

	tweet = title + ": " + description + " https://github.com" + url;
	link = $('<a class="minibutton btn-fork" rel="nofollow" target="_blank"><span><span class="icon"></span>Tweet</span></a>');
	link.attr('href', "http://twitter.com/home?status=" + encodeURI(tweet));
	$(".icon", link).css({
		width: "17px",
		background: "url(\"https://platform.twitter.com/widgets/images/btn.c5bcc9de085c51bf889f6a8f33128be2.png\") 0 -14px no-repeat !important"
	});
	$('.pagehead-actions').prepend($('<li />').append(link));

});
