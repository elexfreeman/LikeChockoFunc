import { User } from "./User";
import { Card } from "./Card";
import BaseObject from "./BaseObject";

/**
 * Заказ
 */
export class Order extends BaseObject {

    public city: string;
    public deliveryAddress: string;
    public comment: string;
    public deliveryDate: string;
    public deliveryTimeComment: string;

    /**
     * 
     * @param user - пользователь
     * @param card - его корзина
     */
    constructor() {
        super();      
    }

    /**
     * Оформить заказ
     */
    public async Checkout(user: User, card: Card) {
        this.ok = true;

        let resp = await this.axios.post(this.apiUrl + '/order/checkout', {
            user: user,
            card: card,
            order: this
        });      
        return resp['data'];
    }



}