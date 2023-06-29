import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const histroy = useNavigate();
    const [inpval,setInpval] = useState({
        email:"",
        password:""
    });
     const [data,setData] = useState([]);

     console.log(inpval)
    const getData =(e)=>{
   const {name,value} = e.target;
   console.log(value,name);

   setInpval(()=>{
    return{
        ...inpval,
        [name]:value
    }
   })
    }
    const addData = (e)=>{
    e.preventDefault();

    const {email,password} = inpval;
    const getuserArr = localStorage.getItem('bhawani');
    console.log(getuserArr);
    if(email === ""){
        alert('email is required')
    }else if(!email.includes('@')){
 alert('plz enter the valid email')
    }else if(password === ""){
  alert(' enter the password ')
    }else if(password.length <5){
  alert('plz password 5 number is required')
    }else{
        if(getuserArr && getuserArr.length){
        const userData = JSON.parse(getuserArr);
        const userLogin = userData.filter((el,k)=>{
            return el.email=== email && el.password === password
        })
        if(userLogin.length === 0){
            alert('invalid user')
        }else{
            localStorage.setItem('user_login',JSON.stringify(userLogin));
            histroy('/Home')
        }
        }
    }
    }
  return (
    <div>
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
               
                <div className="col-md-12">
                  <div className="form-floating bg-white">
                    <input type="email" className="form-control bg-transparent" name="email" onChange={getData} placeholder="Your Email" />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating bg-white">
                    <input type="password" className="form-control bg-transparent" name="password" onChange={getData} placeholder="password" />
                    <label htmlFor="subject">password</label>
                  </div>
                </div>
               
                <div className="col-12">
                  <button className="btn bg-white py-2 px-4" type="submit" onClick={addData}>Login</button>
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

export default Login
