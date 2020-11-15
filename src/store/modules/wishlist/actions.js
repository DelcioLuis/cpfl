export function addToLove(banhsdogpro){
    return{
        type: "@wishlist/ADD_LOVE",
        banhsdogpro, 
    }
};

export function removeLove(id){
    return{
        type: "@wishlist/REMOVE_LOVE",
        id,
    }
};
