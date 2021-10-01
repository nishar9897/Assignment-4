import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.isAuthenticated);
  const count= useSelector(state => state.count);
  const logoutHandler = () => {
    dispatch({
      type: "logout"
    })
  }
  
  return (
    <header className = {classes.header}>
      <h1>&emsp;Bot Shopping</h1>
     {isAuth && <h1 >Dashboard</h1>}
      {!isAuth && <button>Register</button>}
      {isAuth &&
        <nav>
          <ul>
            <li>
            <button type="button" style={{textAlign:"center"}}><i class="material-icons" style={{fontSize:"30px",color: "black"}}>shopping_cart</i><b>{count}</b> </button>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      } 
    </header>
  )
}

export default Header