import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";

function Navbar() {
  return(
    <>
      <nav className='navbar-inner no-select'>
        <div className='logo'>
          <Link to='/market'>
            <img
              src='/public/images/logo.png'
              alt='Crypto Exchange'
              draggable='false'
            />
          </Link>
        </div>
        <h3>Menu</h3>
        <ul>
          <li>
            <NavbarButton url='/market' icon='dashboard' title='Market' />
          </li>
          <li>
            <NavbarButton url='/orders' icon='paid' title='My Orders' />
          </li>
          <li>
            <NavbarButton url='/balance' icon='account_balance' title='Balance' />
          </li>
          <li>
            <NavbarButton url='/transactions' icon='sync' title='Transactions' />
          </li>
          <li>
            <NavbarButton url='/deposit' icon='account_balance_wallet' title='Deposit' />
          </li>
          <li>
            <NavbarButton url='/withdraw' icon='swipe_up' title='Withdraw' />
          </li>
        </ul>
        <br />
        <h3>Social</h3>
        <ul>
          {/* <li>
            <NavbarButton url='/blog' icon='account_circle' title='Profil' />
          </li> */}
          <li>
            <NavbarButton url='/blog' icon='chat' title='Blog (soon)' />
          </li>
          <li>
            <NavbarButton url='/forecasts' icon='query_stats' title='Forecasts (soon)' />
          </li>
          <li>
            <NavbarButton url='/empty1' icon='settings' title='Empty (soon)' />
          </li>
        </ul>
        <div className='copyright'>
          <strong>Crypto Exchange</strong>
          <p>
            2024 &copy; Craptor
            <br />
            <br />
            Made with <span>❤</span>
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
