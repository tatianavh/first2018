$(function(){

	$('#accordion>div').on('click',function(){
		//close all others which are not clicked
		$('#accordion>div').not(this).removeClass('open');
		$('#accordion>div').not(this).data('state','close');

		//open or close the clicked item
		var sState = $(this).data('state');
		if(sState == 'close'){
			//open it
			$(this).addClass('open');
			$(this).data('state','open');

		}else{
			//close it
			$(this).removeClass('open');
			$(this).data('state','close');
		}
	});

});