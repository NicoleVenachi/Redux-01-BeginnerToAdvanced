
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const fbAPIUrl = import.meta.env.VITE_REACT_APP_FIREBASE_REALTIMEDB_URL


function App() {

  //manejo logica de cart desde redux, lo tomo y lo actualizo en el server
  //1era forma de hacer http request, con useEffect
  const cart = useSelector(state => state.cart)
  useEffect(() => {
    //peticiones manejos los errores, y notifiquemos cuando se update el estado

    const sendRequest = async () => {
      const res = await fetch(fbAPIUrl + 'cartItems.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })

      //respuesta positiva, me devulve la data
      const data = await res.json()
    }

    sendRequest();
  }, [cart])

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  // const cartItems = useSelector((state) => state.cart.itemsList)

  return (
    <div className="App">
      {
        //render condicional de list o login
        !isLoggedIn ? <Auth /> : <Layout />
      }
    </div>
  );
}

export default App;