console.log("O Bot está ativo");

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');


stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	//var fs = require('fs');
	//var json = JSON.stringify(eventMsg,null,3);
	//fs.writeFile("tweet.json", json);

	var replyto = eventMsg.in_reply_to_screen_name;
	var text = eventMsg.text;
	var from = eventMsg.user.screen_name;

	console.log(replyto + ' ' + from);

	if (replyto === 'PizzaKing_Bot') {
		var newtweet = '.@' + from + ' ' + ',Obrigado por nos contactar,para fazer pedidos você pode entrar em contato conosco pelo messenger por exemplo!!';
		tweetIt(newtweet);
	}

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