(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/pasted-image-256.png' : 'images/pasted-image-128.png');
$('.js-2').attr('src', (dpi>1) ? 'images/pasted-image-132.png' : 'images/pasted-image-66.png');
$('.js-3').attr('src', (dpi>1) ? 'images/pasted-image-108.png' : 'images/pasted-image-54.png');
$('.js-4').attr('src', (dpi>1) ? 'images/pasted-image-100.png' : 'images/pasted-image-50.png');
$('.js-5').attr('src', (dpi>1) ? 'images/pasted-image-494.png' : 'images/pasted-image-247.png');
$('.js-6').attr('src', (dpi>1) ? 'images/pasted-image-198.png' : 'images/pasted-image-99.png');
$('.js-7').attr('src', (dpi>1) ? 'images/desktop-1920.png' : 'images/desktop-960.png');
$('.js-8').attr('src', (dpi>1) ? 'images/pasted-image-782.png' : 'images/pasted-image-391.png');











$('.js-20').attr('src', (dpi>1) ? 'images/2007jie-yi-shu-she-ji-xi-620.jpg' : 'images/2007jie-yi-shu-she-ji-xi-310.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/2008jie-bi-ye-sheng-he-ying-598.jpg' : 'images/2008jie-bi-ye-sheng-he-ying-299.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/2009jie-bi-ye-sheng-he-ying-614.jpg' : 'images/2009jie-bi-ye-sheng-he-ying-307.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/2010yi-she-620.jpg' : 'images/2010yi-she-310.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/2011jie-yi-she-620.jpg' : 'images/2011jie-yi-she-310.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/2011jie-dong-hua-620.jpg' : 'images/2011jie-dong-hua-310.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/2012jie-yi-she-582.jpg' : 'images/2012jie-yi-she-291.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/2012jie-dong-hua-608.jpg' : 'images/2012jie-dong-hua-304.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/2013jie-yi-she-590.jpg' : 'images/2013jie-yi-she-295.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/2013jie-dong-hua-620.jpg' : 'images/2013jie-dong-hua-310.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/2014jie-yi-she-620.jpg' : 'images/2014jie-yi-she-310.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/2014jie-dong-hua-600.jpg' : 'images/2014jie-dong-hua-300.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/2015jie-yi-she-620.jpg' : 'images/2015jie-yi-she-310.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/2015jie-dong-hua-608.jpg' : 'images/2015jie-dong-hua-304.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/2016jie-yi-shu-she-ji-620.jpg' : 'images/2016jie-yi-shu-she-ji-310.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/2016jie-dong-hua-620.jpg' : 'images/2016jie-dong-hua-310.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/2017jie-shi-jue-chuan-da-zhuan-ye-594.jpg' : 'images/2017jie-shi-jue-chuan-da-zhuan-ye-297.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/2017jie-huan-jing-she-ji-zhuan-ye-620.jpg' : 'images/2017jie-huan-jing-she-ji-zhuan-ye-310.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/2017jie-dong-hua-zhuan-ye-618.jpg' : 'images/2017jie-dong-hua-zhuan-ye-309.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/2017jie-chan-pin-she-ji-zhuan-ye-600.jpg' : 'images/2017jie-chan-pin-she-ji-zhuan-ye-300.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/2018jie-shi-jue-chuan-da-he-zhao-564.jpg' : 'images/2018jie-shi-jue-chuan-da-he-zhao-282.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/2018jie-huan-jing-she-ji-he-zhao-620.jpg' : 'images/2018jie-huan-jing-she-ji-he-zhao-310.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/2018jie-dong-hua-he-zhao-610.jpg' : 'images/2018jie-dong-hua-he-zhao-305.jpg');
$('.js-43').attr('src', (dpi>1) ? 'images/2018jie-chan-pin-he-zhao-618.jpg' : 'images/2018jie-chan-pin-he-zhao-309.jpg');
};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-45').mouseenter(function() { $.loadImages('images/2007jie-yi-shu-she-ji-xi-2272.jpg', function() { }) });
$('.js-45').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-45-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2007jie-yi-shu-she-ji-xi-2272.jpg'; } } });
$('.js-46').mouseenter(function() { $.loadImages('images/2008jie-bi-ye-sheng-he-ying-1000.jpg', function() { }) });
$('.js-46').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-46-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2008jie-bi-ye-sheng-he-ying-1000.jpg'; } } });
$('.js-47').mouseenter(function() { $.loadImages('images/2009jie-bi-ye-sheng-he-ying-1296.jpg', function() { }) });
$('.js-47').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-47-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2009jie-bi-ye-sheng-he-ying-1296.jpg'; } } });
$('.js-48').mouseenter(function() { $.loadImages('images/2010yi-she-1584.jpg', function() { }) });
$('.js-48').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-48-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2010yi-she-1584.jpg'; } } });
$('.js-49').mouseenter(function() { $.loadImages('images/2011jie-yi-she-1584.jpg', function() { }) });
$('.js-49').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-49-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2011jie-yi-she-1584.jpg'; } } });
$('.js-50').mouseenter(function() { $.loadImages('images/2011jie-dong-hua-1296.jpg', function() { }) });
$('.js-50').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-50-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2011jie-dong-hua-1296.jpg'; } } });
$('.js-51').mouseenter(function() { $.loadImages('images/2012jie-yi-she-1584.jpg', function() { }) });
$('.js-51').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-51-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2012jie-yi-she-1584.jpg'; } } });
$('.js-52').mouseenter(function() { $.loadImages('images/2012jie-dong-hua-1296.jpg', function() { }) });
$('.js-52').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-52-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2012jie-dong-hua-1296.jpg'; } } });
$('.js-53').mouseenter(function() { $.loadImages('images/2013jie-yi-she-1584.jpg', function() { }) });
$('.js-53').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-53-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2013jie-yi-she-1584.jpg'; } } });
$('.js-54').mouseenter(function() { $.loadImages('images/2013jie-dong-hua-1296.jpg', function() { }) });
$('.js-54').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-54-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2013jie-dong-hua-1296.jpg'; } } });
$('.js-55').mouseenter(function() { $.loadImages('images/2014jie-yi-she-1701.jpg', function() { }) });
$('.js-55').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-55-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2014jie-yi-she-1701.jpg'; } } });
$('.js-56').mouseenter(function() { $.loadImages('images/2014jie-dong-hua-1191.jpg', function() { }) });
$('.js-56').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-56-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2014jie-dong-hua-1191.jpg'; } } });
$('.js-57').mouseenter(function() { $.loadImages('images/2015jie-yi-she-1701.jpg', function() { }) });
$('.js-57').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-57-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2015jie-yi-she-1701.jpg'; } } });
$('.js-58').mouseenter(function() { $.loadImages('images/2015jie-dong-hua-1176.jpg', function() { }) });
$('.js-58').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-58-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2015jie-dong-hua-1176.jpg'; } } });
$('.js-59').mouseenter(function() { $.loadImages('images/2016jie-yi-shu-she-ji-1984.jpg', function() { }) });
$('.js-59').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-59-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2016jie-yi-shu-she-ji-1984.jpg'; } } });
$('.js-60').mouseenter(function() { $.loadImages('images/2016jie-dong-hua-1162.jpg', function() { }) });
$('.js-60').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-60-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2016jie-dong-hua-1162.jpg'; } } });
$('.js-61').mouseenter(function() { $.loadImages('images/2017jie-shi-jue-chuan-da-zhuan-ye-2000.jpg', function() { }) });
$('.js-61').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-61-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-shi-jue-chuan-da-zhuan-ye-2000.jpg'; } } });
$('.js-62').mouseenter(function() { $.loadImages('images/2017jie-huan-jing-she-ji-zhuan-ye-2000.jpg', function() { }) });
$('.js-62').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-62-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-huan-jing-she-ji-zhuan-ye-2000.jpg'; } } });
$('.js-63').mouseenter(function() { $.loadImages('images/2017jie-dong-hua-zhuan-ye-1151.jpg', function() { }) });
$('.js-63').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-63-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-dong-hua-zhuan-ye-1151.jpg'; } } });
$('.js-64').mouseenter(function() { $.loadImages('images/2017jie-chan-pin-she-ji-zhuan-ye-1151.jpg', function() { }) });
$('.js-64').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-64-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2017jie-chan-pin-she-ji-zhuan-ye-1151.jpg'; } } });
$('.js-65').mouseenter(function() { $.loadImages('images/2018jie-shi-jue-chuan-da-he-zhao-2000.jpg', function() { }) });
$('.js-65').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-65-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-shi-jue-chuan-da-he-zhao-2000.jpg'; } } });
$('.js-66').mouseenter(function() { $.loadImages('images/2018jie-huan-jing-she-ji-he-zhao-2000.jpg', function() { }) });
$('.js-66').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-66-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-huan-jing-she-ji-he-zhao-2000.jpg'; } } });
$('.js-67').mouseenter(function() { $.loadImages('images/2018jie-dong-hua-he-zhao-2000.jpg', function() { }) });
$('.js-67').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-67-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-dong-hua-he-zhao-2000.jpg'; } } });
$('.js-68').mouseenter(function() { $.loadImages('images/2018jie-chan-pin-he-zhao-2000.jpg', function() { }) });
$('.js-68').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-68-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2018jie-chan-pin-he-zhao-2000.jpg'; } } });

});