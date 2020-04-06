const fullDeck = [
    {image: "images/AS.jpg", value: 14},
    {image: "images/AD.jpg", value: 14},
    {image: "images/AC.jpg", value: 14},
    {image: "images/AH.jpg", value: 14},

    {image: "images/2S.jpg", value: 2}, 
    {image: "images/2D.jpg", value: 2},
    {image: "images/2C.jpg", value: 2},
    {image: "images/2H.jpg", value: 2},

    {image: "images/3S.jpg", value: 3}, 
    {image: "images/3D.jpg", value: 3},
    {image: "images/3C.jpg", value: 3},
    {image: "images/3H.jpg", value: 3},

    {image: "images/4S.jpg", value: 4}, 
    {image: "images/4D.jpg", value: 4},
    {image: "images/4C.jpg", value: 4},
    {image: "images/4H.jpg", value: 4},

    {image: "images/5S.jpg", value: 5}, 
    {image: "images/5D.jpg", value: 5},
    {image: "images/5C.jpg", value: 5},
    {image: "images/5H.jpg", value: 5},

    {image: "images/6S.jpg", value: 6}, 
    {image: "images/6D.jpg", value: 6},
    {image: "images/6C.jpg", value: 6},
    {image: "images/6H.jpg", value: 6},

    {image: "images/7S.jpg", value: 7}, 
    {image: "images/7D.jpg", value: 7},
    {image: "images/7C.jpg", value: 7},
    {image: "images/7H.jpg", value: 7},
    
    {image: "images/8S.jpg", value: 8}, 
    {image: "images/8D.jpg", value: 8},
    {image: "images/8C.jpg", value: 8},
    {image: "images/8H.jpg", value: 8},

    {image: "images/9S.jpg", value: 9}, 
    {image: "images/9D.jpg", value: 9},
    {image: "images/9C.jpg", value: 9},
    {image: "images/9H.jpg", value: 9},

    {image: "images/10S.jpg", value: 10}, 
    {image: "images/10D.jpg", value: 10},
    {image: "images/10H.jpg", value: 10},
    {image: "images/10C.jpg", value: 10},

    {image: "images/JS.jpg", value: 11}, 
    {image: "images/JD.jpg", value: 11},
    {image: "images/JH.jpg", value: 11},
    {image: "images/JC.jpg", value: 11},

    {image: "images/QC.jpg", value: 12}, 
    {image: "images/QH.jpg", value: 12},
    {image: "images/QD.jpg", value: 12},
    {image: "images/QS.jpg", value: 12},

    {image: "images/KS.jpg", value: 13}, 
    {image: "images/KC.jpg", value: 13},
    {image: "images/KH.jpg", value: 13},
    {image: "images/KD.jpg", value: 13},
] 

let deckOne;
let deckTwo;
let cardOne;
let tieCards = [];
let shuffledDeck = [];
let collectOne = [];
let collectTwo = [];


