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
             },
  printPlaylists: function ()
             {

                    for (var i of Object.keys(this.playlists)) {
                      console.log(this.playlists[i].id + " : " + this.playlists[i].name + ' - ' + this.playlists[i].tracks.length + ' tracks');
                    }
             },
  printTracks: function ()
              {
                      var tracks = this.tracks;
                      for (var i in tracks) {
                      console.log(tracks[i].id + ": " + tracks[i].name + ' by ' + tracks[i].artist + ' (' + tracks[i].album + ')' );
                    }
              },
  printPlaylist: function (playlistId)
              {
                  console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name +  ' - ' +  this.playlists[playlistId].tracks.length + ' tracks' );
                  var referenceTracks = this.tracks.id;
                  var referencePlaylist = this.playlists[playlistId].tracks;

                  for (var i in referencePlaylist) {

                  var trackId = this.playlists[playlistId].tracks[i];
                  var track = this.tracks[trackId];
                  console.log(trackId + ' :' + track.name + ' by ' + track.artist + ' (' + track.album + ')');
                  }
              },
  addTrackToPlaylist: function (trackId, playlistId)
              {
                  this.playlists[playlistId].tracks.push(trackId);
                  console.log(this.printPlaylist(playlistId));
              },
  uid: function()
              {
                  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
              },
  addTrack: function (name, artist, album)
              {

                  var newId = this.uid();
                  this.tracks[newId] = {id: newId, name: name, artist: artist, album: album}
                  this.printTracks();

              },
  addPlaylist: function (name)
              {

                  var newId = this.uid();
                  this.playlists[newId] = {id: newId, name: name, tracks: []};

              }

  }

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//library.printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


//ibrary.printTracks(library.tracks); //

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)


//library.printPlaylist('p01');

// adds an existing track to an existing playlist



//library.addTrackToPlaylist('t01', 'p02');


// generates a unique id
// (use this for addTrack and addPlaylist)


// adds a track to the library


//library.addTrack('Nothin but a G thang', 'Dr. Dre', 'The Chronic');
// adds a playlist to the library


//library.addPlaylist('Jerk');
//console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}