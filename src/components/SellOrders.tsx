import { memo, useEffect, useState } from "react";
import SellOrdersRow from "./SellOrdersRow";

interface Props{
  orderbook: object
}

function SellOrders({ orderbook }: Props) {
  // const [data, setData] = useState(null)
  // const [err, setErr] = useState(null)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     fetch('http://127.0.0.1:8000/market/673e474d-7373-40eb-a422-48db3cddb845')
  //     .then(response => {
  //       if (response.ok){
  //         return response.json()
  //       }
  //       throw response
  //     })
  //     .then(res => setData(res))
  //     .catch(error => setErr(error))
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });

  
  return(
    <>
      <div className="box">
        <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
          <div className='flex flex-center flex-space-between'>
            <p>&nbsp;&nbsp; <span className="gray-font">{orderbook.currency_1} / {orderbook.currency_2}&nbsp;&nbsp;</span><span className="red-font">&rarr; Asks</span></p>
          </div>
        </div>

        <div className='box-content box-content-height-nobutton'>
          <div className='orders-row'>
            {orderbook.limits.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th className='left no-select'>Price Level</th>
                    <th className='center no-select'>. . . . .</th>
                    <th className='right no-select'>Total Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {orderbook.limits.filter(item => !item.is_bid).map((item) => (
                    <SellOrdersRow key={item.id.toString()} item={item} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SellOrders;
