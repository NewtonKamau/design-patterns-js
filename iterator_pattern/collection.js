const Iterator = require('./iterator');

class Collection {
    constructor () {
        this.items = [];
    }
    addItem (item) {
        this.items.push(item);
    }
    getIterator () {
        return new Iterator(this.items);
    }
}

module.exports = Collection;