function shuffle() {
    let length = fullDeck.length, t, i;
    while (length) {
      i = Math.floor(Math.random() * length--);
      t = fullDeck[length];
      fullDeck[length] = fullDeck[i];
      fullDeck[i] = t;
    }
    shuffledDeck = fullDeck;
    deckOne = shuffledDeck.slice(0,26);
    deckTwo = shuffledDeck.slice(26,52);
    document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
    document.getElementById("dealerScoreTxt").innerHTML = "Cards in dealer's deck: " + deckTwo.length;
    cardOne = deckOne.shift();
    cardTwo = deckTwo.shift(); 
  // shift 
  }

  // function { 
  //   if (cardOne.value > cardTwo.value && tieCards !== [])
  //   tieCardsArr = deckOne.concat(tieCards);
  // }
  // tieCardsArr = deckOne.concat(tieCards);
  // tieCardsArr = [];
  // let tieCardsArr = deckOne.concat(tieCards);
  // tieCardsArr = [];
  // deckOne = tieCardsArr;
  


 document.getElementById('deal').addEventListener('click', function deal() {
    console.log("button");
    (document.getElementById("cardSlotOne").src = cardOne.image);
    (document.getElementById("cardSlotTwo").src = cardTwo.image);
    if (deckOne.length === 0) {
        document.getElementById("winText").innerHTML = "No more cards! You suck at luck.";
        document.getElementById('deal').style.display = "none";
        document.getElementById('collect').style.display = "none";
    }
    else if (deckTwo.length === 0) {
        document.getElementById("winText").innerHTML = "Dealer ran out of cards! You win!";
        document.getElementById('deal').style.display = "none"; 
        document.getElementById('collect').style.display = "none";
    }
    else if (cardOne.value > cardTwo.value) {
        document.getElementById("winText").innerHTML = "You won this round!";
        // this was deckOne.push 
     collectOne.push(cardOne, cardTwo);
     collectOne.concat(tieCards);
     // concat test 
    //  document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
    //  document.getElementById("dealerScoreTxt").innerHTML = "Cards in dealer's deck: " + deckTwo.length;
     tieCards = [];
     cardOne = deckOne.shift();
     cardTwo = deckTwo.shift(); 
     
  } else if (cardOne.value < cardTwo.value) {
        document.getElementById("winText").innerHTML = "Javascript must hate you!";
        deckTwo.push(cardOne, cardTwo);
        // concat test
        collectTwo.concat(tieCards);
        // document.getElementById("dealerScoreTxt").innerHTML = "Cards in dealer's deck: " + deckTwo.length;
        // document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
     tieCards = [];
     cardOne = deckOne.shift();
     cardTwo = deckTwo.shift();
   // shift 
  } else {

        document.getElementById("winText").innerHTML = "A tie? That means WAR!";
        // document.getElementById("dealerScoreTxt").innerHTML = "Cards in dealer's deck: " + deckTwo.length;
        // document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
        // deckOne.push(cardOne);
        // deckTwo.push(cardTwo);
        tieCards.push(cardOne, cardTwo);
        cardOne = deckOne.shift();
        cardTwo = deckTwo.shift();


      //   document.getElementById('deal').addEventListener('click', function () {
      //     deal();
      // })
    }
  })


  document.getElementById('collect').addEventListener('click', function () {
    console.log("collect");
  deckOne = deckOne.concat(tieCards, collectOne);
  deckTwo = deckTwo.concat(tieCards, collectTwo);
  
  document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
  document.getElementById("dealerScoreTxt").innerHTML = "Cards in dealer's deck: " + deckTwo.length;
  })

  

  
  function init () {
    console.log("init");
    shuffledDeck = [];
    deckOne = [];
    deckTwo = [];
    cardOne = null;
    cardTwo = null;
    tieCards = [];
    (document.getElementById("cardSlotOne").src = '');
    (document.getElementById("cardSlotTwo").src = '');
    shuffle();
}


document.getElementById('reset').addEventListener('click', function () {
    console.log("reset");
    init();
   
})



init();






 // }
    // else if (cardOne.value > cardTwo.value && tieCards !== []) {
    //     deckOne.concat(tieCards);
    //     document.getElementById("winText").innerHTML = "You won this round!";
    //     document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
    //  deckOne.push(cardOne, cardTwo);
    // //  deckOne.concat(tieCards);
    //  cardOne = deckOne.shift();
    //  cardTwo = deckTwo.shift(); 
  //   }
  //   else if (cardOne.value < cardTwo.value && tieCards !== []) {
  //     deckTwo.concat(tieCards);
  //     document.getElementById("winText").innerHTML = "You won this round!";
  //     document.getElementById("yourScoreTxt").innerHTML = "Cards in your deck: " + deckOne.length;
  //  deckOne.push(cardOne, cardTwo);
  // //  deckOne.concat(tieCards);
  //  cardOne = deckOne.shift();
  //  cardTwo = deckTwo.shift(); // this didn't work as recurssion 









//   (document.getElementById("cardSlotOne").src = flipCardOne[0].image);
  //     (document.getElementById("cardSlotTwo").src = flipCardTwo[0].image);

 
 
 
 
 
 
//  function deal () {
//      console.log("button was pressed");
//  }) this worked!












 



// let playerDeckOne = shuffledDeck.slice(0,26);
// let playerDeckTwo = shuffledDeck.slice(26,52);


// let testArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
//     27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];

// let testDeckOne = testArray.slice(0,26);
// let testDeckTwo = testArray.slice(26,52);

// let flipCardOne = testDeckOne.shift(0);
// let flipCardTwo = testDeckTwo.shift(0);


// function callCard () {
//     (document.getElementById("cardSlotOne").src = flipCardOne[0].image);
//     (document.getElementById("cardSlotTwo").src = flipCardTwo[0].image);
// }; IMPORTANT



// function deal () {
//     flipCardOne = testDeckOne.shift(0);
//     flipCardTwo = testDeckTwo.shift(0);
//     return {flipCardTwo, flipCardTwo};
// }

// deal();

