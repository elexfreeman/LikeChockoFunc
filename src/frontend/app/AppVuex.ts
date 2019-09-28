import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { OrderI } from '../../Func/Order/TOrder';
import * as FFOrder from '../../Func/Order/FFOrder';

declare var window: any;
Vue.use(Vuex);


export interface RootState {
    order: OrderI
    showMsgModal: string;
    phone: string;
    showCart: boolean;
    onLoad: boolean;
    cartErrors: any[];
    cartFormError: boolean;
}

export const store: StoreOptions<RootState> = {
    /*дефолтный стайт*/
    state: {
        order: FFOrder.fGet(),
        showMsgModal: '',
        phone: window.phone,
        showCart: false,
        onLoad: false,
        cartErrors: <any>[],
        cartFormError: false

    },
    mutations: {
        setOrder(state: RootState, data: OrderI) {
            state.order = data;
        },
        setShowMsgModal(state: RootState, data: any) {
            state.showMsgModal = data;
        },
        setShowCart(state: RootState, data: any) {
            state.showCart = data;
        },
        setOnLoad(state: RootState, data: any) {
            state.onLoad = data;
        },
        setCartErrors(state: RootState, data: any) {
            state.cartErrors = data;
        },
        setCartFormError(state: RootState, data: any) {
            state.cartFormError = data;
        },
    }
};



export default new Vuex.Store(store);