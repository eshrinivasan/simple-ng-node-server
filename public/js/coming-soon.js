$(document).ready(function  () {
	init();
});

function init(){
	FlipClock();
}

var clock = $('.your-clock').FlipClock({
	countdown: false,
});

clock.setTime(3600);
