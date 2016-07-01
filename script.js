//CARDS


var yourHand = []
var compHand = []

var deck = [];

function Card(num, suit, key) {
    this.num = num;
    this.suit = suit;
    this.key = key;
}


var suits = ['heart', 'diamond', 'spade', 'club'];
for (var i = 0; i < suits.length; i++) {
    var suit = suits[i];
    for (var j = 0; j < 13; j++) {
        deck.push({
            num: j + 1,
            suit: suit
        });
    }
}
console.log(deck)
    // for (var i = 0; i <= 52; i++) {

//     var num = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//     var value = num[Math.floor(Math.random() * num.length)];


//     var type = ["heart", "diamond", "spade", "club"];
//     var suit = type[Math.floor(Math.random() * type.length)];

//     var key = value + suit;
//     deck[i] = new Card(value, suit, key)
// }




function deal() {
    for (var h = 0; h < 26; h++) {
        yourHand.push(deck[h]);
    }

    for (var x = 26; x < 52; x++) {
        compHand.push(deck[x]);
    }

    console.log("your deck has " + yourHand.length + " cards")
    console.log(yourHand)
    console.log("the computer has " + compHand.length + " cards")
    console.log(compHand)



    document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p>";
    document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + "cards in its hand</p>";
    document.getElementById("deal").innerHTML = "Fire!";

}





function rand(min, max) {

    var offset = min;
    var range = (max - min) + 1;

    var randNum = Math.floor(Math.random() * range) + offset;
    return randNum
}




function fire() {
    var hCard = rand(0, yourHand.length - 1);
    var cCard = rand(0, compHand.length - 1);

    function win() {
        compHand.splice(cCard, 1)
        yourHand.push(compHand[cCard])
        console.log("you win")
        console.log(yourHand)
        console.log(compHand)
    }

    function lose() {
        yourHand.splice(hCard, 1)
        compHand.push(yourHand[hCard])
        console.log("you lose")
        console.log(yourHand)
        console.log(compHand)
    }


    console.log("human card is " + hCard)
    console.log("computer card is " + cCard)



    findWinner();

    function findWinner() {
        if (yourHand[hCard].num === compHand[cCard].num) {
            console.log("tie")
        }
        else if (yourHand[hCard].num < compHand[cCard].num) {
            lose()
        }
        else {
            win()
            //youTied();
            //console.log("the human number is " + yourHand[hCard].num + " the compuer hand is " + compHand[cCard].num)
            // console.log(yourHand[hCard].num)
            // console.log(compHand[cCard].num)
            
        }
        //console.log(yourHand)
        //console.log(compHand)

        document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p>";
        document.getElementById("your-hand-card").innerHTML = "<p style='font-size: 30px'>" + yourHand[hCard].num + "</p><img src='" + yourHand[hCard].suit + ".png' width='20px'>";
        document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + "cards in its hand</p>";
        document.getElementById("comp-hand-card").innerHTML = "<p style='font-size: 30px'>" + compHand[cCard].num + "</p><img src='" + compHand[cCard].suit + ".png' width='20px'>";
    }


    // function youWin() {
    //     var win = new Promise(
    //         function win() {
    //             yourHand.push(compHand[cCard])
    //         }
    //     )
    //     win.then(
    //         compHand.splice(cCard, 1),
    //         console.log("promise worked")
    //     )
    // }

    // function youLose() {
    // var lose = new Promise(
    //     function win() {
    //         compHand.push(yourHand[hCard])
    //     })
    //     lose.then(
    //         yourHand.splice(hCard, 1),
    //         console.log("promise worked")
    //     )    
    // }

    // function youTied() {
    //     console.log("tied")
    // }


    //findWinner(hCard, cCard)

    //function findWinner(card1, card2) {



    //document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p><p>object number " + hCard + "<p style='font-size: 30px'>" + yourHand[hCard].num + "</p><img src='" + yourHand[hCard].suit + ".png' width='20px'>"

    //document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + " cards in their hand</p><p>object number " + cCard + "<p style='font-size: 30px'>" + compHand[cCard].num + "</p><img src='" + compHand[cCard].suit + ".png' width='20px'>"


    //}



}












// if (yourHand[card1].num > compHand[card2].num) {
//     //yourHand.push(compHand[cCard]);
//     //compHand.splice(cCard, 1);
//     function win() {
//         var win = new Promise(
//             function win() {
//                 yourHand.push(compHand[cCard])
//             }
//         )
//         win.then(
//             compHand.splice(cCard, 1),
//             console.log("promise worked")
//         )
//     }

//     console.log("your object is " + hCard + " comp object is " + cCard)
//     console.log("you win");
//     console.log(yourHand);
//     console.log(compHand);
// }
// else if (yourHand[hCard].num < compHand[cCard].num) {
//     //compHand.push(yourHand[hCard]);
//     //yourHand.splice(hCard, 1);
//     var lose = new Promise(
//         function win() {
//             compHand.push(yourHand[hCard])
//         }
//     )
//     lose.then(
//         yourHand.splice(hCard, 1),
//         console.log("promise worked")
//     )


//     console.log("your object is " + hCard + " comp object is " + cCard)
//     console.log("you lose");
//     console.log(yourHand);
//     console.log(compHand);
// }
// //else {
// else if (yourHand[hCard].num == compHand[cCard].num) {
//     console.log("tie!")
//     var win = new Promise(
//         function win() {
//             yourHand.push(compHand[cCard])
//         }
//     )
//     win.then(
//             compHand.splice(cCard, 1),
//             console.log("promise worked")
//         )
//         // yourHand.push(compHand[cCard]);
//         // compHand.splice(cCard, 1);

// }
// else {
//     console.log("nothing")
// }
