import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Carousel />
      <div className='container-xxl py-5'>
        <div className='container'>
          <div
            className='text-center wow fadeInUp'
            data-wow-delay='0.1s'
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <h6 className='section-title text-center text-danger text-uppercase'>
              Awesome Features
            </h6>
            <h1 className='mb-4'>
              Our Core{" "}
              <span className='text-danger text-uppercase'>Features</span>
            </h1>
            <p className='mb-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been the industry's standard
              dummy text ever since.
            </p>
          </div>
          <div className='row g-4'>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i className='fa fa-wifi fa-2x text-danger' />
                  </div>
                </div>
                <h5 className='mb-3'>WIFI Internet</h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.2s'
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i className='fa fa-spinner fa-2x text-danger' />
                  </div>
                  <i className />
                </div>
                <h5 className='mb-3'>Broadband </h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i
                      className='fa fa-th fa-2x text-danger'
                      aria-hidden='true'
                    />
                  </div>
                </div>
                <h5 className='mb-3'> Netfix TV box</h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.4s'
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i className='fa fa-rss fa-2x text-danger' />
                  </div>
                </div>
                <h5 className='mb-3'>Satellite TV</h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.5s'
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i className='fa fa-tablet fa-2x text-danger' />
                  </div>
                </div>
                <h5 className='mb-3'> Mobile Connection</h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
            <div
              className='col-lg-4 col-md-6 wow fadeInUp'
              data-wow-delay='0.6s'
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <a
                className='service-item rounded'
                href
              >
                <div className='service-icon bg-transparent border rounded p-1'>
                  <div className='w-100 h-100 border rounded d-flex align-items-center justify-content-center'>
                    <i className='fa fa-universal-access  fa-2x text-danger' />
                  </div>
                </div>
                <h5 className='mb-3'>Home Security</h5>
                <p className='text-body mb-0'>
                  At vero eos accusamus iusto odio dignissims ducimus blanditiis
                  praesentium voluptatum deleniti atque corrupti dolores et
                  quas.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* about start */}
      <div
        className='container-fluid py-5 px-0'
        style={{ background: "#ededeb" }}
      >
        <div className='container'>
          <div className='row g-5 align-items-center'>
            <div
              className='col-lg-6 wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              <div className='about-img position-relative overflow-hidden p-5 pe-0'>
                <img
                  className='img-fluid w-100'
                  src='img/about.png'
                />
              </div>
            </div>
            <div
              className='col-lg-6 wow fadeIn'
              data-wow-delay='0.5s'
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeIn",
              }}
            >
              <h6 className='section-title text-center text-danger text-uppercase'>
                About Our Creative Agency!
              </h6>
              <h2 className='mb-4'>
                Call Center with Dedicated Staff provide you with The Best
                Customer Support
              </h2>
              <p className='mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in. elit. Duis at dictum
                risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
                amet convallis nunc scelerisque.
              </p>
              <p>
                <i className='fa fa-check text-white bg-danger rounded-circle py-1 px-1 me-3' />
                Velit ducimus voluptatibus neque illo
              </p>
              <p>
                <i className='fa fa-check text-white bg-danger rounded-circle py-1 px-1 me-3' />
                nisi Ut ut felis congue nisl hendrerit
              </p>
              <p>
                <i className='fa fa-check text-white bg-danger rounded-circle py-1 px-1 me-3' />
                Affordable Packages &amp; Detailed Results
              </p>
              <p>
                <i className='fa fa-check text-white bg-danger rounded-circle py-1 px-1 me-3' />
                It is a long established fact that will
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container py-5'>
          <div className='row g-4'>
            <div
              className='col-md-6 col-lg-4 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className='mb-4'>
                <h6 className='section-title text-center text-danger text-uppercase'>
                  Awesome Features
                </h6>
                <h1 className='mb-3'>Contact With Our Certified Agent</h1>
                <p>
                  Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd
                  vero ipsum sit sit diam justo sed vero dolor duo.
                </p>
              </div>
              <a
                href='#menu'
                className='book-a-table-btn ms-0 scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1 mb-5'
              >
                Read More
              </a>
              <h6 className=' mt-4 text-danger'>
                <small className='text-body'>or </small> Take 3 days free trial
              </h6>
            </div>
            <div
              className='col-md-6 col-lg-4  wow fadeInUp'
              data-wow-delay='0.5s'
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className='price-item position-relative'>
                <div className='border-bottom p-4 mb-4'>
                  <h5 className='text-dark mb-4'>TV</h5>
                  <a
                    href='#menu'
                    className='book-a-table-btn ms-0 scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1 mb-5'
                  >
                    Impression
                  </a>
                  <h1 className='display-5 mt-3 mb-0 text-danger'>
                    <small
                      className='align-top '
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      $
                    </small>
                    99.00
                  </h1>
                  <small
                    className='align-bottom'
                    style={{ fontSize: "16px", lineHeight: "40px" }}
                  >
                    / Month
                  </small>
                </div>
                <div className='p-4 pt-0'>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    200+ Channels
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    5 Adult Channels
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    TV-Box
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3 mb-4' />
                    Unlimited Rooms
                  </p>
                  <a
                    href='#book-a-table'
                    className='book-a-table-btn plan ms-0  scrollto animated fadeInUp scrollto bg-transparent border border-2 border-danger text-danger img-bt-2 px-5'
                  >
                    Plan
                  </a>
                </div>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-4 wow fadeInUp'
              data-wow-delay='0.7s'
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <div className='price-item position-relative'>
                <div className='border-bottom p-4 mb-4'>
                  <h5 className='text-dark mb-4'>Internet + TV</h5>
                  <a
                    href='#menu'
                    className='book-a-table-btn ms-0 scrollto animated fadeInUp scrollto border border-2 border-danger img-bt-1 mb-5'
                  >
                    Home Comfort
                  </a>
                  <h1 className='display-5 mt-3 mb-0 text-danger'>
                    <small
                      className='align-top '
                      style={{ fontSize: "22px", lineHeight: "45px" }}
                    >
                      $
                    </small>
                    99.00
                  </h1>
                  <small
                    className='align-bottom'
                    style={{ fontSize: "16px", lineHeight: "40px" }}
                  >
                    / Month
                  </small>
                </div>
                <div className='p-4 pt-0'>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    Up to 100Mbps
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    200+ Chanels
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3' />
                    Wifi Router
                  </p>
                  <p>
                    <i className='fa fa-check text-danger border-danger border rounded-circle py-1 px-1 me-3 mb-4' />
                    Unlimited Devices
                  </p>
                  <a
                    href='#book-a-table'
                    className='book-a-table-btn plan ms-0  scrollto animated fadeInUp scrollto bg-transparent border border-2 border-danger text-danger img-bt-2 px-5'
                  >
                    Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='page-section bg-light py-5'
        id='portfolio'
      >
        <div className='container'>
          <div
            className='text-start w-50 wow fadeIn'
            data-wow-delay='0.1s'
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeIn",
            }}
          >
            <h6 className=' section-title text-center text-danger text-uppercase mb-3'>
              Watch Now
            </h6>
            <h2 className='section-heading text-uppercase text-dark mb-2'>
              Popular Tv Show Sports &amp; Live Streaming
            </h2>
            <p className='section-subheading text-muted mb-4'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since..
            </p>
          </div>
          <div className='row'>
            <div
              className='col-lg-3 col-sm-6 mb-4 wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              {/* Portfolio item 1*/}
              <div className=' portfolio-item'>
                <a
                  className='portfolio-link'
                  data-bs-toggle='modal'
                  href='#portfolioModal1'
                >
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={36}
                        height={36}
                        fill='currentColor'
                        className='bi bi-arrows-fullscreen'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z'
                        />
                      </svg>
                      {/* <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}
                    </div>
                  </div>
                  <img
                    className='img-fluid w-100'
                    src='img/whatch-1.png'
                    alt='...'
                  />
                </a>
                <div className='portfolio-caption'>
                  <div className='portfolio-caption-heading fw-bold mb-3'>
                    Live Concert California
                  </div>
                  <div className='portfolio-caption-subheading '>
                    <a
                      href='#book-a-table'
                      className=' scrollto  d-lg-flex'
                    >
                      Streaming
                      <i className='bi bi-arrow-right ms-2' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 mb-4 wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              {/* Portfolio item 2*/}
              <div className=' portfolio-item'>
                <a
                  className='portfolio-link'
                  data-bs-toggle='modal'
                  href='#'
                >
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={36}
                        height={36}
                        fill='currentColor'
                        className='bi bi-arrows-fullscreen'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z'
                        />
                      </svg>
                      {/* <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}
                    </div>
                  </div>
                  <img
                    className='img-fluid w-100'
                    src='img/whatch-2.png'
                    alt='...'
                  />
                </a>
                <div className='portfolio-caption'>
                  <div className='portfolio-caption-heading fw-bold mb-3'>
                    Watch Premier League 2022
                  </div>
                  <div className='portfolio-caption-subheading '>
                    <a
                      href
                      className=' scrollto  d-lg-flex'
                    >
                      Streaming
                      <i className='bi bi-arrow-right ms-2' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 mb-4 wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              {/* Portfolio item 3*/}
              <div className=' portfolio-item'>
                <a
                  className='portfolio-link'
                  data-bs-toggle='modal'
                  href='#portfolioModal3'
                >
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={36}
                        height={36}
                        fill='currentColor'
                        className='bi bi-arrows-fullscreen'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z'
                        />
                      </svg>
                      {/* <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}
                    </div>
                  </div>
                  <img
                    className='img-fluid w-100'
                    src='img/whatch-3.png'
                    alt='...'
                  />
                </a>
                <div className='portfolio-caption'>
                  <div className='portfolio-caption-heading fw-bold mb-3'>
                    Adventure Journey E05
                  </div>
                  <div className='portfolio-caption-subheading '>
                    <a
                      href
                      className=' scrollto  d-lg-flex'
                    >
                      Streaming
                      <i className='bi bi-arrow-right ms-2' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 mb-4 mb-lg-0 wow fadeIn'
              data-wow-delay='0.1s'
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeIn",
              }}
            >
              {/* Portfolio item 4*/}
              <div className=' portfolio-item'>
                <a
                  className='portfolio-link'
                  data-bs-toggle='modal'
                  href='#portfolioModal4'
                >
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width={36}
                        height={36}
                        fill='currentColor'
                        className='bi bi-arrows-fullscreen'
                        viewBox='0 0 16 16'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z'
                        />
                      </svg>
                      {/* <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}
                    </div>
                  </div>
                  <img
                    className='img-fluid w-100'
                    src='img/whatch-4.png'
                    alt='...'
                  />
                </a>
                <div className='portfolio-caption'>
                  <div className='portfolio-caption-heading fw-bold mb-3'>
                    Animal Documentory
                  </div>
                  <div className='portfolio-caption-subheading '>
                    <a
                      href
                      className=' scrollto  d-lg-flex'
                    >
                      Streaming
                      <i className='bi bi-arrow-right ms-2' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl py-5'>
        <div className='container py-5'>
          <div
            className='text-center wow fadeInUp'
            data-wow-delay='0.1s'
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <h6 className='text-danger text-uppercase'>OUR BLOG</h6>
            <h1 className>Check Our Recent Articles</h1>
            <p className='w-50 m-auto mb-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
          <div className='row g-4'>
            <div
              className='col-md-6 col-lg-4 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className='service-item-2 p-4'>
                <div className='overflow-hidden mb-4'>
                  <img
                    className='img-fluid'
                    src='img/blog-1.png'
                    alt=''
                  />
                </div>
                <small className='text-body '>
                  on 13 Feb 2018 / By : Aardarsh Singh
                </small>
                <h4 className='mb-4 mt-2'>Best Voip Service 2018</h4>
                <p className='border-bottom border-2 pb-3'>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className='btn-slide mt-2 '
                  href
                >
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-4 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className='service-item-2 p-4'>
                <div className='overflow-hidden mb-4'>
                  <img
                    className='img-fluid'
                    src='img/blog-2.png'
                    alt=''
                  />
                </div>
                <small className='text-body '>
                  on 13 Feb 2018 / By : Aardarsh Singh
                </small>
                <h4 className='mb-4 mt-2'>Best Voip Service 2018</h4>
                <p className='border-bottom border-2 pb-3'>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className='btn-slide mt-2 '
                  href
                >
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-4 wow fadeInUp'
              data-wow-delay='0.3s'
              style={{
                visibility: "visible",
                animationDelay: "0.3s",
                animationName: "fadeInUp",
              }}
            >
              <div className='service-item-2 p-4'>
                <div className='overflow-hidden mb-4'>
                  <img
                    className='img-fluid'
                    src='img/blog-3.png'
                    alt=''
                  />
                </div>
                <small className='text-body '>
                  on 13 Feb 2018 / By : Aardarsh Singh
                </small>
                <h4 className='mb-4 mt-2'>Best Voip Service 2018</h4>
                <p className='border-bottom border-2 pb-3'>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam.
                </p>
                <a
                  className='btn-slide mt-2 '
                  href
                >
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
