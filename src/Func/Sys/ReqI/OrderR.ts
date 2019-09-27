import { OrderI } from "../../Order/TOrder";

export interface CheckoutI {
    user : {
        name: string,
        surname: string,
        phone: string,
    },
    order: OrderI

    
}