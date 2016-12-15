console.log("LIRI is starting");

var Twitter = require('twitter');
var spotify = require('spotify');

var keys = require('./keys.js');
//keys are saved as twitterKeys object.
// console.log("keys: ",keys);
//keys are added as new object in  twitter package?
var client = new Twitter(keys.twitterKeys);


var action = process.argv[2];
var title = process.argv[3];

switch (action) {

    case "my-tweets":

        console.log("my tweets");
        var params = {
            q: '',
            count: 4, //4 latest tweet.
        };

        client.get('statuses/user_timeline', params, gotData);
        //This will show your last 20 tweets and when they were created at in your terminal/bash window.

        function gotData(error, data, response) {
            if (!error)
            // console.log("tweets",data[0]);
            //data is in array!
                for (var i = 0; i < data.length; i++) {
                console.log("=============")
                console.log(data[i].text);
            }
        };

        break;

    case "spotify-this-song":
        // console.log("spotify-this-song",title);
        spotify.search({
            type: 'track',
            query: title
        }, function(err, data) {
            // console.log(JSON.stringify(data.tracks.items[0],null,2));


            //This if statement is when user put undefined track title.
            if (data.tracks.items[0] === undefined){
              console.log("\n-------------\n");
              console.log(" We could not fined what you searched for.\n")
              console.log(" Song Title: The Sign\n Artist Name: Ace of Base\n Album Name: The Sign(US Album)\n Preview Link: https://p.scdn.co/mp3-preview/177e65fc2b8babeaf9266c0ad2a1cb1e18730ae4?cid=null");
              console.log("\n-------------\n");

            }else{
              var item = data.tracks.items[0];
              var artistName = item.artists[0].name;
              var albumName = item.album.name;
              var songTitle = item.name;
              var previewLink = item.preview_url;
              //It prints the Info of the Spefific track. Put in Quotes when user types on terminal.
              console.log("\n-------------\n");
              console.log("Song Title: " + songTitle + "\nArtist Name: " + artistName + "\nAlbum Name: " + albumName + "\nPreview Link: " + previewLink);
              console.log("\n-------------\n");
            }


            //This prints the info about tracks.

            // data.tracks.items.forEach((item, i) => {
            // console.log(JSON.stringify(item, null, 2));
            //     console.log(`item index: ${i} => `, item.id);
            // })
            //*** THis is using forEach.
            // data.tracks.items.forEach(function(item, i) {
            //   console.log(JSON.stringify(item, null, 2));
            //   console.log(`item index: ${i} => `, item.id);
            // })
            //*** This is using for loops
            // for(var i = 0; i < data.tracks.items.length; i++) {
            //    var item = data.tracks.items[i];
            //    console.log(JSON.stringify(item, null, 2));
            //    console.log(`item index: ${i} => `, item.id);
            // }

            // console.log(Object.keys(data.tracks.items));
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }

        });
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
        console.log("do-what-it-says", title);
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
