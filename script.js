const MAX_CARD_AVAILABLE = '15';

let maxCardNo = localStorage.getItem("maxCard")? localStorage.getItem("maxCard"):0 ;

if(MAX_CARD_AVAILABLE !== maxCardNo) {
     localStorage.setItem("maxCard", MAX_CARD_AVAILABLE);
     storeAvailableCards(maxCardNo, MAX_CARD_AVAILABLE);
 }

function randomCard() {
let availableCards = JSON.parse(localStorage.getItem("availableCards"));
let randomCard = 0;
if(Array.isArray(availableCards) && availableCards.length) {
    let index = Math.floor(Math.random() * availableCards.length);
    randomCard = availableCards[index];
    if (index > -1) { // only splice array when item is found
        availableCards.splice(index, 1); // 2nd parameter means remove one item only
        localStorage.setItem('availableCards', JSON.stringify(availableCards));
    }
    document.getElementById("p5-card-image").src = "images/" + randomCard + ".jpg";
} else {
    if (confirm('Hurray!! you read all cards, click OK to read it again.')) {
        storeAvailableCards(0, MAX_CARD_AVAILABLE);
    }
}
}

function storeAvailableCards(first, last) {
    let cards = [];
    for (let i = first; i < last; i++) {
        cards.push(Math.floor(i));
    }
    let unreadCard = JSON.parse(localStorage.getItem("availableCards"));
    let availableCards = []
    if(Array.isArray(unreadCard) && unreadCard.length) {
        availableCards = unreadCard.concat(cards);
    } else {
        availableCards = cards;
    }
    localStorage.setItem("availableCards", JSON.stringify(availableCards));
}