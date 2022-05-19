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


    document.getElementById("dealerTotal").innerHTML = dealerTotal.toString();
    document.getElementById("playerTotal").innerHTML = playerTotal.toString();

    document.getElementById("hit").style.display = "block";
    document.getElementById("stand").style.display = "block";

}

function dealerDefault(){
    dealCardDealer("img/cards/back.svg");
    dealCardDealer("img/cards/back.svg");
}

function newGame(){
    createObj();
    resetGame();
    document.getElementById("popupBody").style.display = "none";


}

function showReset(){
    document.getElementById("reset").style.display = "block";
}


function hit(){
    dealPlayer();
    if(playerTotal === 21){
        document.getElementById("playerBlackjackBanner").style.display = 'block'
        console.log("blackjack")
        stand();
    }
    if(playerTotal >21){
        document.getElementById("playerBustBanner").style.display = 'block'
        console.log("bust")
        stand();
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

    document.getElementById("hit").style.display = "none";
    document.getElementById("stand").style.display = "none";

    if(playerTotal === dealerTotal){
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "Push! You Lose!";
    }else if(playerTotal === 21 && dealerTotal !== 21){
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "Blackjack! You Win!";
    }else if(playerTotal > dealerTotal && playerTotal<21){
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "You Win!";
    }else if(dealerTotal>21 && playerTotal<21) {
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "Dealer Bust! You Win!";
    }else if(playerTotal>21){
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "Bust! You Lose!";
    }
    else{
        document.getElementById("popupBody").style.display = "flex";
        document.getElementById("popupTitle").innerText = "You Lose!";
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

