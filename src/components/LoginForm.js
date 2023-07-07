import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

function Login() {
  const navigate = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn(event) {
    event.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all the required fields');
      return;
    }
    const req = await fetch('http://localhost:1337/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const res = await req.json();
    if (req.status === 200) {
      alert('Login successful');
      localStorage.setItem('email', email);
      navigate.push('/');
    } else {
      alert(res.error || 'Invalid email or password');
    }
  }

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="p-1">
            <div className="row my-4 bg-light rounded shadow">
              <h1 className="text-center text-light bg-primary py-3 rounded-top">Login</h1>
              <div className="col-md-6 mx-auto">
                <form>
                  <div className="form-group my-4">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="my-3">
                    <p>
                      Don't have an account?{' '}
                      <Link to="/register" className="text-info">
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="text-center py-3">
                    <button
                      className="btn btn-success btn-lg btn-block mx-auto w-100"
                      onClick={signIn}
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center py-3">
                    <button
                      className="btn btn-outline-secondary btn-lg btn-block mx-auto w-100"
                      onClick={() => navigate.push('register')}
                    >
                      Sign Up
                    </button>
                  </div>
                  <hr></hr>
                  <div className="text-center py-3">
                    <button
                      className="btn btn-outline-primary btn-lg btn-block mx-auto w-100"
                      onClick={() => navigate.push('register')}
                    >
                      Sign In Admin
                    </button>
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
