var names = ['Jasper (beimj)', 'Brian', 'Jo', 'Isabelle', 'Madison', 'Luke (ornil)', 'Evan', 'Danielle (gautd)', 'Alex (gesca)', 'Anastasiya', 'Olivija (liepo)', 'Alice (quina)', 'Lilah']
var teamNames = ["Blue Barracudas", "Orange Iguanas", "Purple Parrots", "Silver Snakes"]
names = shuffle(names);
for (var i = 0; i < names.length; i++) {
	if(i % 3 == 0 && teamNames.length > 0){console.log("");console.log(teamNames.shift());console.log("---");console.log("")}
  console.log(names[i])
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}