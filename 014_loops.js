// var x : number = 0;
// While (x < 10) {
// 	console.log(x);
// 	x++
// }
var players = [3, 10, 4, 5, 1];
// for in
console.log("For/in");
for (var player in players) {
    console.log(player);
}
//for of 
console.log("For/of");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
//# sourceMappingURL=014_loops.js.map