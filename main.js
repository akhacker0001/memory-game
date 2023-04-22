import {settings} from "./library_settings.js";
// import Scores from "./library_scores.js";
// import Cards from "./library_cards.js";
import {cards} from "./library_cards.js";
// var tabButtons = document.querySelectorAll(".tab .tablinks");
// var tabPanels = document.querySelectorAll(".tabPanel");
// function showPanel(panelIndex) {
//   tabButtons.forEach(function (node) {
//     node.style.backgroundColor = "";
//     node.style.color = "";
//   });
//   tabPanels.forEach(function (node) {
//     node.style.display = "none";
//   });
//   tabPanels[panelIndex].style.display = "block";
// }
// showPanel(0);


const saveSettingBtns = document.getElementById("saveSettingBtn");
const player = document.getElementById("playerName");
const numCards = document.getElementById("num_cards");

let totalCards = 48

function getSettingData(){
    let playerName = settings.getplayerName()
    let numberOfCards = settings.getnumImages()
    player.value = playerName,
    console.log(player.value = playerName,"Vdfvd")
    numCards.value = numberOfCards
    totalCards = parseInt(numberOfCards)
}


saveSettingBtns.addEventListener("click", () => {
  let playerName = player.value;
  let numberOfCards = numCards.value;
  settings.setplayerName(playerName);
  settings.setnumImages(numberOfCards);
  getSettingData()
});

window.addEventListener('load',function(){
    getSettingData()
})

const  allImagesSrc = cards.getImages();
const playGame = document.getElementById('PlayGames')
console.log(playGame,"ankir11111111111111111111")
(function setImages(){
    let imgStr = ""
    for (let index = 1; index <= totalCards /2; index++) {
        let card = cards.createCardHTML(allImagesSrc[index])
        console.log(card)
        playGame.insertAdjacentHTML("beforeend",card)
        // imgStr += card
    }
    console.log(imgStr,"dskjcd")
    
    // playGame.insertAdjcentHtml('berforend',imgStr)
    
    


}())

console.log(allImagesSrc)
