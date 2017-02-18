// data.resultsJSON.forEach...
//
//image = object.artwork_url
//artist and song = object.title
//stream = object.stream_url
import SC_TOKEN from "./token.js";
import $ from 'jquery';

function searchSoundcloud (query) {
  return $.ajax({
    url: `https://api.soundcloud.com/tracks?client_id=${SC_TOKEN}`,
    dataType: "json",
    data: {
      q: query,
      limit: 50
    },
    //success: console.log
  });
}


//searchSoundcloud("run the jewels");

function jewelRunner  (data)  {
  return data[Math.floor(Math.random()*data.length)].stream;
}

function scData (data)  {
  return data.map(function(object) {
    var albumArt = object.artwork_url === null ? object.user.avatar_url : object.artwork_url;
    albumArt = albumArt != null ? './images/blank_album.png' : albumArt;
    return {
      artist: object.user.username,
      image: albumArt,
      title: object.title,
      stream: object.stream_url,
      tooltip: object.title,
      id: object.id
    }
  });
}


export  {searchSoundcloud, scData, jewelRunner};
