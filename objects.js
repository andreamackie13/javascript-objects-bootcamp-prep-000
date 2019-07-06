var playlist = {
  
  
}

function updatePlaylist(playlist,artistName,songTitle) {
 //playlist.artistName = songTitle 
 
 Object.assign({}, playlist, {artistName:{songTitle}})
 
}
