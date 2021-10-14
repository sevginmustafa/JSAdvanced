class List {
    constructor() {
        this.collection = [];
        this.size = this.collection.length;
    }

    add(element) {
        this.collection.push(element);
        this.size++;
        return this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));