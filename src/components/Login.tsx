import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [req_msg, setReqMsg] = useState({});
  const [err, setErr] = useState(false);
  let succeed = false;

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const auth = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await auth.loginAction(formValues);
    if (result === 'ok'){return;}
    else{
      setReqMsg(result);
    }
    // fetch('http://127.0.0.1:8000/accounts/login/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formValues)
    // })
    // .then(response => {
    //   if (response.ok){
    //     succeed = true;
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   if (succeed) {
    //     localStorage.setItem('access-token', data.access)
    //     navigate('/market/673e474d-7373-40eb-a422-48db3cddb845');
    //   }
    //   setReqMsg(data);
    // })
    // .catch(error => {
    //   setErr(true);
    //   console.error('Error:', error);
    // });
  };

  return (
    <div>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <div className="box">
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <h1 className='form-title center'>Login</h1>
                <p className='form-desc center'>
                  <Link style={{ textDecoration: 'none' }} to='/market'>&lt;&lt; Back to Home</Link>
                </p>
                {err && <div>connection error</div>}
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    {req_msg.username && <p className='red-font'>*{req_msg.username}</p>}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='username'>Username</label>
                        <input
                          type='text'
                          name='username'
                          value={formValues.username}
                          placeholder='username'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {req_msg.password && <p className='red-font'>*{req_msg.password}</p>}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Password</label>
                        <input
                          type='password'
                          name='password'
                          value={formValues.password}
                          placeholder='password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link style={{ textDecoration: 'none' }} to='/members/forgot-password'>Forgot Password?</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <button type='submit' className='button button-purple button-medium' onClick={handleSubmit}>Login</button>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Don't have an account? &nbsp;&nbsp;<Link to='/signup'>SingUp</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
