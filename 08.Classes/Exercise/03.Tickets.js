function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const result = [];

    for (const el of arr) {
        let [destinationName, price, status] = el.split('|');
        result.push(new Ticket(destinationName, Number(price), status));
    }

    if (criteria == 'status') {
        return result.sort((a, b) => a.status.localeCompare(b.status));
    }
    else if (criteria == 'destination') {
        return result.sort((a, b) => a.destination.localeCompare(b.destination));
    }

    return result.sort((a, b) => a.price - b.price);
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));