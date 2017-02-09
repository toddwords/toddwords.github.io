var names = "Justin-Brower Krissy-Pelley Erica-Oh Ben-Sheeran Rohil-Bahnsali Jeffrey-Katz Ray-Sosa Brett-Halpern Xander-Kim Dash-Elhaug Raisa-Khan Vishnu-Nair Hannah-Sekondorf Olivia-Kan-Sperlin Emily-Li Natlie-Mahoney Mindy-Ng Jason-Hubert Thomas-Chisholm"
names = names.split(" ")
names = shuffle(names)
console.log(names)


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