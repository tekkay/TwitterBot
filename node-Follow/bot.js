console.log("O Bot está ativo");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');


stream.on('follow', followed);

function followed(eventMsg) {
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + ' ' + 'Obrigado por ser mais um de nossos seguidores!! :)');
}

function tweetIt(txt) {

	var tweet = {
	  status: txt
	}

	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response){
	  if (err) {
	    console.log("Algo de errado não esta certo!");
	  } else{
	  console.log("Funfou");
		}
	}
}	