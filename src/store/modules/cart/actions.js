export function addToCart(compra){
    return{
        type: "@cart/ADD",
        compra, 
    }
};

export function removeToCart(id){
    return{
        type: "@cart/REMOVE",
        id,
    }
};

export function updateAmoount(id, amount){
    return{
        type: "@cart/UPDATE_AMOUNT",
        id,
        amount,
    }
};


export function SendData(){
    return{
        type: "@cart/ALLREVE",
    }
};