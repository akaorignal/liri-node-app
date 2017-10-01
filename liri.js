//grabs data from keys.js, store the keys in a var
var dataKeys = require("./keys.js");
var fs = require('fs'); //file system
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var request = require('request');
//test
// function testing (){
// console.log(dataKeys)
// };
var theKeys = dataKeys.twitterKeys;
// console.log(dataKeys);
// testing();


//____________twitter_____________________


var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'vLDWTCKbJ0g5vuh3SJOaBu1XJ',
  consumer_secret: '4ZBkXUH1DiV0uM92fQPh4slE7lLDUThLVVaEue1QlhFsWlMk31',
  access_token_key: '914210831079899136-Pd702qXujSY4EyOXKkX4e9cuaxVu0o3',
  access_token_secret: '2g6PEjYfu5fDZ4udLSMOlAVVkF0IX7qjmmrMFfhVCcfv6'
});
 
var params = {screen_name: 'apitest003'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log("Here are the most recent tweets");

            for (var i = 0; i < tweets.length; i++) {

                console.log("_____________________________________________");
                console.log("Tweeted on: " + tweets[i].created_at);
                console.log(tweets[i].text);
  }
}
});


//_____________________spotify_________________-


var Spotify = require('node-spotify-api');
var clientID = '5e7666ea9fe547929d5539e17b85e7b2';
var clientSecret= 'ca22bbc9936f48a2b81dff147972e0c9'; 
var sValue = "ciara";
var scopes = 'user-read-private user-read-email'

var spotify = new Spotify({
  id: clientID,
  secret: clientSecret
});




spotify.search({ type: 'track', query: sValue }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);

  }
 
console.log(data); 
console.log(scopes);
});






/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require('request'); // "Request" library

var clientID = '5e7666ea9fe547929d5539e17b85e7b2';
var clientSecret= 'ca22bbc9936f48a2b81dff147972e0c9'; 

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});





//Liri takes the following arguments
// * my-tweets
// * spotify-this-song
// * movie-this
// * do-what-it-says


//node liri.js my-tweets displays last 20 tweets
//node liri.js spotify-this-song '<song name here>'
	//artist, song name, preview link from spot, album song came from
	//utlize node spotify api package 



