$(document).ready(() => $(".email").click(() => {
	let email_header = $(".email").text()
	$("#inbox").html(`<h1>${email_header}</h1>\n<h2>by Anonymous</h2>\n
		<iframe 
			class="embed-map"
			width="500"
			height="500"
			frameborder="0"
			style="border:0"
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps/embed/v1/directions?
			key=AIzaSyArHs9gjksI18YfG77Hv5DEG_v4bc3OHG0
			&origin=Daclan+Private+Road,+Punta+Princessa,+Cebu+City
			&destination=Don+Bosco+Technical+College+Cebu+Inc."></iframe>`
)}))
