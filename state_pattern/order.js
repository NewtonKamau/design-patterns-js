class Order {
    constructor () {
        this.state = new OrderPendingState(this);4
    }
    setState (state) {
        this.state = state;
    }
    process () {
        this.state.process();
    }


}
module.exports = Order;