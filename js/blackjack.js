let Cards = [];
let dealerTotal = 0;
let playerTotal = 0;

function Card(val, img, isAce) {
    this.val = val;
    this.img = img;
    this.isAce = isAce;

}


function resetGame(){
    document.getElementById("dealerCards").innerHTML = "";

    dealerTotal = 0;
    document.getElementById("dealerBlackjackBanner").style.display = 'none';
    document.getElementById("dealerBustBanner").style.display = 'none';

    document.getElementById("playerCards").innerHTML = "";
    playerTotal = 0;
    document.getElementById("playerBlackjackBanner").style.display = 'none';
    document.getElementById("playerBustBanner").style.display = 'none';
}

function dealerDefault(){
    dealCardDealer("img/cards/back.svg");
    dealCardDealer("img/cards/back.svg");
}

function newGame(){
    createObj();
    resetGame();


}

function hit(){
    dealPlayer();
    if(playerTotal === 21){
        document.getElementById("playerBlackjackBanner").style.display = 'block'
        console.log("blackjack")
    }
    if(playerTotal >21){
        document.getElementById("playerBustBanner").style.display = 'block'
        console.log("bust")
    }
}
function stand(){
    document.getElementById("dealerCards").innerHTML = "";
    while(dealerTotal < 17){
        dealDealer();
    }
    if(dealerTotal === 21){
        document.getElementById("dealerBlackjackBanner").style.display = 'block'
        console.log("blackjack")
    }
    if(dealerTotal >21){
        document.getElementById("dealerBustBanner").style.display = 'block'
        console.log("bust")
    }
}

function dealDealer(){
    let pick = Math.floor(Math.random() * Cards.length);
    dealCardDealer(Cards[pick].img);
    dealerTotal += Cards[pick].val;
    document.getElementById("dealerTotal").innerText = dealerTotal;
}

function dealCardDealer(img){
    let el = document.createElement("img");
    el.setAttribute("src", img);
    el.setAttribute("width", "20%");
    el.setAttribute("style", "margin: 10px");

    document.getElementById("dealerCards").appendChild(el);
}


function dealPlayer(){
    let pick = Math.floor(Math.random() * Cards.length);
    dealCardPlayer(Cards[pick].img);
    playerTotal += Cards[pick].val;
    document.getElementById("playerTotal").innerText = playerTotal;
}

function dealCardPlayer(img){
    let el = document.createElement("img");
    el.setAttribute("src", img);
    el.setAttribute("width", "20%");
    el.setAttribute("style", "margin: 10px");

    document.getElementById("playerCards").appendChild(el);
}

