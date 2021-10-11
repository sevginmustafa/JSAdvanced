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

    return {
        face: face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

console.log(createCard('A', 'S').toString());
console.log(createCard('10', 'H').toString());
console.log(createCard('1', 'C').toString());