console.log("O Bot está ativo"); //bot temporizador

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var exec = require('child_process').exec;
var fs = require('fs');

//marcador de tempo de sleep do bot
tweetIt();
setInterval(tweetIt, 1000*32)

function tweetIt() {
	 var cmd = 'processing-java --sketch=`pwd`/pizza --run';﻿
	 exec(cmd, processing);

	 function processing() {
	 	var filename = 'pizza2/pizza-love.gif';
	 	var params = {
	 		encoding: 'base64'
	 	}
		var b64 = fs.readFileSync(filename, params);

		T.post('media/upload', { media_data: b64 }, uploaded);

		function uploaded(err, data, response) {
			var id = data.media_id_string;
			var tweet = {
	 		 status: 'Ei vc homen trabalhador,com fome?Que tal passar na Four Kings e pedir uma maravilhosa piiza,ham ham? ',
	 		 media_ids: [id]
			}
			T.post('statuses/update', tweet, tweeted);

		}
	}

	function tweeted(err, data, response){
	  if (err) {
	    console.log("Algo de errado não esta certo!");
	  } else{
	  console.log("Funfou");
		}
	}
}

