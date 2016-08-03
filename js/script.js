//CARDS

var deck = [];

var yourHand = [];
var compHand = [];

var warPot = [];

var yourHandVar = document.getElementById("yourHand")
var yourHandCard = document.getElementById("yourHand-card")
var compHandVar = document.getElementById("compHand")
var compHandCard = document.getElementById("compHand-card")

function Card(num, suit, color) {
    this.num = num;
    this.suit = suit;
    this.color = color;
}


var suits = ['heart', 'diamond', 'spade', 'club'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var color = ['red', 'black']


ranks.forEach(function(num) {
    suits.forEach(function(suit) {
        if ((suit == 'heart') || (suit == 'diamond')) {
            this.color = 'red';
        }
        else {
            this.color = "black";
        }
        deck.push(new Card(num, suit, color))
    })
})



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
            yourHand.push(deck[z]);
        }
        else {
            compHand.push(deck[z]);
        }
    }
    document.getElementById("yourCount").innerHTML = yourHand.length;
    document.getElementById("compCount").innerHTML = compHand.length;
    document.getElementById("fire").style.visibility = "visible";
    document.getElementById("deal").disabled = "true";
}

function cardCount() {
    document.getElementById("yourCount").innerHTML = yourHand.length;
    document.getElementById("compCount").innerHTML = compHand.length;
}

 

//PLAY GAME 

function fire() {
    
    findWinner();

    function findWinner() {
        document.getElementById("outcome").innerHTML = " ";
        yourHandCard.innerHTML = " ";
        compHandCard.innerHTML = " "
        cardCount()
        
        function win() {
            
            if (warPot.length == 0) {
            
            document.getElementById("outcome").innerHTML = "<p>You win!</p>"
            yourHand.push(compHand[0]);
            yourHand.push(yourHand.shift());
            compHand.splice(0, 1);
            
            $("#outcome").find("p").animate({opacity:"0"},1000).animate({bottom:"80px"},{duration: 1000, queue:false});
            
            
            
            
            //$("#" + hand + "-card").animate({opacity: "1"}, 100).animate({top: "-30px"}, {duration: 100, queue:false});
            
            }
            else {
                var potAndHand = warPot.concat(yourHand);
                yourHand = potAndHand;
                
                warPot.length = 0;
                document.getElementById("outcome").innerHTML = "<p>You won the war!</p>";
            }
            
        }

        function lose() {
            
            if (warPot.length == 0) {
            document.getElementById("outcome").innerHTML = "<p>You lose!</p>";

            compHand.push(yourHand[0]);
            compHand.push(compHand.shift());
            yourHand.splice(0, 1);
            
            $("#outcome").find("p").animate({opacity:"0"},1000).animate({bottom:"80px"},{duration: 1000, queue:false});

            }
            else {
                var potAndHand = warPot.concat(compHand);
                compHand = potAndHand;
                
                warPot.length = 0;

                document.getElementById("outcome").innerHTML = "<p>You lost the war!</p>";
            }
            

        }

        function war() {
            
            alert("tie tie tie");
            
            for (var i = 0; i < 4; i++) {
                warPot.push(yourHand[i]);
                yourHand.splice(i, 1);
                warPot.push(compHand[i]);
                compHand.splice(i, 1);

            }
            
            shuffle(warPot);
            findWinner();


        }

        if (yourHand[0].num > compHand[0].num) {
            setTimeout(function(){displayCards("yourHand", yourHand[0])}, 250 );
            setTimeout(function(){displayCards("compHand", compHand[0]), win(), cardCount()}, 900 );

        }
        else if (yourHand[0].num < compHand[0].num) {
            setTimeout(function(){displayCards("yourHand", yourHand[0])}, 250 );
            setTimeout(function(){displayCards("compHand", compHand[0]), lose(), cardCount()}, 900 );
        }
        else {
            setTimeout(function(){displayCards("yourHand", yourHand[0])}, 250 );
            setTimeout(function(){displayCards("compHand", compHand[0])}, 900 );
            setTimeout(function(){war()}, 1000)
            
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


            document.getElementById(hand + "-card").innerHTML = `
            <div class="card">
                <div class="num">
                    <p style='font-size: 30px; color:` + card.color + `'>` + faceCard + `</p>
                    <img src='` + card.suit + `.png' width='20px'>
                </div>
                <div class="inner-card">
                    <img src='` + card.suit + `.png' width='120px'>
                </div>
                <div class="num flipped">
                <p style='font-size: 30px; color:` + card.color + `'>` + faceCard + `</p>
                    <img src='` + card.suit + `.png' width='20px'>
                    
                </div>
            </div>`
            
            if (document.getElementById(hand + "-card").innerHTML != " ") {
                $("#" + hand + "-card").css("opacity", "0");
                $("#" + hand + "-card").animate({opacity: "1"}, 100).animate({top: "-30px"}, {duration: 100, queue:false});
                $("#" + hand + "-card").animate({top:"0px"}, 100);
            }
        }
    }
}
