var names = "Justin-Brower Krissy-Pelley Ben-Sheeran Jeffrey-Katz Ray-Sosseh Raisa-Khan Thomas-Chisholm Will-Van-Zandt Amanda-Morton Andrew-Buccellato Ben-Navetta Claribel-Wu Emmett-Askira Louis-Wei Merdith-Morran Rachel-Tandon Sophie-Houser"
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