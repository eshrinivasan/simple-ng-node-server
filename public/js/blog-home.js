// Javascript start 

$(document).ready(function  () {
	init();
});

// Initialize js
function init(){
	owlCarousel();
}

// OwlCarousel function goes here 

function owlCarousel(){
	$("#owl").owlCarousel({
		items: 1,
		itemsTablet: [1215, 1],
		itemsTabletSmall: [497, 1],
		autoPlay: true,
		responsive: true,
		responsiveRefreshRate:100,
		responsiveBaseWidth: window,
		autoHeight: false,

	});
}
