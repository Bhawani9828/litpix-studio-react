import React from "react";

function Packages() {
  return (
    <div>
      <div
        className='container-fluid mt-1  page-header wow fadeIn'
        data-wow-delay='0.1s'
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div className='container'>
          <h1 className='display-3 mb-3 text-white'>Packages</h1>
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
      {/* about */}
      <section className='my-5'>
        <div className='container'>
          <div className='row gx-3'>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
            <div className='col-sm-6 col-md-4 mb-3 h-100'>
              <div className='card card-span h-100 text-white'>
                <img
                  className='rounded-3 h-100'
                  src='img/service-1.png'
                  alt='...'
                />
                <a
                  className='stretched-link'
                  href='#!'
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
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
                <p className='d-inline-block  text-white py-1 px-4'>
                  Contact Us
                </p>
                <h1 className='text-uppercase mb-4 text-white'>
                  Have Any Query? Please Contact Us!
                </h1>
                <p className='mb-4 text-white'>
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax PHP in a few minutes. Just copy
                  and paste the files, add a little code and you're done.{" "}
                  <a href='https://htmlcodex.com/contact-form'>Download Now</a>.
                </p>
                <form>
                  <div className='row g-3'>
                    <div className='col-md-6'>
                      <div className='form-floating bg-white'>
                        <input
                          type='text'
                          className='form-control bg-transparent'
                          id='name'
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
                          id='email'
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
                          id='subject'
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
                          id='message'
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
    </div>
  );
}

export default Packages;
