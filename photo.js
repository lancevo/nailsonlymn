/* photo gallery */
function simplePreload()

{ 
  var args = simplePreload.arguments;
  document.imageArray = new Array(args.length);
  for(var i=0; i<args.length; i++)
  {
    document.imageArray[i] = new Image;
    document.imageArray[i].src = args[i];
  }
}

function changeImage(n) {
	var newImage ="";
	switch (n) {
		case 1: newImage = "photogallery/MVC-001F.JPG"; break 
		case 2: newImage = "photogallery/MVC-003F.JPG"; break
		case 3: newImage = "photogallery/MVC-012F.JPG"; break
		case 4: newImage = "photogallery/MVC-016F.JPG"; break
		case 5: newImage = "photogallery/MVC-017F.JPG"; break
		case 6: newImage = "photogallery/MVC-008F.JPG"; break

	}
	
	document.getElementById('photo').src= newImage;
}




