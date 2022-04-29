let Cards = [];
let dealerTotal = 0;

function Card(val, img, isAce) {
    this.val = val;
    this.img = img;
    this.isAce = isAce;

}




function newGame(){
    createObj();
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
    console.log("pick", pick);
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