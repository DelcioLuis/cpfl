
import produce from "immer";



export default function cart(state=[], action){
    switch(action.type){
        case "@cart/ADD":
          return produce(state = [], draft => {

            const compraIndex = draft.findIndex(p => p.id == action.compra.id);

            if (compraIndex >= 0){

              draft.splice(compraIndex, 1);

            }else{ 
              draft.push({
                ...action.compra,
              }) ;
            }

            
            
          });
        
        case "@cart/REMOVE":
          return produce(state, draft => {
            const compraIndex = draft.findIndex(p => p.id == action.id);

            

          if (compraIndex >= 0){
            draft.splice(compraIndex, 1);
          }
            
          })


          case "@cart/ALLREVE":
          return produce(state = [], draft => {
            draft.splice();
          })

        default:
            return state;
    }
    
}
