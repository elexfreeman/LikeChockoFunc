import { OrderI } from "../../Func/Order/TOrder";
import axios from "axios";
import { apiUrl } from "../../Func/Config/Config";
import { UserI } from "../../Func/User/TUser";


const vAxios = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
    headers: {}
});


export const fCheckout =
    (user: UserI) =>
        async (order: OrderI) => {
            const resp =  await (vAxios.post(
                `/order/checkout`, {
                user: user,
                order: order
            }));
            return resp['data'];
        }