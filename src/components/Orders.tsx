import { useEffect, useState } from "react";
import Header from "./Header";
import OrderRow from "./OrderRow";
import { useAuth } from "./AuthProvider";
import Navbar from "./Navbar";

function Orders() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const user = useAuth();
  useEffect(() => {
    fetch('http://127.0.0.1:8000/orders/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.token
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(res => {setData(res); console.log(data)})
    .catch(error => {setError(error); console.log(error.json())})
  }, []);

  return(
    <>
      <div className='flex'>
        <div className='navbar full-height responsive-hide'>
          <Navbar />
        </div>
        <div className='content full-height flex-1'>
          <Header icon='sort' title='My Orders' />
          <br /><br /><br />
          {error && <p>Error Fetching Orders!</p>}
          {data && data.length > 0 && (
            <div className="box">
              <table className='data-table'>
                <thead>
                  <tr>
                    <th aria-label='empty' className='left'>
                      &nbsp;
                    </th>
                    {/* <th className='left responsive-hide'>Order#</th> */}
                    <th className='left responsive-hide'>Date</th>
                    {/* <th className='left'>User</th> */}
                    <th className='left'>Order Type</th>
                    <th className='left'>Market</th>
                    <th className='center'>Amount</th>
                    <th className='center'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <OrderRow key={item.id.toString()} item={item} />
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

export default Orders;
