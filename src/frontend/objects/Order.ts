import { User } from "./User";
import { Card } from "./Card";
import BaseObject from "./BaseObject";
import { ProductI } from "../../Func/Product/TProduct";
import { OrderI } from "../../Func/Order/TOrder";

/**
 * Заказ
 */
export class Order extends BaseObject {

    public data: OrderI;

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
            order: this.data,
        });
        return resp['data'];
    }



}