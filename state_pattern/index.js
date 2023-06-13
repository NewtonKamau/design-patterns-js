const Order = require('./order');
const { OrderPendingState, OrderShippedState } = require('./orderState');

// Usage
const order = new Order();

order.process(); 

order.process()