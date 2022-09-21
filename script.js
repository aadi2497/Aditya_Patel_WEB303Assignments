/*
	WEB 303 Assignment 1 - jQuery
	Author: Aditya Patel
	Student ID: - 0751432
*/

$(document).ready(function(){
	
	// Using Change Event for function
	$("input").change(function(){
		let pay = $("#yearly-salary").val();
		let percentage = $("#percent").val();

		let finalpay = (( pay * percentage)/ 100);
		$("#amount").text('$' + finalpay.toFixed(2));
	});
});