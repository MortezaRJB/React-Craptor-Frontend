import { memo, useEffect, useState } from "react";
import BuyOrders from "./BuyOrders";
import SellOrders from "./SellOrders";
import Header from "./Header";
import TradePanel from "./TradePanel";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";
import { useNavigate, useParams } from "react-router-dom";

function Orderbook() {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const navigate = useNavigate();
  const url_params = useParams();
  let market = url_params.market
  if (market === undefined){
    market = 'etherium-usd'
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
      fetch('http://127.0.0.1:8000/market/'+market)
      .then(response => {
        if (response.ok){
          return response.json()
        }
        throw response
      })
      .then(res => setData(res))
      .catch(error => setErr(error))
  }, []);

  const [keyword, setKeyword] = useState('');

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/market/'+keyword)
    .then(response => {
      if (response.ok) {
        navigate('/market/'+keyword)
      } else {
        alert("Market Not Found!")
      }
    })
    .catch(error => {})
  };
  
  return(
    <>
      <div className='flex'>
        <div className='navbar full-height responsive-hide'>
          <Navbar />
        </div>
        <div className='content full-height flex-1'>
          <Header icon='sort' title='Market' />
          <SearchBox
            searchValue={keyword}
            searchOnSubmit={handleSearchSubmit}
            searchOnChange={handleSearchValue}
            placeHolder="e.g.    etherium-usd"
          />
          <br /><br />
          <div className='content'>
            <div className='flex flex-destroy'>
              {data &&
                <div className='content-70 flex-1'>
                  <div className='flex flex-destroy flex-space-between'>
                    <div className='flex-1 box-right-padding'>
                      <BuyOrders orderbook={data} />
                    </div>
                    <div className='flex-1'>
                      <SellOrders orderbook={data} />
                    </div>
                  </div>
                  <div><TradePanel currency_1={data.currency_1} currency_2={data.currency_2} /></div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Orderbook);
