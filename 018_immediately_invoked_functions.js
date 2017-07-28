// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('dipesh', 'barakoti'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Sammer', "barakoti");
//# sourceMappingURL=018_immediately_invoked_functions.js.map