let Cards = [];

function Card(val, img, isAce) {
    this.val = val;
    this.img = img;
    this.isAce = isAce;

}




function newGame(){
    createObj();
    let pick = Math.floor(Math.random() * Cards.length);
    console.log("pick", pick);
    dealCardDealer(Cards[pick].img);
    pick = Math.floor(Math.random() * Cards.length);
    console.log("pick", pick);
    dealCardDealer(Cards[pick].img);
    pick = Math.floor(Math.random() * Cards.length);
    console.log("pick", pick);
    dealCardDealer(Cards[pick].img);
    pick = Math.floor(Math.random() * Cards.length);
    console.log("pick", pick);
    dealCardDealer(Cards[pick].img);
    pick = Math.floor(Math.random() * Cards.length);
    console.log("pick", pick);
    dealCardDealer(Cards[pick].img);
}

function dealCardDealer(img){
    let elem = document.createElement("img");
    elem.setAttribute("src", img);
    elem.setAttribute("width", "20%");
    elem.setAttribute("style", "margin: 10px");

    document.getElementById("dealerCards").appendChild(elem);
}