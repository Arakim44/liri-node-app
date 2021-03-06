console.log("LIRI is starting");

var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require("fs"); //file streaming object.

var keys = require('./keys.js');
//keys are saved as twitterKeys object.
// console.log("keys: ",keys);
//keys are added as new object in  twitter package?
var client = new Twitter(keys.twitterKeys);


var action = process.argv[2];
var title = process.argv[3];

switch (action) {

    case "my-tweets":
        myTweet();
        break;

    case "spotify-this-song":
        mySpotify();
        break;

    case "movie-this":
        myMovie();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

}

//==my-tweets methods==============================================

function myTweet() {

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
            //This logs to the log.txt.
            fs.appendFile("log.txt","===========\n"+data[i].text +"\n===============\n");
        }
    };


}
// function Toogle(){
//   this.what = true;
//   this.print = function(){
//     console.log(this.what);
//     this.what = !this.what;
//   }
// }
//spotify-this method==================================
function mySpotify() {
    spotify.search({
        type: 'track',
        query: title
    }, function(err, data) {
        // console.log(JSON.stringify(data.tracks.items[0],null,2));
        //This if statement is when user put undefined track title.
        // console.log(JSON.stringify(data,null,2));
        if (title === "") {
            console.log("\n-------------\n");
            console.log(" We could not fined what you searched for.\n")
            console.log(" Song Title: The Sign\n Artist Name: Ace of Base\n Album Name: The Sign(US Album)\n Preview Link: https://p.scdn.co/mp3-preview/177e65fc2b8babeaf9266c0ad2a1cb1e18730ae4?cid=null");
            console.log("\n-------------\n");

        } else {
            var item = data.tracks.items[0];
            var artistName = item.artists[0].name;
            var albumName = item.album.name;
            var songTitle = item.name;
            var previewLink = item.preview_url;
            //It prints the Info of the Spefific track. Put in Quotes when user types on terminal.
            console.log("\n-------------\n");
            console.log("Song Title: " + songTitle + "\nArtist Name: " + artistName + "\nAlbum Name: " + albumName + "\nPreview Link: " + previewLink);
            console.log("\n-------------\n");

            //this log the data to the log.txt
            fs.appendFile("log.txt", "\n-Spotify--------\n"+"Song Title: " + songTitle + "\nArtist Name: " + artistName + "\nAlbum Name: " + albumName + "\nPreview Link: " + previewLink+"\n---------------")


        }

        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

    });

}

function noTitle(){
  console.log("\n-------------\n");
  console.log("You did not put any title! well, Here's Mr. Nobody \n")
  console.log("Title: Mr. Nobody \nRelease Year: 2009\nIMDB Rating: 7.9  \nCountry: Belgium, Germany, Canada, France \nLanguage: English, Mohawk \nPlot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible. \nActors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham ");
  console.log("\n-------------\n");

  fs.appendFile("log.txt", "\n#movie####################\n"+"Title: Mr. Nobody \nRelease Year: 2009\nIMDB Rating: 7.9  \nCountry: Belgium, Germany, Canada, France \nLanguage: English, Mohawk \nPlot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible. \nActors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham "+"\n###############################\n");
}


function hasTitle(dataBody){
      console.log("\n-------------\n");
      console.log("Title: " + dataBody.Title + "\nRelease Year: " + dataBody.Year + "\nIMDB Rating: " + dataBody.imdbRating + "\nCountry: " + dataBody.Country + "\nLanguage: " + dataBody.Language + "\nPlot: " + dataBody.Plot + "\nActors: " + dataBody.Actors);
      console.log("\n-------------\n");

      fs.appendFile("log.txt", "\n~movie~~~~~~~~~~~~~\n"+"Title: " + dataBody.Title + "\nRelease Year: " + dataBody.Year + "\nIMDB Rating: " + dataBody.imdbRating + "\nCountry: " + dataBody.Country + "\nLanguage: " +dataBody.Language + "\nPlot: " + dataBody.Plot + "\nActors: " + dataBody.Actors +"\n~~~~~~~~~~~~~~~~\n");


}
//movie-this method====================================

function myMovie() {
    var queryUrl = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            if (!title ) {
              noTitle()

            } else {
              var dataBody = JSON.parse(body)
              hasTitle(dataBody);

                //add rotten Tomatoes rating and URL
                // This will log to the log.txt

            }

        }
    });

}

//do-what-it-says method==================================

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(err, data) {
        data = data.split(",");
        case1 = data[0];
        title = data[1];

        if (case1 === "spotify-this-song") {
            mySpotify();
        } else if (case1 === "movie-this") {
            myMovie();
        }

    })

    //Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    // Feel free to change the text in that document to test out the feature for other commands.

}



//
// BONUS
//
// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.

//question: hard coding? for Mr.Nobody and The sign?
//use inquire? it does not say it on the thing. I will use it tho.
