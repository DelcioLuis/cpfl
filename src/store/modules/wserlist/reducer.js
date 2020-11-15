
import produce from "immer";



export default function servwishlist(state=[], action){
    switch(action.type){
        case "@servwishlist/ADD_LOVE":
          return produce(state, draft => {

            const banhsdogservIndex = draft.findIndex(p => p.id == action.banhsdogserv.id);

            if (banhsdogservIndex >= 0){

              draft.splice(banhsdogservIndex, 1);

            }else{ 
              draft.push({
                ...action.banhsdogserv,
                amount: 1,
              }) ;
            }
            
          });
        
        case "@servwishlist/REMOVE_LOVE":
          return produce(state, draft => {
            const banhsdogservIndex = draft.findIndex(p => p.id == action.id);

          if (banhsdogservIndex >= 0){
            draft.splice(banhsdogservIndex, 1);
          }
            
          })


        default:
            return state;
    }
    
}
