function choice(){
  var random = Math.floor(Math.random()*3)
  var images = ["paper", "rock", "scissors"]
  return images[random]
}

function game(){
  user1 = choice()
  user2 = choice()

  document.querySelector(".img1").setAttribute("src", "images/" + user1 + ".png")
  document.querySelector(".img2").setAttribute("src", "images/" + user2 + ".png")

  if(user1 == user2){
    document.querySelector("h1").innerText = "Draw!"
  }
  else if(user1 == "paper"){
    if(user2 == "rock"){
      document.querySelector("h1").innerText = "Player 1, won!"
    }else{
      document.querySelector("h1").innerText = "Player 2, won!"
    }
  }
  else if(user1 == "rock"){
    if(user2 == "scissors"){
      document.querySelector("h1").innerText = "Player 1, won!"
    }else{
      document.querySelector("h1").innerText = "Player 2, won!"
    }
  }
  else if(user1 == "scissors"){
    if(user2 == "paper"){
      document.querySelector("h1").innerText = "Player 1, won!"
    }else{
      document.querySelector("h1").innerText = "Player 2, won!"
    }
  }

  switch (document.querySelector("h1").innerText) {
    case "Player 1, won!":
      document.querySelector(".ch1").classList.add("winner")
      document.querySelector(".ch2").classList.add("looser")
      score1++
      document.querySelector("#user1-score").innerText = score1
      break;
    case "Player 2, won!":
      document.querySelector(".ch2").classList.add("winner")
      document.querySelector(".ch1").classList.add("looser")
      score2++
      document.querySelector("#user2-score").innerText = score2
      break;
    case "Draw!":
      document.querySelector(".ch2").classList.add("winner")
      document.querySelector(".ch1").classList.add("winner")
      break;
    default:

  }
}

var score1 = 0;
var score2 = 0;


document.querySelector(".playClick").addEventListener("click", function(){
  document.querySelector(".ch1").classList.remove("winner")
  document.querySelector(".ch1").classList.remove("looser")
  document.querySelector(".ch2").classList.remove("winner")
  document.querySelector(".ch2").classList.remove("looser")
  game();
})

document.querySelector(".reset").addEventListener("click", function(){
  location.reload();
})
