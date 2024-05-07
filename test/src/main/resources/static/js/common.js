$(function(){
	/* zoom 버튼 */
	base = 100;
	var mybody = $('body');
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this);
		if(zNum == 0){
			base += 10;
		} else if(zNum == 1){
			base = 100;
		} else {
			base -= 10;
		};
		mybody.css('overflow','auto').css('transform-origin','50% 0%').css('transform','scale('+base/100+')').css('zoom',base+'%');
		return false;
	});	
});