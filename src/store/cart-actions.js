import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

//creo thunk, para parte asincrona de send
export const sendCartData = (cart) =>{
  return async (dispatch) =>{

    //peticiones manejos los errores, y notifiquemos cuando se update el estado
    //envio esado a la vez que peticion
    dispatch(uiActions.showNotification({
      open: true,
      message: 'sending request',
      type: 'warning'
    }))
    const sendRequest = async () => {
      const res = await fetch(import.meta.env.VITE_REACT_APP_FIREBASE_REALTIMEDB_URL + 'cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      //respuesta positiva, me devulve la data
      const data = await res.json()
    }

    sendRequest()
      .then(() => {
        //mando estado a la notification, si es succesfull
        dispatch(uiActions.showNotification({
          open: true,
          message: 'request sent to DB succesfully',
          type: 'success'
        }))
      })
      .catch(() => {

        dispatch(uiActions.showNotification({
          open: true,
          message: 'sending request failed',
          type: 'error'
        }))
      })

  }
}

//creo otr para traer daata del DB, y actualizar el Front end

export const fetchData = () =>{
  return async(dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(import.meta.env.VITE_REACT_APP_FIREBASE_REALTIMEDB_URL + 'cartItems.json', {
        method: 'GET'
      })

      //respuesta positiva, me devulve la data
      const data = await res.json()
      return data
    }

    fetchHandler()
      .then(data=>{
        dispatch(cartActions.replaceData(data))
      })
      .catch(()=>{
        dispatch(uiActions.showNotification({
          open: true,
          message: 'sending request failed',
          type: 'error'
        }))
      })


  }
}