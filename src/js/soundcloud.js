import SC_TOKEN from "./token.js";
import $ from 'jquery';

function searchSoundcloud (query) {
  return $.ajax({
    url: `https://api.soundcloud.com/tracks?client_id=${SC_TOKEN}`,
    dataType: "json",
    data: {
      q: query,
    },
    success: console.log
  });
}

searchSoundcloud("run the jewels");

// data.resultsJSON.forEach...
//
//image = object.artwork_url
//artist and song = object.title
//stream = object.stream_url

function getResults (data)  {
  data.resultsJSON.forEach(function(object) {
    return {
      image: object.artwork_url,
      title: object.title,
      stream: object.stream_url
    }
  })
}

export  {getResults};
