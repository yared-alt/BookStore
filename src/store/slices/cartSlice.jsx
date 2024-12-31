import { createSlice } from "@reduxjs/toolkit";
const initialState={
  cartItems:[],
  totalPrice:0,
  totalNumberOfItem:0,
  repeatedItemNum:0
}
const cartSlice=createSlice({

    name:"cart",
    initialState:initialState,
    reducers:{

        addToCart:(state, action)=>{
           const existingItems=state.cartItems.find((item)=>item.id===action.payload.id);

           if (!existingItems) {
             state.cartItems.push(action.payload);
             state.totalNumberOfItem++;
             state.totalPrice += Number(action.payload.price);
           }else{
            alert("item is exist!");
            // state.totalPrice += Number(action.payload.price);
            // state.totalNumberOfItem++;
            // i have to add the functionality of increasing the number of quantity of existed prodact later
            // state.repeatedItemNum=existingItems.
            // console.log(existingItems);
            
           }
        },
        removeFromCart:(state,action)=>{
          // state.cart
        }
    }
})

export const {addToCart, removeFromCart}=cartSlice.actions;
export const cartItemsSelector=(state)=>state.cart.cartItems;
export const totalNumberOfItemselector=(state)=>state.cart.totalNumberOfItem;
export const totalSelector=(state)=>state.cart.totalPrice;

export default cartSlice.reducer;