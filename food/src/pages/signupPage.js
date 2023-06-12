import React from 'react'
import '../style/signup.css'


const SignupPage = () => {
  return (
   <>
    <section className="vh-100 e" >
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black f a py-5" >
          <div className="card-body p-md-5 ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"/>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" >Your Name</label>
                      <input type="text"  className="form-control" />
                   
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"/>
                    <div className="form-outline flex-fill mb-0">
                     
                      <label className="form-label" >Your Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"/>
                    <div className="form-outline flex-fill mb-0">
                    
                      <label className="form-label">Password</label>
                      <input type="password"className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"/>
                    <div className="form-outline flex-fill mb-0">
                     
                      <label className="form-label" >Repeat your password</label>
                      <input type="password"  className="form-control" />
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value=""  />
                    <label className="form-check-label" >
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img alt='pic' className="img-fluid" src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'/>

            

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
  )
}

export default SignupPage