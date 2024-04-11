import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orderbook from './Market';
import Orders from './Orders';
import Signup from './Signup';
import Login from './Login';
import AuthProvider from './AuthProvider';
import PrivateRoute from './PrivateRoute';
import Logout from './Logout';
import AccountBalance from './AccountBalance';
import Transactions from './Transactions';
import Withdraw from './WithdrawScreen';
import DepositScreen from './DepositScreen';

function Navigation() {
  return(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/market' element={<Orderbook />} />
          <Route path='/market/:market' element={<Orderbook />} />
          <Route element={<PrivateRoute />}>
            <Route path='/orders' element={<Orders />} />
            <Route path='/balance' element={<AccountBalance />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/withdraw' element={<Withdraw />} />
            <Route path='/deposit' element={<DepositScreen />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Navigation;
