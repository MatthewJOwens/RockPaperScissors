let rock = {
  img: "./RPSRock.png",
  text: "ROCK"
}
let paper = {
  img: "./RPSPaper.png",
  text: "PAPER"
}
let scissors = {
  img: "./RPSScissors.png",
  text: "SCISSORS"
}
let win = {
  text: "You win!"
}
let lose = {
  text: "You lose."
}
let draw = {
  text: "Draw! Play again!"
}

function play(userInput) {
  console.log("Plays " + userInput.text.toLowerCase());
  // @ts-ignore
  document.getElementById("player-img").src = userInput.img
  document.getElementById("player-plays").innerText = userInput.text
  let opponentInput = opponentPlay()
  let fight = eval(userInput, opponentInput)
  setTimeout(results, 500, fight)
}

function opponentPlay() {
  let rand = Math.floor(Math.random() * 3)
  console.log(rand);

  switch (rand) {
    case 0:
      // @ts-ignore
      document.getElementById("opponent-img").src = rock.img
      document.getElementById("opponent-plays").innerText = rock.text
      console.log("fight rock");
      return rock;
    case 1:
      // @ts-ignore
      document.getElementById("opponent-img").src = paper.img
      document.getElementById("opponent-plays").textContent = paper.text
      console.log("fight paper");
      return paper;
    case 2:
      // @ts-ignore
      document.getElementById("opponent-img").src = scissors.img
      document.getElementById("opponent-plays").textContent = scissors.text
      console.log("fight scissors");
      return scissors;
  }
}

function eval(user, opponent) {
  console.log(user + " vs. " + opponent)

  switch (user) {
    case rock:
      if (opponent == rock) {
        return draw;
      } else if (opponent == paper) {
        return lose;
      } else {
        return win;
      }
    case paper:
      if (opponent == paper) {
        return draw;
      } else if (opponent == scissors) {
        return lose;
      } else {
        return win;
      }
    case scissors:
      if (opponent == scissors) {
        return draw;
      } else if (opponent == rock) {
        return lose;
      } else {
        return win;
      }
  }
}

function results(fight) {
  alert(fight.text);

}