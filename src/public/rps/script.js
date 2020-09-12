const scissors = document.getElementById("scissors")
const scroll   = document.getElementById("scroll")
const rock     = document.getElementById("rock")
const choices  = ["scissors", "scroll", "rock"]
let player   = ""
let computer = ""

window.onload = () => {
  const lose = async() => {
    await alert("You lose!")
    location.reload()
  }
  const draw = async() => {
    await alert("Draw.")
    location.reload()
  }
  const win = async() => {
    await alert("You win!")
    location.reload()
  }
  const play = () => {
    computer = choices[Math.floor(Math.random()*choices.length)]
    if(player == "scissors" && computer == "rock") lose()
    else if(player == "scroll" && computer == "scissors") lose()
    else if(player == "rock" && computer == "scroll") lose()
    else if(player == computer) draw()
    else win()
  }
  scissors.addEventListener("click", () => {
    player = "scissors"
    play()
  })
  scroll.addEventListener("click", () => {
    player = "scroll"
    play()
  })
  rock.addEventListener("click", () => {
    player = "rock"
    play()
  })
}