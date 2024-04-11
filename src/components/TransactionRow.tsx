interface Props{
  transaction: object,
  index: number
}

function TransactionRow({ transaction, index }: Props) {
  return(
    <>
      <tr>
        <td>
          <div className='rank accent no-select'>#{index}</div>
        </td>
        <td className='left'>
          {transaction.id}
        </td>
        <td className='left'>
          <strong>
            {transaction.currency}
          </strong>
        </td>
        <td aria-label='type'>
          {transaction.is_deposit===false ? <div className='operation red'><i className='material-icons'>arrow_upward</i></div> : <div className='operation green'><i className='material-icons'>arrow_downward</i></div>}
        </td>
        <td aria-label='amount' className='center'>
          {transaction.is_deposit===false ? <strong className='red'>{transaction.amount}</strong> : <strong className='green'>{transaction.amount}</strong>}
        </td>
        <td className='center'>
          {transaction.timestamp}
        </td>
      </tr>
    </>
  );
}

export default TransactionRow;
