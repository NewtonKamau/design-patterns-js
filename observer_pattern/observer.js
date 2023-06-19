//will use stockMarket for this example

//Subject (Observable)
class StockMarket{
    constructor () {
        this.stockPrice = 0;
        this.observers = [];
    }
    addObserver (observer) {
        this.observers.push(observer);
    }
    removeObserver (observer) {
        this.observers = this.observers.filter((obs)=>obs !==observer)
    }
    setStockPrice (price) {
        this.stockPrice = price;
        this.notifyObservers();
    }
    notifyObservers () {
        this.observers.forEach((observer)=>observer.update(this.stockPrice))
    }
}

//Observer
class StockTrader{
    constructor (name) {
        this.name = name;

    }
    update (price) {
        console.log(`${this.name} received an update. New stock price is:${price}`)
    }

}

module.exports = {
    StockTrader,
    StockMarket
}