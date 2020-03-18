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

function play(userInput) {
  console.log("Plays " + userInput.text.toLowerCase());
  // @ts-ignore
  document.getElementById("player-img").src = userInput.img
  document.getElementById("player-plays").innerText = userInput.text
  let fight = opponentPlay()
  eval(userInput, fight)
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

}