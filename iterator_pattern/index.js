const Collection = require('./collection');

const collection = new Collection();
collection.addItem('Item one');
collection.addItem('Item two')
collection.addItem('Item three');

const iterator = collection.getIterator();
while (iterator.hasNext()) {
    console.log(iterator.next())
}