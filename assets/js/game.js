function startGame() {
  socket = io.connect();
  socket.on('connect', function() {
    console.log("You're connected!");
    generateBoard();
  });
}

function generateBoard() {
  jQuery.get('/txt/words.txt', function(data) {
    // console.log(data);
    socket.on('board words', function(words){
      io.emit('board words', data);
      console.log(data);
    });
  });
}