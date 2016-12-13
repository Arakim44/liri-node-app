var twitter = require('./keys.js');

var keys = twitter.twitterKeys;

var action = process.argv[2];
var title = process.argv[3];

switch(action){
  case "my-tweets":
  console.log(keys);
  //This will show your last 20 tweets and when they were created at in your terminal/bash window.
  break;

  case "spotify-this-song":
  console.log("spotify-this-song",title);
  if ( === undeflined){
    console.log("The sign by Ace of Base")
  } else{
    console.log("")
    var queryURL = 'https://api.spotify.com/v1/search?q='+title+'&type=track';
    
    //      Artist(s)
    //      The song's name
    //      A preview link of the song from Spotify
    //      The album that the song is from
    //
    //if no song is provided then your program will default to
  }
  //This will show the following information about the song in your terminal/bash window
  //     "The Sign" by Ace of Base
  break;

  case "movie-this":
  console.log("movie-this", title);
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
    //http://www.omdbapi.com/?t=the+matrix&y=&plot=short&r=json

  break;

  case "do-what-it-says":
  console.log("do-what-it-says",title);
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
