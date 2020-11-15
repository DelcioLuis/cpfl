
import produce from "immer";



export default function wishlist(state=[], action){
    switch(action.type){
        case "@wishlist/ADD_LOVE":
          return produce(state, draft => {

            const banhsdogproIndex = draft.findIndex(p => p.id == action.banhsdogpro.id);

            if (banhsdogproIndex >= 0){

              draft.splice(banhsdogproIndex, 1);

            }else{ 
              draft.push({
                ...action.banhsdogpro,
                amount: 1,
              }) ;
            }
            
          });
        
        case "@wishlist/REMOVE_LOVE":
          return produce(state, draft => {
            const banhsdogproIndex = draft.findIndex(p => p.id == action.id);

          if (banhsdogproIndex >= 0){
            draft.splice(banhsdogproIndex, 1);
          }
            
          })


        default:
            return state;
    }
    
}
