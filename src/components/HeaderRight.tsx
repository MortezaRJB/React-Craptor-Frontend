import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { lightGreen } from "@mui/material/colors";

function HeaderRight() {
  const location = useLocation();
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const user = useAuth();

  return(
    <>
      <div className='header-right no-select'>
      <div className='flex flex-center'>
        <ul className='header-menu nowrap'>
          <li>
            <Link
              to='/market'
              className={location.pathname.toLowerCase().includes('/market') ? 'active' : 'passive'}
            >
              Market
            </Link>
          </li>
          <li>
            <Link
              to='/orders'
              className={location.pathname.toLowerCase().includes('/orders') ? 'active' : 'passive'}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              to='/balance'
              className={location.pathname.toLowerCase().includes('/balance') ? 'active' : 'passive'}
            >
              Balance
            </Link>
          </li>
          <li>
            <Link
              to='/transactions'
              className={location.pathname.toLowerCase().includes('/transactions') ? 'active' : 'passive'}
            >
              Transactions
            </Link>
          </li>
        </ul>
        <ul className='header-icons nowrap'>
          <li>
            <Link to=''>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to=''>
              <span className='notification-badge'>0</span>
              <i className='material-icons'>notifications</i>
            </Link>
          </li>
        </ul>
        <ul className='header-user nowrap'>
          {Object.keys(user.user).length > 0 ? 
            <li>
              <Link to=''>
                <span>User</span>
                <span>@{JSON.parse(user.user).username}</span>
              </Link>
            </li>
            :
            <li>
              <Link to='/login'>
                <span>Login</span>
                <span>To Start Trading &nbsp;</span>
              </Link>
            </li>
          }
          {Object.keys(user.user).length > 0 && 
            <li>
              <Link to=''>
                <div
                  // className='profile-picture cover'
                  // style={{
                  //   // backgroundImage: `url('https://www.cenksari.com/content/profile.jpg')`,
                  //   backgroundImage: 'public/images/profile-circle.256x256.png',
                  // }}
                >
                  <img src='/public/images/profile-circle.256x256.png' className='profile-picture cover'/>
                </div>
              </Link>
            </li>
          }
          {Object.keys(user.user).length > 0 ?
            <li className='responsive-hide'>
              <Link to='/logout' className='signout'>
                <i className='material-icons'>power_settings_new</i>
              </Link>
            </li>
            :
            <li className='responsive-hide'>
              <Link to='/login' className='login-btn' style={{color: '#388e3c'}}>
                <i className='material-icons'>login</i>
              </Link>
            </li>
          }
          
        </ul>
      </div>
    </div>
    </>
  );
}

export default HeaderRight;
