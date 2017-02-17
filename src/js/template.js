function songTemplate (song)  {
  return `
    <div class="songBox">
      <img src="${song.image}"/>
      <div class="title">${song.title[1]}</div>
      <div class="artist">${song.title[0]}</div>
    </div>
  `;
};

export {songTemplate};
