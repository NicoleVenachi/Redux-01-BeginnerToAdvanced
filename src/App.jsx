
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notificstion from "./components/Notificstion";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true

function App() {


  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)

  //manejo logica de cart desde redux, lo tomo y lo actualizo en el server
  //1era forma de hacer http request, con useEffect
  const cart = useSelector(state => state.cart)

  useEffect(() => {

    //la primer vez, ejecuta esto, porque cart 'cambia'
    //entonces detengo eso 
    if (isFirstRender == true) {
      isFirstRender = false
      return
    }

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
      .catch((err) => {

        dispatch(uiActions.showNotification({
          open: true,
          message: 'sending request failed',
          type: 'error'
        }))
      })
  }, [cart])

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  // const cartItems = useSelector((state) => state.cart.itemsList)

  return (
    <div className="App">
      {
        // console.log(notification)
        //si existe la muestra. Internamente al cerrarla, ella se cierra tal cual
        notification && <Notificstion type={notification.type} message={notification.message} />
      }

      {
        //render condicional de list o login
        !isLoggedIn ? <Auth /> : <Layout />
      }
    </div>
  );
}

export default App;