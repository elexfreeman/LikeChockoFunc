import Dexie from 'dexie';
const db: any = new Dexie("ChockoDB");

export const init = () => {
    db.version(1).stores({
        order_products: "++id, product_id, count, price",
    });
    db.open().catch(function (e: any) {
        console.error("Open failed: " + e.stack);
    })
}

export const faAddProduct = async () => {
    return new Promise((resolve, reject) => {
        db.transaction('rw', db.order_products, () => {

            db.order_products.add({
                product_id: 1,
                count: 1,
                price: 100,
            });

            resolve(true)

        }).catch( (e: any) => {
            console.error(e.stack);
            reject(e);
        });
    })
}

export const faRemoveProduct = async () => {

}

export const faListProduct = async () => {
    return new Promise((resolve, reject) => {
        let resp: any = [];

        db.transaction('rw', db.order_products, function () {

            db.order_products.each( (order_product: any) => {
                resp.push(order_product);
            });

            resolve(resp);

        }).catch(function (e: any) {
            console.error(e.stack);
            reject(e);
        });
    });

}
