$(document).ready(function () {

	let place_template = _.template($("#place_template").html()),
		option_template = _.template($("#select_template").html());

	_.each(data, function (place) {
		$("#character").append(option_template({ county: place.county }));
	});

	$('#enter').on("click", function (e) {
		e.PreventDefault();
		places_name = $("#character").val();
		result = _.find(data, { county: places_name });

		console.log(result);

		$("#info").html(place_template({ place: result }));


	});
});