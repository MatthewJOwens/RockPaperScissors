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
  console.log("Plays " + userInput);

  opponentPlay()
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

      break;
    case 1:
      // @ts-ignore
      document.getElementById("opponent-img").src = paper.img
      document.getElementById("opponent-plays").textContent = paper.text
      console.log("fight paper");
      break;
    case 2:
      // @ts-ignore
      document.getElementById("opponent-img").src = scissors.img
      document.getElementById("opponent-plays").textContent = scissors.text
      console.log("fight scissors");
      break;
  }
  evaluateWinner()
}

function evaluateWinner(user, opponent) {

}