import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const RegistrationForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const navigate = useHistory();

  async function register(e) {
    // alert(name+email+password);
    e.preventDefault();
    const req = await fetch("http://localhost:1337/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, rePassword }),
    });
    // alert(req)
    if (req.status == 200) {
      alert("successfully register");
      // navigate('../login')
    } else {
      alert("Duplicate Email");
    }
  }
  return (
    <>
      <div className="container-fluid my-3 py-5 bg-light rounded">
        <div className="row justify-content-center ">
          {" "}
          <div className="col-md-7 ">
            {" "}
            <div className=" registerform">
              <h1 className="text-center text-white  p-1 mb-4 myregform">Registration Form</h1>
              <div class="row ms-4  registerform1">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto ">
                  <form onSubmit={register} >
                    <div div class="form my-4">
                      
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Name"
                        style={{ width: '300px' }}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="form my-4">
                     
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter Your Email"
                        style={{ width: '300px' }}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="form  my-4">
                     
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        style={{ width: '300px' }}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="form  my-4">
                    
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        style={{ width: '300px' }}
                        required
                        onChange={(e) => setRePassword(e.target.value)}
                      />
                    </div>
                    <div className="my-3 text-white">
                      <p>
                        Already has an account?{" "}
                        <Link
                          to="/login"
                          className="text-decoration-underline text-info"
                        >
                          Login
                        </Link>{" "}
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        class="my-2 mx-auto btn btn-success w-100 fw-bold ms-5"
                        type="submit"
                        disabled={password != rePassword}
                      >
                        Register
                      </button>
                      {password != rePassword && (
                        <p className="text-danger">password does not match</p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
