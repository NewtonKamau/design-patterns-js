class OrderState{
    constructor (order) {
        this.order = order;
    }
    process () {
    }
}

class OrderPendingState extends OrderState{
    process () {
        console.log("Order is pending. Processing the order.....")
        //logic for processing the pending order
        this.order.setState(new OrderShippedState(this.order));
    }
}

class OrderShippedState extends OrderState {
    process () {
        console.log("Order has been shipped. Cannot process the order again.");
    }

}

module.exports = {
    OrderState,
    OrderPendingState,
    OrderShippedState
}
