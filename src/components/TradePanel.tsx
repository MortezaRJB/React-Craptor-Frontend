import { useState } from "react";
import { useAuth } from "./AuthProvider";

interface Props{
  currency_1: string,
  currency_2: string
}

function TradePanel({ currency_1, currency_2 }: Props) {
  const [primaryTab, setPrimaryTab] = useState(0);
  const [secondaryTab, setSecondaryTab] = useState(0);
  const [req_msg, setReqMsg] = useState({});
  const [formData, setFormData] = useState({
    orderbook: '26afab18-5660-44b8-b01a-0809bf6921a5',
    size: null,
    is_Bid: false,
    price: null,
    is_limit: false
  });

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);

    setSecondaryTab(0);
  };

  const handleSecondaryTab = (tabNum) => {
    setSecondaryTab(tabNum);
  };

  const handleChange_1 = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleChange_2 = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleChange_3 = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleChange_4 = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const user = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const elmnt_id = e.target.id
    switch (elmnt_id){
      case 'btn_1':
        let fv_1 = formData;
        fv_1.is_Bid = true;
        fv_1.is_limit = false;
        setFormData(fv_1)
        break;
      case 'btn_2':
        let fv_2 = formData;
        fv_2.is_Bid = true;
        fv_2.is_limit = true;
        setFormData(fv_2)
        break;
      case 'btn_3':
        let fv_3 = formData;
        fv_3.is_Bid = false;
        fv_3.is_limit = false;
        setFormData(fv_3)
        break;
      case 'btn_4':
        let fv_4 = formData;
        fv_4.is_Bid = false;
        fv_4.is_limit = true;
        setFormData(fv_4)
        break;
    }
    console.log(JSON.stringify(formData))
    fetch('http://127.0.0.1:8000/create-order/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.token
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // console.log(response)
      if (response.ok){
        alert("Order Placed Successfully.")
        return null;
      } else {
        alert("Error Placing Order!\nplease check the errors and try again.")
        return response.json();
      }
      
    })
    .then(data => {
      setReqMsg(data);
    })
    return;
  }

  return (
    <div className="box">
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p className="gray-font">Trade&nbsp;&nbsp; <span className="gray-font">{currency_1} / {currency_2}</span></p>
        </div>
      </div>
      <div className='box-horizontal-padding box-content-height-nobutton'>
        <div className='tabs no-select'>
          <button
            type='button'
            className={primaryTab === 0 ? 'active-grn' : 'passive'}
            onClick={() => handlePrimaryTab(0)}
          >
            Buy
          </button>
          <button
            type='button'
            className={primaryTab === 1 ? 'active-red' : 'passive'}
            onClick={() => handlePrimaryTab(1)}
          >
            Sell
          </button>
        </div>

        {primaryTab === 0 && (
          <>
            <div className='secondary-tabs flex flex-center flex-space-around no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                Market
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                Limit
              </button>
              {/* <button
                type='button'
                className={secondaryTab === 2 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(2)}
              >
                Stop-limit
              </button> */}
            </div>

            {secondaryTab === 0 && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Amount</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='m' name='size' value={formData.size || 0} placeholder='0' onChange={handleChange_1} />
                      <strong>{currency_2}</strong>
                    </div>
                  </div>
                  {/* <div className='buy-sell-percentage flex flex-center flex-space-between no-select'>
                    <span>10%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>Max</span>
                  </div> */}
                  <div className='box-button box-vertical-padding'>
                    <button type='submit' id='btn_1' className='button button-green button-medium button-block' onClick={handleSubmit}>
                      Place Buy Market Order
                    </button>
                  </div>
                </form>
              </>
            )}

            {secondaryTab === 1 && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Limit Price</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='f' name='price' value={formData.price || 0} placeholder='0' onChange={handleChange_2} />
                      <strong>{currency_2}</strong>
                    </div>
                  </div>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Amount</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='m' name='size' value={formData.size || 0} placeholder='0' onChange={handleChange_2} />
                      <strong>{currency_1}</strong>
                    </div>
                  </div>
                  <div className='box-button box-vertical-padding'>
                    <button type='submit' id='btn_2' className='button button-green button-medium button-block' onClick={handleSubmit}>
                      Place Buy Limit Order
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* {secondaryTab === 2 && <p>test</p>} */}
          </>
        )}

        {primaryTab === 1 && (
          <>
            <div className='secondary-tabs flex flex-center flex-space-around no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                Market
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                Limit
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Amount</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='m' name='size' value={formData.size || 0} placeholder='0' onChange={handleChange_3} />
                      <strong>{currency_1}</strong>
                    </div>
                  </div>
                  <div className='box-button box-vertical-padding'>
                    <button type='submit' id='btn_3' className='button button-rd button-medium button-block' onClick={handleSubmit}>
                      Place Sell Market Order
                    </button>
                  </div>
                </form>
              </>
            )}

            {secondaryTab === 1 && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Limit Price</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='f' name='price' value={formData.price || 0} placeholder='0' onChange={handleChange_4} />
                      <strong>{currency_2}</strong>
                    </div>
                  </div>
                  <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                    <div>
                      <strong>Amount</strong>
                      <i
                        className='material-icons'
                        title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                      >
                        info
                      </i>
                    </div>
                    <div className='right'>
                      <input type='text' id='m' name='size' value={formData.size || 0} placeholder='0' onChange={handleChange_4} />
                      <strong>{currency_1}</strong>
                    </div>
                  </div>
                  <div className='box-button box-vertical-padding'>
                    <button type='submit' id='btn_4' className='button button-rd button-medium button-block' onClick={handleSubmit}>
                      Place Sell Limit Order
                    </button>
                  </div>
                </form>
              </>
            )}
          </>
        )}
        {req_msg.size && <p className="center red">*Amount: {req_msg.size}</p>}
        {req_msg.price && <p className="center red">*Price: {req_msg.price}</p>}
        {req_msg.Balance && <p className="center red">*Balance: {req_msg.Balance}</p>}
      </div>
    </div>
  );
}

export default TradePanel;
