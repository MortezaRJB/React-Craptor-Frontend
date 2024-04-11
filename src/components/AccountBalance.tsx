import { useState } from "react";
import Header from "./Header";
import BalanceRow from "./BalanceRow";
import Navbar from "./Navbar";

function AccountBalance() {
  const [currencies, setCurrencies] = useState([
    {
      id: 0,
      name: 'USD',
      icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    },
    {
      id: 1,
      name: 'Etherium',
      icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    },
  ]);

  return(
    <>
      <div className='flex'>
        <div className='navbar full-height responsive-hide'>
          <Navbar />
        </div>
        <div className='content full-height flex-1'>
          <Header icon='sort' title='Account Balance' />
          <br /><br /><br />
          {currencies && currencies.length > 0 && (
            <div className="box">
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>&nbsp;&nbsp;&nbsp;#</th>
                    <th className='left'>Currency</th>
                    <th className='center'>Balance</th>
                    <th aria-label='empty' className='right'>
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currencies.map((item, index) => (
                    <BalanceRow key={item.id.toString()} currency={item} index={index + 1} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AccountBalance;
