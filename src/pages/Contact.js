import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({});
  const [user, setUser] = useState([]);

  const handleForm = (e) => {
    console.log(e.target.value, e.target.name);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const respons = await fetch("http://localhost:8083/litpix-studio", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await respons.json();
    console.log(data);
    alert("data save");
  };
  return (
    <div>
      <div
        className='container-fluid mt-1  page-header-contact wow fadeIn'
        data-wow-delay='0.1s'
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className='container '>
          <h1 className='display-3 mb-3 text-white'>contact</h1>
          <nav aria-label='breadcrumb animated slideInDown'>
            <ol className='breadcrumb mb-0'>
              <li className='breadcrumb-item'>
                <a
                  className='text-danger'
                  href='#'
                >
                  Home
                </a>
              </li>
              <li className='breadcrumb-item'>
                <a
                  className='text-body'
                  href='#'
                >
                  About
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* contact */}
      <div className='container-xxl py-5'>
        <div className='container'>
          <div className='row g-0'>
            <div
              className='col-lg-5  wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className='bg-danger p-5'>
                <p className='d-inline-block  text-white py-1 '>Talk To Us</p>
                <h1 className='text-uppercase mb-4 text-white'>
                  How Can We Help Your Business To Grow?
                </h1>
                <p className='mb-4 text-white'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since..
                </p>
                <form onSubmit={handleSubmit}>
                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <div className='form-floating bg-white'>
                        <input
                          type='text'
                          className='form-control bg-transparent'
                          name='username'
                          onChange={handleForm}
                          placeholder='Your Name'
                        />
                        <label htmlFor='name'>Your Name</label>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-floating bg-white'>
                        <input
                          type='email'
                          className='form-control bg-transparent'
                          name='email'
                          onChange={handleForm}
                          placeholder='Your Email'
                        />
                        <label htmlFor='email'>Your Email</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-floating bg-white'>
                        <input
                          type='text'
                          className='form-control bg-transparent'
                          name='subject'
                          onChange={handleForm}
                          placeholder='Subject'
                        />
                        <label htmlFor='subject'>Subject</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='form-floating bg-white'>
                        <textarea
                          className='form-control bg-transparent'
                          placeholder='Leave a message here'
                          name='message'
                          onChange={handleForm}
                          style={{ height: "100px" }}
                          defaultValue={""}
                        />
                        <label htmlFor='message'>Message</label>
                      </div>
                    </div>
                    <div className='col-12'>
                      <button
                        className='btn bg-white py-2 px-4'
                        type='submit'
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className='col-lg-7 wow fadeIn'
              data-wow-delay='0.5s'
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <div
                className='h-100'
                style={{ minHeight: "400px" }}
              >
                <img
                  className='img-fluid w-100 h-100'
                  src='img/kisspng-customer.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <section className='my-5'>
        <div className='container'>
          <div className='row gx-3'>
            <div className='col-sm-6 col-md-4 mb-3 '>
              <div className='card card-span h-100 text-body p-5'>
                <h4>Adress </h4>{" "}
                <p className='m-0'>1200 Billy Mitchell Dr. Ste.B Ei</p>{" "}
                <p> Cajan ca 92020</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-body p-5'>
                <h4>Phone</h4> <p className='m-0'>+1 763 784 7893</p>{" "}
                <p> Fax 71B-724-3312</p>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-body p-5'>
                <h4>Email</h4> <p className='m-0'>Support@iqcall.com</p>{" "}
                <p> info@iqcall.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </div>
  );
}

export default Contact;
