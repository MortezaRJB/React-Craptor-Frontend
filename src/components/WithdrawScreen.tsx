import Header from "./Header";
import Navbar from "./Navbar";

function Withdraw() {
  return(
    <>
    <div className='flex'>
      <div className='navbar full-height responsive-hide'>
        <Navbar />
      </div>
      <div className='content full-height flex-1'>
        <Header icon='sort' title='Withdraw Assets' />
          <br /><br /><br /><br /><br /><br />
        <p className="center">You Can Not Withdraw Your Money 😈</p>
      </div>
    </div>
    </>
  );
}

export default Withdraw;
