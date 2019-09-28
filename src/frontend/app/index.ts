import Vue from 'vue';

import toCard from "./components/toCard.vue";
import msgModal from "./components/msgModal.vue";
import cardComponent from "./components/cardComponent.vue";
import cartPage from "./components/cartPage.vue";

import store from './index_vuex';
import { Card } from '../objects/Card';
import { testRun, init } from './CartTable';


var buttons = document.querySelectorAll(".cart-button");
let card = Card.Init();

store.commit('setCard', card);


/* Установка кнопок в корзину */
for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('id', 'b_' + i);
}

setTimeout(() => {

    for (let i = 0; i < buttons.length; i++) {
        new Vue({
            el: '#b_' + i,
            data: {
                product_id: buttons[i].getAttribute('product_id'),
                product_caption: buttons[i].getAttribute('product_caption'),
                product_price: buttons[i].getAttribute('product_price'),
                product_img: buttons[i].getAttribute('product_img'),
            },
            store: store,
            render: h => h(toCard)
        });
    }
});


new Vue({
    el: '#msg_modal',
    data: {},
    store: store,
    render: h => h(msgModal)
});

new Vue({
    el: '#card',
    data: {},
    store: store,
    render: h => h(cardComponent)
});

let cart_page = document.getElementById('cart_page');
if (cart_page) {

    new Vue({
        el: '#cart_page',
        data: {},
        store: store,
        render: h => h(cartPage)
    });
}
