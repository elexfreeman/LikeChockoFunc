import { OrderI, OrderProductI } from "./TOrder";
import { TValidator } from '../TValidator';

/**
 * Дефлтный заказ
 */
export const fDefault = (): OrderI => {
    const order: OrderI = {
        city: '',
        delivery_address: '',
        comment: '',
        delivery_date: '',
        delivery_time_comment: '',
        products: [],
    };
    return fSave(order);
}

/**
 * Получить текущий заказ из кэша
 */
export const fGet = () => {
    try {
        const order: OrderI = <OrderI>JSON.parse(localStorage.getItem('order'));
        if (!order) throw 'error localStorage';

        const cV = new TValidator();

        cV.fSetData(order.city)
            .fDefault('');

        cV.fSetData(order.delivery_address)
            .fDefault('');

        cV.fSetData(order.delivery_address)
            .fDefault('');

        cV.fSetData(order.comment)
            .fDefault('');

        cV.fSetData(order.delivery_date)
            .fDefault('');

        cV.fSetData(order.delivery_time_comment)
            .fDefault('');

        cV.fSetData(order.products)
            .fDefault([]);

        return order;

    } catch (e) {
        console.log('Empty order');
    }

    return fDefault();
};

/**
 * сохранить заказ в кэш
 * @param order 
 */
export const fSave = (order: OrderI): OrderI => {
    localStorage.setItem('order', JSON.stringify(order))
    return order;
};

/* ************************** */
/* ф-и измнения */
/* ************************** */

export const fChangeCity = (sCity: string): OrderI => {
    const order = fGet();
    order.city = sCity;
    return fSave(order);
};

export const fChangeDeliveryAddress = (sDeliveryAddress: string): OrderI => {
    const order = fGet();
    order.delivery_address = sDeliveryAddress;
    return fSave(order);
};

export const fChangeComment = (sComment: string): OrderI => {
    const order = fGet();
    order.comment = sComment;
    return fSave(order);
};

export const fChangeDeliveryTimeComment = (sDeliveryTimeComment: string): OrderI => {
    const order = fGet();
    order.delivery_time_comment = sDeliveryTimeComment;
    return fSave(order);
};

export const fChangeDeliveryDate = (sDeliveryDate: string): OrderI => {
    const order = fGet();
    order.delivery_date = sDeliveryDate;
    return fSave(order);
};

export const fChangeProducts = (aProducts: OrderProductI[]): OrderI => {
    const order = fGet();
    order.products = aProducts;
    return fSave(order);
};

export const fChangeProductCount =
    (productId: number) =>
        (nCount: number): OrderI => {
            const products = fGet().products.map(product => {
                if (product.id == productId) {
                    product.count = nCount;
                }
                return product;
            });
            return fChangeProducts(products);
        }
/* ************************************* */
/* ************************************* */

/**
 * Добавить продукт в заказ
 * @param productId 
 */
export const fAddProduct =
    (productId: number) =>
        (sCaption: string) =>
            (nPrice: number) =>
                (nCount: number) =>
                    (sImg: string): OrderI => {
                        const order = fGet();
                        order.products.push({
                            product_id: productId,
                            caption: sCaption,
                            price: nPrice,
                            count: nCount,
                            img: sImg,
                        })
                        return fSave(order);
                    };