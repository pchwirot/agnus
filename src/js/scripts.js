/*jshint unused: false, es5: false*/
/*globals $, console */

'use strict';

var navAnimation = function(){
	console.log('hi');

	$('html').mousemove(function(event) {
		var xMod = event.pageX/400000;
		var transformationString = 'matrix3d(1.2, 0, 0, ' + xMod + ', 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)';


		$('.nav ul').css('transform', transformationString);
	});
};

$(function () {
	navAnimation();
});