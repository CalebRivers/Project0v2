let board = [
  '','','',
  '','','',
  '','',''
]

let counter = 0;


const isWin = function () {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
    console.log('You won!');
  }
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
    console.log('You won!');
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
    console.log('You won!');
  }
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
    console.log('You won!');
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
    console.log('You won!');
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
    console.log('You won!');
  }
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
    console.log('You won!');
  }
  if (board[6] === board[4] && board[4] === board[2] && board[6] !== "") {
    console.log('You won!');
  }
}

const placeMarker = function (boxNumber) {
  if (counter%2 === 0) {
    board[boxNumber] = 'X';
    counter = counter + 1;
  } else {
    board[boxNumber] = 'O';
    counter = counter + 1;
  }
  isWin()
  console.log(board);
}

const placePic = function (num) {
  if (board[num]==="X") {
    $(`#box${num}`).html('<img src= "http://placekitten.com/150/150" > ')
  }
  if (board[num]==="O") {
    $(`#box${num}`).html('<img src= "http://placekitten.com/151/151" > ')

  }
}

$(document).ready(function () {
  $("#box0").on('click', function () {
    placeMarker(0);
    placePic(0);
  })
})
