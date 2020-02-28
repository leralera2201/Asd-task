
$(document).ready(function() {
   $('.btn_square').on('click', function() {
   		if ($('.shop__inner').hasClass('shop__inner_flex') == false) {
   			$('.shop__inner').addClass('shop__inner_flex ');
   			$('.button').addClass('shop__button');
   			$('.shop__item-flex').addClass('shop__item').removeClass('shop__item-flex');;
   			$('.shop__item_description').removeClass('shop__item_padding');
   		}
   		
   });
    $('.btn_row').on('click', function() {
    	if ($('.shop__inner').hasClass('shop__inner_flex')) {
   			$('.shop__inner').removeClass('shop__inner_flex');
   			$('.button').removeClass('shop__button');
   			$('.shop__item').addClass('shop__item-flex')	.removeClass('shop__item');;
   			$('.shop__item_description').addClass('shop__item_padding');
    	}
   });
});