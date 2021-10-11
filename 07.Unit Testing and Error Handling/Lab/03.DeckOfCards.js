function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const suits = {
            'S': '\u2660 ',
            'H': '\u2665 ',
            'D': '\u2666 ',
            'C': '\u2663 '
        };

        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (!faces.includes(face)) {
            throw new Error;
        }  
        
        if (suits[suit]==undefined) {
            throw new Error;
        }

        return {
            face: face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }
    const result = [];

    for (let i = 0; i < cards.length; i++) {
        const face = cards[i].substring(0, cards[i].length - 1);
        const suit = cards[i][cards[i].length - 1];

        try {
            result.push(createCard(face, suit));
        }
        catch {
            console.log(`Invalid card: ${face + suit}`);
            return;
        }
    }

    console.log(result.join(' '));
}


printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);