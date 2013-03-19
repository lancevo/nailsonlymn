
var vRotator = {
	images: new Array(),
	curImage:0, // Current Image Posiition
	totalImages:0, 
	
	init: function(el, speed) {	
		this.images = $(el + " img");		
		this.totalImages = this.images.length;
		// hide all images except the first one
		for (var i=1; i<this.totalImages; i++) 
			$(this.images[i]).hide();
		setInterval(function(){vRotator.show()}, speed);
	},
	show: function() {
		$(this.images[this.curImage++]).fadeOut("slow");
		if (this.curImage == this.totalImages) 
			this.curImage = 0;		
		$(this.images[this.curImage]).fadeIn("slow");	
	}
}

$(document).ready( function() {
	vRotator.init(".rotator", 3000);
	});