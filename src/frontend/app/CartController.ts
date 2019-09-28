import store from './AppVuex';
import * as FFOrder from '../../Func/Order/FFOrder';

/**
 * Оформление заказа
 */
export default class CartController {

    /**
    * Добавить в корзину
    * @param data 
    */
    public onAddCart(data: any): void {

        const order = FFOrder.fAddProduct(parseInt(data.product_id))
            (data.product_caption)
            (parseFloat(data.product_price))
            (1)
            (data.product_img);

        store.commit("setOrder", order);
        store.commit("setShowMsgModal", 'Товар добавлен в корзину');
        setTimeout(() => {
            store.commit("setShowMsgModal", null);
        }, 1000);

    }


    /**
     * Показать корзину
     */
    public onShowCart() {
        store.commit("setShowCart", true);
    }

    /**
     * Скрыть корзину
     */
    public onHideCart() {
        store.commit("setShowCart", false);
    }

    /**
     * Офрмить заказ
     */
    public async checkout() {
        store.commit('setOnLoad', true);
        store.commit('setCartFormError', false);
       // let cart = store.state.cart;
       // let user = store.state.user;

       /// let order = store.state.order;

       // let resp = await order.Checkout(user, cart);
       // store.commit('setCartErrors', resp.errors);
        if (resp.ok) {
           // cart.clear();

            store.commit('setOnLoad', false);
            this.onHideCart();

            store.commit('setShowMsgModal', 'Спасибо за оформление заказа');
            setTimeout(() => {
                store.commit('setShowMsgModal', null);
            }, 4000)

        } else {
            store.commit('setCartFormError', true);

        }

    }

}


