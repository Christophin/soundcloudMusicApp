import SC_TOKEN from './token.js'

function songTemplate (song)  {
  return `
    <div class="songBox id${song.id}" title="${song.tooltip}">
      <img src="${song.image}"/>
      <div id="title" class="title">${song.title}</div>
      <div class="artist">${song.artist}</div>
    </div>
  `;
};

function playSong (song)  {
  return `
    <audio src="${song.stream}?client_id=${SC_TOKEN}" controls autoplay></audio>
  `;
};

function jewelsFast (url) {
  return `
    <audio src="${url}?client_id=${SC_TOKEN}" controls autoplay></audio>
  `
}

export {songTemplate, playSong, jewelsFast};
