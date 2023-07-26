import { useDispatch } from "react-redux";
import Cart from "./Cart";
import "./Header.css";
import { authActions } from "../store/auth-slice";
const Header = () => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <div className="header-btns">
              <Cart />

              <button className="logout-btn" onClick={logoutHandler}>
                Logout
              </button>
            </div>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
