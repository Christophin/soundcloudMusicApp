import $ from 'jquery'
import {searchSoundcloud, scData} from "./soundcloud.js"
import {songTemplate} from "./template.js"

$("form").submit(getSearchResults);


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
  })
}
