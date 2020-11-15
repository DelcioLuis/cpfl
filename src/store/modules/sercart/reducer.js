
import produce from "immer";



export default function sercart(state=[], action){
    switch(action.type){
        case "@sercart/ADD":
          return produce(state = [], draft => {

            const pedidoIndex = draft.findIndex(p => p.id == action.pedido);

            if (pedidoIndex >= 0){

              draft.splice(pedidoIndex, 1);

            }else{ 
              draft.push({
                ...action.pedido,
              }) ;
            }

            
            
          });
        
        case "@sercart/REMOVE":
          return produce(state, draft => {
            const banhsdogservIndex = draft.findIndex(p => p.id == action.id);

            

          if (banhsdogservIndex >= 0){
            draft.splice(banhsdogservIndex, 1);
          }
            
          })

          case "@sercart/UPDATE_AMOUNT": {
            if (action.amount <= 0){
              return state;
            }
            
            return produce( state, draft => {
              const banhsdogservIndex = draft.findIndex(p => p.id == action.id);

              if (banhsdogservIndex >= 0){
                draft[banhsdogservIndex].amount = Number(action.amount);
              }
            })

          }

        default:
            return state;
    }
    
}
