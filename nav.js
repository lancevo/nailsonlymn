/* 
filename: nav.js
author: lv
client: nailsonlymn.com
description: set style to nav
*/

var currURL = location.href;
var currNavId = "";
if (currURL.indexOf('nail-care')>=0) {
    currNavId = 'm_nailcare';
} else if (currURL.indexOf('reflexology-massage')>=0) {
    currNavId = 'm_reflex';	
} else if (currURL.indexOf('products')>=0) {
    currNavId = 'm_products';	
} else if (currURL.indexOf('esthetician')>=0) {
    currNavId = 'm_esthetician';   
} else if (currURL.indexOf('nail-party')>=0) {
    currNavId = 'm_nailparty';	
} else if (currURL.indexOf('photo-gallery')>=0) {
    currNavId = 'm_photo';	
} else if (currURL.indexOf('contact-us')>=0) {
    currNavId = 'm_contactus';	
} else if (currURL.indexOf('testimonials')>=0) {
    currNavId = 'm_testimonials';  
} else if (currURL.indexOf('foot-and-hand-massage')>=0) {
    currNavId = 'm_fhmassage';	
} else if (currURL.indexOf('price-list')>=0) {
    currNavId = 'm_pricelist';	
} else if (currURL.indexOf('special-offers')>=0) {
    currNavId = 'm_specialoffers';	
}
else {
    currNavId = 'm_home';
}

if (currNavId.length) {
	document.getElementById(currNavId).style.borderBottom="solid 2px #ED1C24";
}