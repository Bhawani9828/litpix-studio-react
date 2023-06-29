import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
    const [inpval,setInpval] = useState({
        fistName:"",
        lastName:"",
        email:"",
        date:"",
        password:""

    });

    const [data,setData]= useState([]);
    console.log(inpval)

    const getData = (e)=>{
    //   console.log(e.target.value)

    const {value,name} = e.target;
    console.log(value,name);
    
    setInpval(()=>{

       return{
        ...inpval,
        [name]:value
       }
    });
    }

    const addData = (e)=>{
     e.preventDefault();
     const {fistName,lastName,email,date,password} = inpval;
     if(fistName === ""){
     alert("fistName is Required")
     }else if(lastName === ""){
        alert("lasttName is Required")
     }else if(email === ""){
        alert("email is Required")
     }else if(date === ""){
        alert("date is Required")
     }else if(password === ""){
        alert("password is Required")
     }else if(password.length<5){
        alert("password is 5 Required")
     }else{
        alert("data add successfuly");
        localStorage.setItem('bhawani',JSON.stringify([...data,inpval]))
     }
    }
  return (
    <div className='mt-5'>
    {/* contact */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-5  wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
            <div className="bg-danger p-5">
              <p className="d-inline-block  text-white py-1 ">Talk To Us</p>
              <h1 className="text-uppercase mb-4 text-white">How Can We Help Your
                Business To Grow?</h1>
              <p className="mb-4 text-white">Lorem Ipsum is simply dummy  text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since..</p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating bg-white">
                      <input type="text" className="form-control bg-transparent" name="fistName" onChange={getData} placeholder="Fist Name" />
                      <label htmlFor="name">Fist Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating bg-white">
                      <input type="text" className="form-control bg-transparent" name="lastName" onChange={getData} placeholder="Last Name" />
                      <label htmlFor="email">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                  <div className="form-floating bg-white">
                    <input type="email" className="form-control bg-transparent" name="email" onChange={getData} placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                  <div className="col-12">
                    <div className="form-floating bg-white">
                      <input type="date" className="form-control bg-transparent py-0" name="date" onChange={getData} placeholder="" />
                      
                    </div>
                  </div>
                  <div className="col-12">
                  <div className="form-floating bg-white">
                    <input type="password" className="form-control bg-transparent" name="password" onChange={getData} placeholder="" />
                    <label htmlFor="subject">password</label>
                  </div>
                </div>
                  <div className="col-12">
                    <button className="btn bg-white py-2 px-4" onClick={addData} type="submit">Sign In</button>
                    <p className='mt-3'>already have account <span><NavLink className="text-white" to='/Login'>Sign up</NavLink></span></p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>
            <div className="h-100" style={{minHeight: '400px'}}>
              <img className="img-fluid w-100 h-100" src="img/kisspng-customer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* about */}
    <section className="my-5">
      <div className="container">
        <div className="row gx-3">
          <div className="col-sm-6 col-md-4 mb-3 ">
            <div className="card card-span h-100 text-body p-5"><h4>Adress </h4> <p className="m-0">1200 Billy Mitchell Dr. Ste.B Ei
              </p> <p> Cajan ca 92020</p></div>
          </div>
          <div className="col-sm-6 col-md-4 mb-3 h-100">
            <div className="card card-span h-100 text-body p-5"><h4>Phone</h4> <p className="m-0">+1 763 784 7893
              </p> <p> Fax 71B-724-3312</p></div>
          </div>
          <div className="col-sm-6 col-md-4 mb-3 h-100">
            <div className="card card-span h-100 text-body p-5"><h4>Email</h4> <p className="m-0">Support@iqcall.com
              </p> <p>  info@iqcall.com</p></div>
          </div>
        </div>
      </div>{/* end of .container*/}
    </section>
  </div>
  
  )
}

export default Register
