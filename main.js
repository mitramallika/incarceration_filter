$(document).ready(function () {

	let county_template = _.template($("#county_template").html());
	option_template = _.template($("#select_template").html());

	_.each(data, function (county) {
		$("#county").append(option_template({ name: county.name }));
	});

	$('#enter').on("click", function (e) {
		e.PreventDefault();
		countys_name = $("#name").val();
		result = _.find(data, { name: countys_name });




	});
});