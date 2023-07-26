
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notificstion from "./components/Notificstion";
import { fetchData, sendCartData } from "./store/cart-actions";

let isFirstRender = true

function App() {


  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)

  //manejo logica de cart desde redux, lo tomo y lo actualizo en el server
  //1era forma de hacer http request, con useEffect
  //2da, con thunks
  const cart = useSelector(state => state.cart)

  useEffect(() => {

    //la primer vez, ejecuta esto, porque cart 'cambia'
    //entonces detengo eso 
    if (isFirstRender == true) {
      isFirstRender = false
      return
    }

    if (cart.changed) {
      dispatch(sendCartData(cart))
    }

  }, [cart, dispatch])

  //otro use effect, para que al principio, traiga la data
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

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