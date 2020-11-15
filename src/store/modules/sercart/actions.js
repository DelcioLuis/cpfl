export function seraddToCart(pedido){
    return{
        type: "@sercart/ADD",
        pedido, 
    }
};

export function serremoveToCart(id){
    return{
        type: "@sercart/REMOVE",
        id,
    }
};

export function serupdateAmoount(id, amount){
    return{
        type: "@sercart/UPDATE_AMOUNT",
        id,
        amount,
    }
};