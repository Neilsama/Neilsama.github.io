var url = 'https://api.soundcloud.com/tracks?client_id=f8d01220cc0357129af3ed02a2aececb';
$.getJSON(url, function(tracks) {
  $(tracks).each(function(track) {
    console.log(track.title);
  }
});