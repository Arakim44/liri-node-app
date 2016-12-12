var twitter = ('./keys.js');

var consumer_key = twitter.twitterKeys.consumer_key;
var consumer_secret = twitter.twitterKeys.consumer_secret;
var token_key = twitter.twitterKeys.access_token_key;
var token_secret = twitter.twitterKeys.access_token_secret;

var action = process.argv[2];
var title = process.argv[3];

switch(action){
  case "my-tweets":
  //This will show your last 20 tweets and when they were created at in your terminal/bash window.
  break;

  case "spotify-this-song":
  //This will show the following information about the song in your terminal/bash window
  //      Artist(s)
  //      The song's name
  //      A preview link of the song from Spotify
  //      The album that the song is from
  //
  //if no song is provided then your program will default to
  //     "The Sign" by Ace of Base
  break;

  case "movie-this":
  // This will output the following information to your terminal/bash window:
  // Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    // * Rotten Tomatoes Rating.
    // * Rotten Tomatoes URL.

  break;

  case "do-what-it-says":
  //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
  // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
  // Feel free to change the text in that document to test out the feature for other commands.
  break;
}


// 
// BONUS
//
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
