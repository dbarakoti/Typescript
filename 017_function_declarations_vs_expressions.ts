console.log(fullName('Dipesh', 'Barakoti'));
console.log(otherFullName('Dipesh', 'Barakoti'));
console.log(thirdFullName('Dipesh', 'Barakoti'));


// fuction declaration, hoisting
function fullName(first : string, last : string) : string {
	return first + " " + last;
}


// Function expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last :string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
}


