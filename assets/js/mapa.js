function initMap() {

	var insper = {lat:-23.597316,  lng:-46.676536};
	var map = new google.maps.Map(
		document.getElementById('map'), {zoom: 14, center: insper});
	var marker = new google.maps.Marker({position: insper, map: map})
}
