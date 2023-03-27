// Giao diện trạng thái gồm có các phương thức đại diện 
// cho các chức năng của mỗi trạng thái
interface State {
    order: Order;

    cancelOrder() : void;
    verifyPayment() : void;
    shipOrder() : void;
}



//Khi lớp order được gọi, sẽ phụ thuộc vào trạng thái hiện tại của đơn hàng
// các hành động như xác nhận, hủy đơn hàng,.. được thực hiện sẽ lập tức chuyển sang một trạng thái khác
//và thông báo cho người dùng

export class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShipedState: State;
    public orderBeingPrepared: State;

    public currentState: State; // trạng thái hiện tại của đơn hàng

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShipedState = new OrderShippedState(this);
        this.orderBeingPrepared = new OrderBeingPrepared(this);

        this.setState(this.paymentPendingState); // trạng thái mặc định của đơn hàng
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getCurrentState(): State{
        return this.currentState;
    }
}


//Lớp hủy đơn hàng
class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log('Đơn hàng này đã được hủy !');
        this.order.setState(this.order.cancelledOrderState);
    }

    public verifyPayment() {
        console.log('Đơn hàng của bạn đã hủy, không thể xác nhận !');
    }

    public shipOrder() {
        console.log('Đơn hàng của bạn đã hủy, không thể giao hàng !');
    }
}


//Lớp chờ xác nhận 
class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Đang hủy đơn hàng...');
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log('Đã xác nhận, đơn hàng sẽ được vận chuyển trong thời gian sớm nhất !');
        this.order.setState(this.order.orderBeingPrepared);
    }
    shipOrder() {
        console.log('Không thể vận chuyển , đơn hàng đang trong trạng thái chờ');
    }
}


//Lớp chờ vận chuyển
class OrderBeingPrepared implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Đã hủy đơn hàng, bạn sẽ sớm được hoàn lại tiền ...');
        this.order.setState(this.order.cancelledOrderState);
    }
    verifyPayment() {
        console.log('Đơn hàng đã được xác nhận !');
    }
    shipOrder() {
        console.log('Chuẩn bị vận chuyển ...');
        this.order.setState(this.order.orderShipedState);
    }
}


// Lớp vận chuyển
class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Đơn hàng đang được vận chuyển, bạn sẽ không thể hủy !');
    }
    verifyPayment() {
        console.log('Đơn hàng đã được xác nhận !');
    }
    shipOrder() {
        console.log('Đơn hàng đã được vận chuyển !');
    }
}


