class Iterator {
    constructor (collection) {
        this.collection = collection;
    }
    //check if has next digit
    hasNext () {
        return this.index < this.collection.length;
    }
    //return the next element in the collection
    next () {
        return this.collection[this.index++]
    }
}
module.exports = Iterator;