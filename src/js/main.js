import $ from 'jquery'
import {searchSoundcloud, scData, jewelRunner} from "./soundcloud.js"
import {songTemplate, playSong, jewelsFast} from "./template.js"

$("#search").submit(getSearchResults);

function getSearchResults (event) {
  event.preventDefault();
  showSearchResults();
}

function showSearchResults () {
  var query = $("#search-query").val();
  searchSoundcloud(query).then(displayResults);
};

function displayResults (data)  {
  $(".container").empty();
  var soundcloudData = scData(data);
  soundcloudData.forEach(function (song)  {
    $(".container").append(songTemplate(song));
    clickAdder(song);
  });
  return soundcloudData;
};

function clickAdder (song)  {
  $(`.id${song.id}`).click(function() {
    $(".audio").empty();
    $(".audio").append(playSong(song));
  })
};

$("#runJewels").submit(runTheJewels);

function runTheJewels (event)  {
  event.preventDefault();
  searchSoundcloud("run the jewels").then(displayResults).then(jewelRunner).then(jewelPlayer)
};

function jewelPlayer (url) {
  $(".audio").empty();
  $(".audio").append(jewelsFast(url));
};
