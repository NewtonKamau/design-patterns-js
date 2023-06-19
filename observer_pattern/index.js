const { StockMarket, StockTrader } = require('./observer');

const stockMarket = new StockMarket();

const trader1 = new StockTrader('Trader One')
const trader2 = new StockTrader('Trader Two')
const trader3 = new StockTrader('Trader Three');

stockMarket.addObserver(trader1)
stockMarket.addObserver(trader2)
stockMarket.addObserver(trader3);


stockMarket.setStockPrice(100.50);

stockMarket.removeObserver(trader2);

stockMarket.setStockPrice(98.75);