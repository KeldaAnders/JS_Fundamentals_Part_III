/*jshint esversion: 6 */
/*Create a Deck object constructor. A deck should have the following functionality:

The Deck should contain the 52 standard cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random card
Deal should return the card that was dealt and remove it from the deck
Now create a Player object constructor. A Player should have the following functionality:

The Player should have a name
The Player should have a hand
The Player should be able to take a card (use the deck.deal method)
The Player should be able to discard a card */
window.onload = function() {
    function DeckConstructor() {
        console.log('##############');
        this.collectionOfCards = [];
        this.collectionOfCards.push(new CardConstructor(1, 'Ace of Spades', 'cards/s1.png'));
        this.collectionOfCards.push(new CardConstructor(2, 'Two of Spades', 'cards/s2.png'));
        this.collectionOfCards.push(new CardConstructor(3, 'Three of Spades', 'cards/s3.png'));
        this.collectionOfCards.push(new CardConstructor(4, 'Four of Spades', 'cards/s4.png'));
        this.collectionOfCards.push(new CardConstructor(5, 'Five of Spades', 'cards/s5.png'));
        this.collectionOfCards.push(new CardConstructor(6, 'Six of Spades', 'cards/s6.png'));
        this.collectionOfCards.push(new CardConstructor(7, 'Seven of Spades', 'cards/s7.png'));
        this.collectionOfCards.push(new CardConstructor(8, 'Eight of Spades', 'cards/s8.png'));
        this.collectionOfCards.push(new CardConstructor(9, 'Nine of Spades', 'cards/s9.png'));
        this.collectionOfCards.push(new CardConstructor(10, 'Ten of Spades', 'cards/s10.png'));
        this.collectionOfCards.push(new CardConstructor(11, 'Jack of Spades', 'cards/sj.png'));
        this.collectionOfCards.push(new CardConstructor(12, 'Queen of Spades', 'cards/sq.png'));
        this.collectionOfCards.push(new CardConstructor(13, 'King of Spades', 'cards/sk.png'));
        this.collectionOfCards.push(new CardConstructor(14, 'Ace of Hearts', 'cards/h1.png'));
        this.collectionOfCards.push(new CardConstructor(15, 'Two of Hearts', 'cards/h2.png'));
        this.collectionOfCards.push(new CardConstructor(16, 'Three of Hearts', 'cards/h3.png'));
        this.collectionOfCards.push(new CardConstructor(17, 'Four of Hearts', 'cards/h4.png'));
        this.collectionOfCards.push(new CardConstructor(18, 'Five of Hearts', 'cards/h5.png'));
        this.collectionOfCards.push(new CardConstructor(19, 'Six of Hearts', 'cards/h6.png'));
        this.collectionOfCards.push(new CardConstructor(20, 'Seven of Hearts', 'cards/h7.png'));
        this.collectionOfCards.push(new CardConstructor(21, 'Eight of Hearts', 'cards/h8.png'));
        this.collectionOfCards.push(new CardConstructor(22, 'Nine of Hearts', 'cards/h9.png'));
        this.collectionOfCards.push(new CardConstructor(23, 'Ten of Hearts', 'cards/h10.png'));
        this.collectionOfCards.push(new CardConstructor(24, 'Jack of Hearts', 'cards/hj.png'));
        this.collectionOfCards.push(new CardConstructor(25, 'Queen of Hearts', 'cards/hq.png'));
        this.collectionOfCards.push(new CardConstructor(26, 'King of Hearts', 'cards/hk.png'));
        this.collectionOfCards.push(new CardConstructor(27, 'Ace of Diamonds', 'cards/d1.png'));
        this.collectionOfCards.push(new CardConstructor(28, 'Two of Diamonds', 'cards/d2.png'));
        this.collectionOfCards.push(new CardConstructor(29, 'Three of Diamonds', 'cards/d3.png'));
        this.collectionOfCards.push(new CardConstructor(30, 'Four of Diamonds', 'cards/d4.png'));
        this.collectionOfCards.push(new CardConstructor(31, 'Five of Diamonds', 'cards/d5.png'));
        this.collectionOfCards.push(new CardConstructor(32, 'Six of Diamonds', 'cards/d6.png'));
        this.collectionOfCards.push(new CardConstructor(33, 'Seven of Diamonds', 'cards/d7.png'));
        this.collectionOfCards.push(new CardConstructor(34, 'Eight of Diamonds', 'cards/d8.png'));
        this.collectionOfCards.push(new CardConstructor(35, 'Nine of Diamonds', 'cards/d9.png'));
        this.collectionOfCards.push(new CardConstructor(36, 'Ten of Diamonds', 'cards/d10.png'));
        this.collectionOfCards.push(new CardConstructor(37, 'Jack of Diamonds', 'cards/dj.png'));
        this.collectionOfCards.push(new CardConstructor(38, 'Queen of Diamonds', 'cards/dq.png'));
        this.collectionOfCards.push(new CardConstructor(39, 'King of Diamonds', 'cards/dk.png'));
        this.collectionOfCards.push(new CardConstructor(40, 'Ace of Clubs', 'cards/c1.png'));
        this.collectionOfCards.push(new CardConstructor(41, 'Two of Clubs', 'cards/c2.png'));
        this.collectionOfCards.push(new CardConstructor(42, 'Three of Clubs', 'cards/c3.png'));
        this.collectionOfCards.push(new CardConstructor(43, 'Four of Clubs', 'cards/c4.png'));
        this.collectionOfCards.push(new CardConstructor(44, 'Five of Clubs', 'cards/c5.png'));
        this.collectionOfCards.push(new CardConstructor(45, 'Six of Clubs', 'cards/c6.png'));
        this.collectionOfCards.push(new CardConstructor(46, 'Seven of Clubs', 'cards/c7.png'));
        this.collectionOfCards.push(new CardConstructor(47, 'Eight of Clubs', 'cards/c8.png'));
        this.collectionOfCards.push(new CardConstructor(48, 'Nine of Clubs', 'cards/c9.png'));
        this.collectionOfCards.push(new CardConstructor(49, 'Ten of Clubs', 'cards/c10.png'));
        this.collectionOfCards.push(new CardConstructor(50, 'Jack of Clubs', 'cards/cj.png'));
        this.collectionOfCards.push(new CardConstructor(51, 'Queen of Clubs', 'cards/cq.png'));
        this.collectionOfCards.push(new CardConstructor(52, 'King of Clubs', 'cards/ck.png'));

    }

    function PlayerConstructor(name) {
        this.name = name;
        this.hand = [];
        // console.log(this.hand);
    }

    function CardConstructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    PlayerConstructor.prototype.takeCard = function(deck) {
        var card = deck.deal();
        this.hand.push(card);
        console.log('++++++++++ MY HAND ++++++++++++');
        console.log(this.hand.length);
        // console.log(this.hand); 
        return this;
    };



  
    PlayerConstructor.prototype.reset = function() {
        this.hand = [];
        return this;
    };


    PlayerConstructor.prototype.showHand = function(showCardDiv) {
        this.showhand = [];
        showCardDiv.innerHTML = "";
        for (var i = 0; i < this.hand.length; i++) {
            this.showhand.push(this.hand[i].name);
            showCardDiv.innerHTML += '<img src="' + this.hand[i].image + '" alt="' + this.hand[i].name + '">';
        }
        console.log(this.showhand);
        console.log(showCardDiv);
        return showCardDiv;
    };
    DeckConstructor.prototype.deal = function() {
        var randomIndex = Math.floor(Math.random() * (this.collectionOfCards.length - 0)) + 0;

        console.log(this.collectionOfCards.length);
        console.log(randomIndex);
        this.dealtCard = this.collectionOfCards[randomIndex];
        var removed = this.collectionOfCards.splice(randomIndex, 1);
        console.log('-------------------------------------------');
        console.log(this.dealtCard);
        console.log(this.dealtCard.name);

        return this.dealtCard;
        //pick a random card from the collectionOfCards;
        //pop the random card from collectionOfCards
        //return that card.

    };

    DeckConstructor.prototype.shuffle = function() {
        //Randomly change the order of the cards;
        var m = this.collectionOfCards.length;
        var t;
        var i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = this.collectionOfCards[m];
            this.collectionOfCards[m] = this.collectionOfCards[i];
            this.collectionOfCards[i] = t;

        }
        console.log('shuffle');
        return this;
    };

    DeckConstructor.prototype.reset = function() {
        this.collectionOfCards = [];
        this.collectionOfCards.push(new CardConstructor(1, 'Ace of Spades', 'cards/s1.png'));
        this.collectionOfCards.push(new CardConstructor(2, 'Two of Spades', 'cards/s2.png'));
        this.collectionOfCards.push(new CardConstructor(3, 'Three of Spades', 'cards/s3.png'));
        this.collectionOfCards.push(new CardConstructor(4, 'Four of Spades', 'cards/s4.png'));
        this.collectionOfCards.push(new CardConstructor(5, 'Five of Spades', 'cards/s5.png'));
        this.collectionOfCards.push(new CardConstructor(6, 'Six of Spades', 'cards/s6.png'));
        this.collectionOfCards.push(new CardConstructor(7, 'Seven of Spades', 'cards/s7.png'));
        this.collectionOfCards.push(new CardConstructor(8, 'Eight of Spades', 'cards/s8.png'));
        this.collectionOfCards.push(new CardConstructor(9, 'Nine of Spades', 'cards/s9.png'));
        this.collectionOfCards.push(new CardConstructor(10, 'Ten of Spades', 'cards/s10.png'));
        this.collectionOfCards.push(new CardConstructor(11, 'Jack of Spades', 'cards/sj.png'));
        this.collectionOfCards.push(new CardConstructor(12, 'Queen of Spades', 'cards/sq.png'));
        this.collectionOfCards.push(new CardConstructor(13, 'King of Spades', 'cards/sk.png'));
        this.collectionOfCards.push(new CardConstructor(14, 'Ace of Hearts', 'cards/h1.png'));
        this.collectionOfCards.push(new CardConstructor(15, 'Two of Hearts', 'cards/h2.png'));
        this.collectionOfCards.push(new CardConstructor(16, 'Three of Hearts', 'cards/h3.png'));
        this.collectionOfCards.push(new CardConstructor(17, 'Four of Hearts', 'cards/h4.png'));
        this.collectionOfCards.push(new CardConstructor(18, 'Five of Hearts', 'cards/h5.png'));
        this.collectionOfCards.push(new CardConstructor(19, 'Six of Hearts', 'cards/h6.png'));
        this.collectionOfCards.push(new CardConstructor(20, 'Seven of Hearts', 'cards/h7.png'));
        this.collectionOfCards.push(new CardConstructor(21, 'Eight of Hearts', 'cards/h8.png'));
        this.collectionOfCards.push(new CardConstructor(22, 'Nine of Hearts', 'cards/h9.png'));
        this.collectionOfCards.push(new CardConstructor(23, 'Ten of Hearts', 'cards/h10.png'));
        this.collectionOfCards.push(new CardConstructor(24, 'Jack of Hearts', 'cards/hj.png'));
        this.collectionOfCards.push(new CardConstructor(25, 'Queen of Hearts', 'cards/hq.png'));
        this.collectionOfCards.push(new CardConstructor(26, 'King of Hearts', 'cards/hk.png'));
        this.collectionOfCards.push(new CardConstructor(27, 'Ace of Diamonds', 'cards/d1.png'));
        this.collectionOfCards.push(new CardConstructor(28, 'Two of Diamonds', 'cards/d2.png'));
        this.collectionOfCards.push(new CardConstructor(29, 'Three of Diamonds', 'cards/d3.png'));
        this.collectionOfCards.push(new CardConstructor(30, 'Four of Diamonds', 'cards/d4.png'));
        this.collectionOfCards.push(new CardConstructor(31, 'Five of Diamonds', 'cards/d5.png'));
        this.collectionOfCards.push(new CardConstructor(32, 'Six of Diamonds', 'cards/d6.png'));
        this.collectionOfCards.push(new CardConstructor(33, 'Seven of Diamonds', 'cards/d7.png'));
        this.collectionOfCards.push(new CardConstructor(34, 'Eight of Diamonds', 'cards/d8.png'));
        this.collectionOfCards.push(new CardConstructor(35, 'Nine of Diamonds', 'cards/d9.png'));
        this.collectionOfCards.push(new CardConstructor(36, 'Ten of Diamonds', 'cards/d10.png'));
        this.collectionOfCards.push(new CardConstructor(37, 'Jack of Diamonds', 'cards/dj.png'));
        this.collectionOfCards.push(new CardConstructor(38, 'Queen of Diamonds', 'cards/dq.png'));
        this.collectionOfCards.push(new CardConstructor(39, 'King of Diamonds', 'cards/dk.png'));
        this.collectionOfCards.push(new CardConstructor(40, 'Ace of Clubs', 'cards/c1.png'));
        this.collectionOfCards.push(new CardConstructor(41, 'Two of Clubs', 'cards/c2.png'));
        this.collectionOfCards.push(new CardConstructor(42, 'Three of Clubs', 'cards/c3.png'));
        this.collectionOfCards.push(new CardConstructor(43, 'Four of Clubs', 'cards/c4.png'));
        this.collectionOfCards.push(new CardConstructor(44, 'Five of Clubs', 'cards/c5.png'));
        this.collectionOfCards.push(new CardConstructor(45, 'Six of Clubs', 'cards/c6.png'));
        this.collectionOfCards.push(new CardConstructor(46, 'Seven of Clubs', 'cards/c7.png'));
        this.collectionOfCards.push(new CardConstructor(47, 'Eight of Clubs', 'cards/c8.png'));
        this.collectionOfCards.push(new CardConstructor(48, 'Nine of Clubs', 'cards/c9.png'));
        this.collectionOfCards.push(new CardConstructor(49, 'Ten of Clubs', 'cards/c10.png'));
        this.collectionOfCards.push(new CardConstructor(50, 'Jack of Clubs', 'cards/cj.png'));
        this.collectionOfCards.push(new CardConstructor(51, 'Queen of Clubs', 'cards/cq.png'));
        this.collectionOfCards.push(new CardConstructor(52, 'King of Clubs', 'cards/ck.png'));

    };

    var newDeck = new DeckConstructor();
    var newPlayer;
    var showDeckDiv = document.getElementById('showDeck');
    var showCardDiv = document.getElementById('showCards');
    var discardForm = document.getElementById( 'discardForm' );
    var selectCard = document.getElementById("discardForm");
    var displayDiscarded = document.getElementById("displayDiscarded");
    var showCardCount = document.getElementById('handCardCount');
    
    function showDeck() {
        showDeckDiv.innerHTML = "";
        for (var i = 0; i < newDeck.collectionOfCards.length; i++) {
          showDeckDiv.innerHTML += '<img src="' + newDeck.collectionOfCards[i].image + '" alt="' + newDeck.collectionOfCards[i].name + '">';
        }
        return showDeckDiv;
    }
    
    function hideDeck() {
        showDeckDiv.innerHTML = "";
        for (var i = 0; i < newDeck.collectionOfCards.length; i++) {
          showDeckDiv.innerHTML += '<img src="cards/b1fv.png" alt="back of card">';
        }
        return showDeckDiv;
    }
    
    function hiddenHand() {
      showCardDiv.innerHTML = "";
      discardForm.innerHTML = "";
      
      for (var i = 0; i < newPlayer.hand.length; i++) {
          var cardNumber = i+1;
          showCardDiv.innerHTML += '<img src="cards/b1fv.png" alt="back of card">';
          discardForm.innerHTML += ' <option>' + cardNumber +'</option>';
      }
    
      return showCardDiv.innerHTML;
    }
    
    function discardCard() {
      displayDiscarded.innerHTML = displayDiscarded.innerHTML;
      // console.log(selectCard);
      var discardedCard = selectCard.selectedIndex;
      // console.log(selectCard.selectedIndex);
      displayDiscarded.innerHTML+=newPlayer.hand[discardedCard].name+ ' - ' ;
      var removed = newPlayer.hand.splice(discardedCard, 1);
      return removed;
    }
    
    function playerStatus() {
        showCardCount.innerHTML = '<span>' + newPlayer.name + ' has ' + newPlayer.hand.length + ' cards!</span>';
        return showCardCount.innerHTML;
    }
    
     function showHandUpdate() {
      newPlayer.showHand(showCardDiv);
      return newPlayer.showHand;
    }

    document.getElementById('makePlayer').onclick = function player() {
        var playerName = document.getElementById('playerName').value;
        newPlayer = new PlayerConstructor(playerName);
        var displayPlayerName = document.getElementById('displayPlayerName');
        displayPlayerName.innerHTML = 'Hello ' + newPlayer.name +'!';
        showDeck();
        showHandUpdate();
        playerStatus();
        return newPlayer;
    };


    document.getElementById('shuffle').onclick = function shuffleOnclick() {
        newDeck.shuffle();
        showDeck();
    };

    document.getElementById('deal').onclick = function dealOnclick() {
        hideDeck();
        newPlayer.takeCard(newDeck);
        console.log('deal');
        playerStatus();
        hiddenHand();
    };
    
    document.getElementById('discard').onclick = function discardOnclick() {
      
        hideDeck();
        discardCard();
        playerStatus();
        hiddenHand();
    };

    document.getElementById('showHand').onclick = function showHandOnclick() {
        showHandUpdate();
    };

    document.getElementById('reset').onclick = function resetOnclick() {
      var displayDiscarded = document.getElementById("displayDiscarded");
        displayDiscarded.innerHTML ="Discarded Cards:";
        newDeck.reset();
        newPlayer.reset();
        console.log(newDeck.collectionOfCards);
        hiddenHand();
        playerStatus();
        showDeck();
    };
};

