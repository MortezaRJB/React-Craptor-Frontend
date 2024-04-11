import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
  });
  const [err, setErr] = useState(false);
  const [req_msg, setReqMsg] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErr(false);
    fetch('http://127.0.0.1:8000/accounts/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {if (response.ok){navigate('/login')} return response.json()})
    .then(data => {
      // Parse the response data (assuming it's already decoded)
      setReqMsg(data);
      // Log the errors object to the console
    })
    .catch(error => {
      // Handle any network errors
      setErr(true);
      console.error('Error:', error);
    });
  };

  return (
    <>
      <div className='flex flex-center'>
        <div className='login no-select'>
          <div className="box">
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <h1 className='form-title center'>SignUp</h1>
                <p className='form-desc center'>
                  <Link style={{ textDecoration: 'none' }} to='/market'>&lt;&lt; Back to Home</Link>
                </p>
                {err && <div>connection error</div>}
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    {req_msg.email && <p className='red-font'>*{req_msg.email}</p>}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>E-mail</label>
                        <input
                          type='email'
                          name='email'
                          value={formData.email}
                          placeholder='enter your email'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {req_msg.username && <p className='red-font'>*{req_msg.username}</p>}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='username'>Username</label>
                        <input
                          type='text'
                          name='username'
                          value={formData.username}
                          placeholder='enter your username'
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
                          value={formData.password}
                          placeholder='enter password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    {req_msg.password2 && <p className='red-font'>*{req_msg.password2}</p>}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password2'>Confirm Password</label>
                        <input
                          type='password'
                          name='password2'
                          value={formData.password2}
                          placeholder='enter password'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='first_name'>First Name</label>
                        <input
                          type='text'
                          name='first_name'
                          value={formData.first_name}
                          placeholder='enter your first name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='las_tname'>Last Name</label>
                        <input
                          type='text'
                          name='last_name'
                          value={formData.last_name}
                          placeholder='enter your last name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <p>By clicking the signup, you agree to the terms of services</p>
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='buttons'>
                        <button type='submit' className='button button-purple button-medium' onClick={handleSubmit}>SignUp</button>
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Already have an account? &nbsp;&nbsp;<Link to='/login'>Login</Link>.
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
    </>
  );
}

export default Signup;
