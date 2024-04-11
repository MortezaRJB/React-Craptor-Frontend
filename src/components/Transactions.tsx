import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import Header from "./Header";
import TransactionRow from "./TransactionRow";
import Navbar from "./Navbar";

function Transactions() {
  const user = useAuth();
  const [data, setData] = useState([])
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/user-transactions/', {
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
    .then(res => setData(res))
    .catch(error => {setError(error)})
  }, [])

  return(
    <>
      <div className='flex'>
        <div className='navbar full-height responsive-hide'>
          <Navbar />
        </div>
        <div className='content full-height flex-1'>
          <Header icon='sort' title='Transactions' />
          <br /><br /><br />
          {error && <p>Error Fetching Transactions!</p>}
          {data && data.length > 0 && (
            <div className="box">
              <table className='data-table'>
                <thead>
                  <tr>
                    <th className='left'>&nbsp;&nbsp;&nbsp;#</th>
                    <th className='left'>Transaction ID</th>
                    <th className='left'>Currency</th>
                    <th className='left'>Type</th>
                    <th className='center'>Amount</th>
                    <th className='center'>Date</th>
                    <th aria-label='empty' className='right'>
                      &nbsp;
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <TransactionRow key={item.id.toString()} transaction={item} index={index + 1} />
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

export default Transactions;
