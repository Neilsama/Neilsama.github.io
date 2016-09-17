console.log("success1")
SC.initialize({
  client_id: 'f8d01220cc0357129af3ed02a2aececb',
  redirect_uri: 'https://neilsama.github.io/w03_h01_API/callback.html'
});

// initiate auth popup

SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
  console.log("success2");
});