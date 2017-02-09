var grammarObj = {
    "name": ["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina"],
    "animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"],
    "mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
    "story": ["#hero# traveled with her pet #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
    "origin": ["#[hero:#name#][heroPet:#animal#]story#"]
}
var grammar = tracery.createGrammar(grammarObj)
Mousetrap.bind('k', function(){
	var t = grammar.flatten("#origin#");
	$('h1').text(t)
	console.log(t);
})