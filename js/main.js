let board = [
  '','','',
  '','','',
  '','',''
]

let counter = 0;

$(document).ready(function () {
const isWin = function () {
  if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
  $(".gameOver").attr('id','gameOverShow')
  }
  if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
  if (board[6] === board[4] && board[4] === board[2] && board[6] !== "") {
    $(".gameOver").attr('id','gameOverShow')
  }
}

const isDraw = function () {
  if ((board[0] === "X" || board[0] === "O" )&& (board[1] === "X" || board[1] === "O") && (board[2] === "X" || board[2] === "O") && (board[3] === "X" || board[3] === "O") && (board[4] === "X" || board[4] === "O") && (board[5] === "X" || board[5] === "O") && (board[6] === "X" || board[6] === "O") && (board[7] === "X" || board[7] === "O") && (board[8] === "X" || board[8] === "O")) {
    // console.log("Its a draw")
    $(".draw").attr('id','gameOverShow');
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
  isDraw()
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

  $("#box0").on('click', function () {
    placeMarker(0);
    placePic(0);
  })

  $("#box1").on('click', function () {
    placeMarker(1);
    placePic(1);
  })

  $("#box2").on('click', function () {
    placeMarker(2);
    placePic(2);
  })
  $("#box3").on('click', function () {
    placeMarker(3);
    placePic(3);
  })
  $("#box4").on('click', function () {
    placeMarker(4);
    placePic(4);
  })
  $("#box5").on('click', function () {
    placeMarker(5);
    placePic(5);
  })
  $("#box6").on('click', function () {
    placeMarker(6);
    placePic(6);
  })
  $("#box7").on('click', function () {
    placeMarker(7);
    placePic(7);
  })
  $("#box8").on('click', function () {
    placeMarker(8);
    placePic(8);
  })
})
