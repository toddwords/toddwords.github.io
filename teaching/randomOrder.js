var names = ['Deni', 'Margaux', 'Zein', 'Victoria', 'Brea', 'Arcinello', 'Jo', 'Darren', 'Macy', 'Shannon','Liam']
names = shuffle(names);
for (var i = 0; i < names.length; i++) {
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