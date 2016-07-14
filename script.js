//CARDS

var yourHand = []
var compHand = []

var deck = [];

function Card(num, suit, color) {
    this.num = num;
    this.suit = suit;
    //this.colour = "black"
    //this.key = key;
}


var suits = ['heart', 'diamond', 'spade', 'club'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

ranks.forEach(function(num) {
    suits.forEach(function(suit) {
        deck.push(new Card(num, suit))
    })
})

console.log(deck);

//DEAL CARDS

function shuffle(toShuff) {
    var j, x, i;
    for (i = toShuff.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = toShuff[i - 1];
        toShuff[i - 1] = toShuff[j];
        toShuff[j] = x;
    }
}

function deal() {
    shuffle(deck);

    for (var z = 0; z < deck.length; z++) {
        if (z % 2 === 0) {
            yourHand.push(deck[z])
        }
        else {
            compHand.push(deck[z])
        }
    }




console.log("your deck has " + yourHand.length + " cards");
console.log(yourHand);
console.log("the computer has " + compHand.length + " cards");
console.log(compHand);

document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p>";
document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + " cards in its hand</p>";
document.getElementById("deal").innerHTML = "Fire!";
}



//PLAY GAME 

function fire() {
    function rand(min, max) {

        var offset = min;
        var range = (max - min) + 1;

        var randNum = Math.floor(Math.random() * range) + offset;
        return randNum;
    }

    var hCard = rand(0, yourHand.length - 1);
    var cCard = rand(0, compHand.length - 1);

    console.log("human card is " + hCard);
    console.log("computer card is " + cCard);

    findWinner(hCard, cCard);
    document.getElementById("your-hand").innerHTML = "<p>You have " + yourHand.length + " cards in your hand</p>";
    document.getElementById("comp-hand").innerHTML = "<p>The computer has " + compHand.length + " cards in its hand</p>";

    function cleanHand() {
        yourHand = yourHand.filter(function(n) {
            return n != undefined;
        });
        compHand = compHand.filter(function(n) {
            return n != undefined;
        });
    }

    function findWinner(num1, num2) {

        function win() {
            yourHand.push(compHand[num2]);
            compHand.splice(cCard, 1);
            document.getElementById("outcome").innerHTML = "<p>You win!</p>";
            console.log(yourHand);
            console.log(compHand);
            //cleanHand();
        }

        function lose() {
            compHand.push(yourHand[num1]);
            yourHand.splice(hCard, 1);
            document.getElementById("outcome").innerHTML = "<p>You lose!</p>";
            console.log(yourHand);
            console.log(compHand);
            //cleanHand();
        }

        function war() {
            var pot = [];
            alert("tie")
            for (var i = 1; i <= 3; i++) {
                pot.push(yourHand[i])
                pot.push(compHand[i])
            }
            console.log(pot)
            //shuffle(pot)
            //findWinner(yourHand[4], compHand[4])


        }

        if ((yourHand[num1].num) > (compHand[num2].num)) {
            displayCards("your-hand", yourHand[num1]);
            displayCards("comp-hand", compHand[num2]);
            win();



        }
        else if ((yourHand[num1].num) < (compHand[num2].num)) {
            displayCards("your-hand", yourHand[num1]);
            displayCards("comp-hand", compHand[num2]);
            lose();
        }

        else {
            displayCards("your-hand", yourHand[num1]);
            displayCards("comp-hand", compHand[num2]);
            document.getElementById("outcome").innerHTML = "<p>Tie!</p>";
            war();

        }

        function displayCards(hand, card) {
            var faceCard = card.num;
            switch (faceCard) {
                case 11:
                    faceCard = "J";
                    break;
                case 12:
                    faceCard = "Q";
                    break;
                case 13:
                    faceCard = "K";
                    break;
                case 14:
                    faceCard = "A";
            }

            //document.getElementById(hand + "-card").innerHTML = "<p style='font-size: 30px'>" + faceCard + "</p><img src='" + card.suit + ".png' width='20px'>";

            document.getElementById(hand + "-card").innerHTML = `
            <div class="card">
                <div class="num">
                    <p style='font-size: 30px'>` + faceCard + `</p>
                    <img src='` + card.suit + `.png' width='20px'>
                </div>
                <div class="inner-card">
                    <img src='` + card.suit + `.png' width='120px'>
                </div>
                <div class="num flipped">
                <p style='font-size: 30px'>` + faceCard + `</p>
                    <img src='` + card.suit + `.png' width='20px'>
                    
                </div>
            </div>`

            // if ((card.suit == 'heart') || (card.suit == 'diamond')) {
            //     alert("got it")
            //     document.getElementsByClassName("num").style.color = "red"

            // }
        }
    }
}
