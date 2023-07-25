import {createSlice} from '@reduxjs/toolkit'

//creoSlice para auth
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false
  },
  reducers: {
    addToCart(state, action) {
      //action payload sera la data del item
      const newItem = action.payload;
      
      //check if the item exists already on the state
      const itemExist = state.itemsList.find(item=> item.id === newItem.id)
      //si existe, devuelve un proxy object, i.e., esta haciendo una copia de 
      //ese elemento del estado, por lo mismo lo puedo modificar en el estado,
      //así sin mas
      
      if(itemExist) {
        //si existe, incremento la cantidad y el precio total
        
        //lo puedo modificar sin mas, pues tiene el elemento del estado
        itemExist.quantity++;
        itemExist.totalPrice += newItem.price
      }
      else {
        //sino existe, hago push del nuevo producto, y aumento la cantidad
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })

        state.totalQuantity++;
      }
      
    },
    removeFromCart(state, action) {
      //saco el item tomado
      const newItem = action.payload;
    },
    setShowCart(state) {
      state.showCart = !state.showCart
    }
  }
})

//exporto sus actions
export const cartActions = cartSlice.actions

//exporto el slice, para index
export default cartSlice
