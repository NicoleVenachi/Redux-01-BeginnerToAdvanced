
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
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