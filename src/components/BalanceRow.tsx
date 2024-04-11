import { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";

interface Props{
  currency: object,
  index: number
}

function BalanceRow({ currency, index }: Props) {
  const user = useAuth();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/user-balance/'+currency.name, {
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
    .catch(error => setError(error))
  }, [])
  
  return(
    <>
      {error && <p>Error Fetching Balance!</p>}
      <tr>
        <td>
          <div className='rank accent no-select'>#{index}</div>
        </td>
        <td className='nowrap'>
          <div className='icon cover' style={{ backgroundImage: `url('${currency.icon}')` }} />
          <strong>{currency.name}</strong>
        </td>
        <td className='center'>
          <strong>
            {data.balance}
          </strong>
        </td>
      </tr>
    </>
  );
}

export default BalanceRow;
