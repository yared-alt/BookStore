import { createSlice } from "@reduxjs/toolkit";
const initialState={
  cartItems:[],
  totalPrice:0,
  totalNumberOfItem:0,
  showCart:false,
}

const cartSlice=createSlice({

    name:"cart",
    initialState:initialState,
    reducers:{

      // showcart:(state)=>{
      //   state.showCart=!showCart;
      // },

        addToCart:(state, action)=>{
           const existingItems=state.cartItems.find((item)=>item.id === action.payload.id);

           if (!existingItems) {
             state.cartItems.push(action.payload);
             state.totalNumberOfItem++;
             state.totalPrice += Number(action.payload.price);
           }else{
            alert("item is exist!");
            const index = state.cartItems.findIndex(item=>item.id === action.payload.id);
            state.cartItems[index].quantity++;
            state.cartItems[index].totalQuantityPrice 
            += Number(state.cartItems[index].price);
            state.totalPrice += action.payload.price;
            state.totalNumberOfItem++;


           }
        },
        removeFromCart:(state,action)=>{
          const existingItems=state.cartItems.find((item)=>item.id === action.payload.id);
          const index=state.cartItems.findIndex(element=>element.id== action.payload.id);
          if (state.cartItems[index].quantity === 1) {
              
          }else{
            state.cartItems[index].quantity--;
            state.cartItems[index].totalQuantityPrice -= action.payload.price;
            state.totalNumberOfItem--;

            state.totalPrice -= action.payload.price;
          }
        }
    }
})

export const {addToCart, removeFromCart}=cartSlice.actions;
export const cartItemsSelector=(state)=>state.cart.cartItems;
export const totalNumberOfItemselector=(state)=>state.cart.totalNumberOfItem;
export const totalSelector=(state)=>state.cart.totalPrice;
// export const totalQuantityPrice=(state)=>state.cart.totalQuantityPrice;

export default cartSlice.reducer;