export function servaddToLove(banhsdogserv){
    return{
        type: "@servwishlist/ADD_LOVE",
        banhsdogserv, 
    }
};

export function servremoveLove(id){
    return{
        type: "@servwishlist/REMOVE_LOVE",
        id,
    }
};
