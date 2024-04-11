interface Props{
  item: {
    id: string,
    is_bid: boolean,
    price: string,
    total_volume: string,
  };
}

function SellOrdersRow({ item }: Props) {
  return (
    <>
      <tr className='red'>
        <td className='left'>
          {item.price}
        </td>
        <td className='center'>
          . . . .
        </td>
        <td className='right'>
          {item.total_volume}
        </td>
      </tr>
    </>
  );
}

export default SellOrdersRow;
