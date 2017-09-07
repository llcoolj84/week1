var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {

  for (var i of Object.keys(library.playlists)) {
    console.log(library.playlists[i].id + " : " + library.playlists[i].name + ' - ' + library.playlists[i].tracks.length + ' tracks');
  }

}
//printPlaylists(library.playlists);

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracks = library.tracks;
  for (var i in tracks) {
    console.log(tracks[i].id + ": " + tracks[i].name + ' by ' + tracks[i].artist + ' (' + tracks[i].album + ')' );
  }
}
//console.log(printTracks(library.tracks)); //

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {

console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name +  ' - ' +  library.playlists[playlistId].tracks.length + ' tracks' );

var referenceTracks = library.tracks.id;
var referencePlaylist = library.playlists[playlistId].tracks;

  for (var i in referencePlaylist) {

    var trackId = library.playlists[playlistId].tracks[i];
    var track = library.tracks[trackId];
    console.log(trackId + ' :' + track.name + ' by ' + track.artist + ' (' + track.album + ')');

  }

}


//printPlaylist('p01');

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

library.playlists[playlistId].tracks.push(trackId);
console.log(printPlaylist(playlistId));


}

//addTrackToPlaylist('t01', 'p02');


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

var newId = uid();

library.tracks[newId] = {id: newId, name: name, artist: artist, album: album}
printTracks();

}

//addTrack('Nothin but a G thang', 'Dr. Dre', 'The Chronic');
// adds a playlist to the library

var addPlaylist = function (name) {

  var newId = uid();

  library.playlists[newId] = {id: newId, name: name, tracks: []};

}
//addPlaylist('Jerk');
//console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

    for (var i in library.tracks) {
      var str = library.tracks[i].name;
      var repeat;
      var searchResult = (str.search(new RegExp(query, "i")));
      //console.log(searchResult); // searches the string for the 'query' and ignores capital letters

      if ( searchResult !== -1 && repeat !== library.tracks[i]) {

        console.log('something was found, here\'s what we found')
        repeat = library.tracks[i];
        console.log(library.tracks[i]);

        } else {
        console.log("nothing was found, try again");
      }
    }

}

printSearchResults('code');



