var playlist = {
  Kaskade: "Cold As Stone"
  
}

function updatePlaylist(playlist,artistName,songTitle) {
//playlist.artistName = songTitle 
 
return Object.assign({}, playlist, {artistName:{songTitle}})
 
 
 
}
