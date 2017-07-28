// function printAddress(street: string, streeTwo: string, state = 'AZ', zip: string {
// 	console.log(street);
// 	if (streetTwo) {
// 	console.log(streetTwo);
// }
// console.log(state);
// }

// printAddress('123 Any st');
// printAddress('123 Any st', 'Suite 5409');
// printAddress('123 Any st', 'Suite 540', 'UT');


function lineupCard(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}

}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');
