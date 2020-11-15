import { combineReducers} from "redux";

import cart from "./cart/reducer";

import wishlist from "./wishlist/reducer";

import sercart from "./sercart/reducer";
import wserlist from "./wserlist/reducer";


export default combineReducers({
    cart,
    wishlist,
    sercart,
    wserlist
})