var tracery = require('tracery-grammar')
var Twit = require('twit')
var T = new Twit({
  consumer_key:         'wvtSnu5ggH7sSMYSJYknhdu2i',
  consumer_secret:      'QKmTb7Mpv5a6m9EwSXAXwspHN2BE8N3wuMq4ovsL1D7O17vLOJ',
  access_token:         '742038889846673408-bN7DuJGszTpvv7Eg71aowiIPLvLuQPe',
  access_token_secret:  'eBpTJNFA8tjQzs0kLo3rccgIioqAgGIHDxovKlKFt4Jm8',
  timeout_ms:           60*1000,  
})
var grammarObj = {
	"S": ["#Billionaire# #Destroys# #Publication# #Prep# #Reason#"],
	"Billionaire": ["Peter Thiel", "Mark Zuckerberg", "Elon Musk", "Sergey Brin", "Bill Gates", "Eric Schmidt","Larry Ellison", "Paul Graham", "Larry Page", "Dustin Moskovitz", "Jay Koum", "David Duffield", "Michael Bloomberg", "Tim Cook", "Jeff Bezos", "David Koch", "Jim Walton", "Steve Ballmer", "Donald Trump", "Mark Cuban"],
	"Destroys": ["bankrupts", "financially ruins", "anonymously funds legal action against", "sues", "suppresses writing by", "defunds", "attempts to #Verb#", "attempts to #Verb#", "attempts to #Verb#"],
	"Verb": ["silence", "defund", "bankrupt", "destroy", "suppress writing by", "smother", "ruin", "take down"],
	"Publication": ["Gawker","New York Times","Us Weekly","The Wall Street Journal", "Highlights Magazine", "Car and Driver", "Vogue", "The New Yorker", "TMZ", "The New Republic", "Techcrunch","Politico","Time Magazine","Sports Illustrated", "Playboy", "Men's Health", "Cosmopolitan", "GQ", "Harper's", "Lapham's Quarterly", "Mother Jones", "Jacobin", "The Guardian", "USA Today", "Buzzfeed", "The Intercept", "Vice", "Washington Post", "The Onion", "Rookie Magazine"],
	"Prep": ["because of", "over", "because of long-simmering resentment over", "in reaction to", "in retaliation over", "as revenge for", "in anger over", "to get even over", "in hysterical rage over"],
	"Reason": ["spilled Lime-A-Rita", "#Diff# yacht directions", "misleading stock tip", "leaked jorts photo", "bad chili dog recommendation", "#Diff# crossword puzzle", "difficult-to-use VR story", "unfunny comic strip", "mean comment on website from user #USERNAME#", "disappointing weather forecast", "condescending Rogaine ad", "documentary on novelty Poke'mon condoms", "leaked rare insect sex tape", "negative coverage of his #PROJECTZ#", "negative review of his #PROJECTZ#"],
	"Diff" : ["confusing", "hard", "difficult", "challenging", "sloppy"],
	"USERNAME" : ["DarknEvil666", "The0neTrueR0y", "MagicNutsack", "M1necraft0r94", "TonyRomoFan68", "GunsRPpl2", "xXxYourMomxXx "],
	"PROJECTZ": ["high-stakes fashion reality show", "SHOWZ performance", "self-directed mumblecore film", "solo electonic music project", "Star Wars memorabilia collection", "inaugural foot modeling photoshoot", "post-impressionist painting of Rand Paul", "Literotica.com submissions", "embarrassing fursona", "glass harp rendition of I Will Survive"],
	"SHOWZ" : ["American Ninja Warrior", "Dancing with the Stars", "Celebrity Chopped", "Deal or No Deal"]
}
var grammar = tracery.createGrammar(grammarObj)
function generate(){
	var t = grammar.flatten("#S#");
	T.post('statuses/update', { status: t }, function(err, data, response) {
  		console.log(t)
	})
}
setInterval(generate, 20000)