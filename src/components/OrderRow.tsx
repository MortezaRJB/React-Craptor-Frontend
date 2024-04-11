interface Props{
  item: object
}

function OrderRow({ item }: Props) {
  return(
    <tr>
      <td aria-label='type'>
          {item.is_Bid===false ? <div className='operation red'><i className='material-icons'>arrow_upward</i></div> : <div className='operation green'><i className='material-icons'>arrow_downward</i></div>}
      </td>
      {/* <td className='responsive-hide'>#{item.id}</td> */}
      <td className='responsive-hide'>{item.timestamp}</td>
      {/* <td className='nowrap'>
        {item.user}
        Cenk
      </td> */}
      <td className='nowrap left'>
        {item.is_limit ? <strong className="blue-font">Limit</strong> : <strong className="brown-font">Market</strong>}
      </td>
      <td className='nowrap'>
        {/* <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} /> */}
        <strong>{item.market}</strong>
      </td>
      <td aria-label='amount' className='center'>
        {item.is_Bid===false ? <strong className='red'>{item.size}</strong> : <strong className='green'>{item.size}</strong>}
      </td>
      <td aria-label='status' className='center'>
        {/* <Status status={item.status} /> */}
        {item.status}
      </td>
    </tr>
  );
}

export default OrderRow;
