import React from "react";

function Carousel() {
  return (
    <div className=''>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
        style={{ marginTop: "27px" }}
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={0}
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={1}
            aria-label='Slide 2'
          />
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={2}
            aria-label='Slide 3'
          />
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='img/banner.png'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <div
                className='container position-relative text-center text-lg-start aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h1>
                      <strong>Journy With</strong>Fast
                    </h1>
                    <h1>Internet</h1>
                    <p>
                      We offer the excessive speed, secure, and dependable net
                      connection that helps you to do what you like online.
                    </p>
                    <div className='mt-5 p-0 '>
                      <a
                        href='#menu'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1'
                      >
                        Read More
                      </a>
                      <a
                        href='#book-a-table'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto bg-transparent border border-2 border-danger text-danger img-bt-2'
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 d-none d-lg-flex align-items-center justify-content-center aos-init aos-animate'
                    data-aos='zoom-in'
                    data-aos-delay={200}
                  >
                    <a
                      href
                      className
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={300}
                        height={300}
                        fill='#DD0041'
                        className='bi bi-wifi'
                        viewBox='0 0 16 16'
                      >
                        <path d='M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z' />
                        <path d='M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='img/banner.png'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <div
                className='container position-relative text-center text-lg-start aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h1>
                      <strong>Journy With</strong>Fast
                    </h1>
                    <h1>Internet</h1>
                    <p>
                      We offer the excessive speed, secure, and dependable net
                      connection that helps you to do what you like online.
                    </p>
                    <div className='mt-5 p-0 '>
                      <a
                        href='#menu'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1'
                      >
                        Read More
                      </a>
                      <a
                        href='#book-a-table'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto bg-transparent border border-2 border-danger text-danger img-bt-2'
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 d-none d-lg-flex align-items-center justify-content-center aos-init aos-animate'
                    data-aos='zoom-in'
                    data-aos-delay={200}
                  >
                    <a
                      href
                      className
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={300}
                        height={300}
                        fill='#DD0041'
                        className='bi bi-wifi'
                        viewBox='0 0 16 16'
                      >
                        <path d='M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z' />
                        <path d='M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src='img/banner.png'
              className='d-block w-100'
              alt='...'
            />
            <div className='carousel-caption d-none d-md-block'>
              <div
                className='container position-relative text-center text-lg-start aos-init aos-animate'
                data-aos='zoom-in'
                data-aos-delay={100}
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h1>
                      <strong>Journy With</strong>Fast
                    </h1>
                    <h1>Internet</h1>
                    <p>
                      We offer the excessive speed, secure, and dependable net
                      connection that helps you to do what you like online.
                    </p>
                    <div className='mt-5 p-0 '>
                      <a
                        href='#menu'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1'
                      >
                        Read More
                      </a>
                      <a
                        href='#book-a-table'
                        className='book-a-table-btn scrollto animated fadeInUp scrollto bg-transparent border border-2 border-danger text-danger img-bt-2'
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div
                    className='col-lg-4 d-none d-lg-flex align-items-center justify-content-center aos-init aos-animate'
                    data-aos='zoom-in'
                    data-aos-delay={200}
                  >
                    <a
                      href
                      className
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={300}
                        height={300}
                        fill='#DD0041'
                        className='bi bi-wifi'
                        viewBox='0 0 16 16'
                      >
                        <path d='M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z' />
                        <path d='M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
