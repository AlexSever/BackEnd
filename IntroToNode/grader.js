function average(array) {
	var count = array.length;
	var sum = array.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
 	},0);
 	var avg = Math.round(sum / count);
 	console.log(avg);
}

console.log("Average score for environment science");
var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

console.log("Average score for organic chemistry");
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68