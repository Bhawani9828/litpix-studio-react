import React from 'react'

function About() {
  return (
    <div>
  <div className="container-fluid mt-1 mt-lg-5 page-header wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
    <div className="container">
      <h1 className="display-3 mb-3 text-white">About Us</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item"><a className="text-danger" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-body" href="#">About</a></li>
        </ol>
      </nav>
    </div>
  </div>
  {/* about */}
  <div className="container-xxl py-5 my-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: '400px'}}>
            <img className="position-absolute w-100 h-100" src="img/discover-1.png" alt="" style={{objectFit: 'cover'}} />
            <img className="position-absolute img-2 bg-white pe-3 pb-3" src="img/discover-2.png" alt="" style={{width: '200px', height: '200px'}} />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="h-100">
            <h6 className="text-danger text-uppercase mb-2">Discover A Wider World Of Recreation</h6>
            <h2 className=" mb-4">Broadband provider offers a higher-
              speed of data transmission.</h2>
            <p>We’ve streamlined our plans to give you the fastest internet available at your address for one low monthly price.</p>
            <div className="row g-2 mb-4 pb-2">
              <div className="col-sm-12">
                <i className="fa fa-check text-white border-white bg-danger border rounded-circle py-1 px-1 me-2" />Our fastest ever router
              </div>
              <div className="col-sm-12">
                <i className="fa fa-check text-white border-white bg-danger border rounded-circle py-1 px-1  me-2" />Browse and download around the clock
              </div>
              <div className="col-sm-12">
                <i className="fa fa-check text-white border-white bg-danger border rounded-circle py-1 px-1  me-2" />Superfast and ultra-reliable
              </div>
              <div className="col-sm-12">
              </div>
            </div>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="video">
                  <button type="button" className="btn-play border-0 bg-transparent" data-bs-toggle="modal" data-src="https://www.youtube.com/watch?v=D3pm1HHGLP0" data-bs-target="#videoModal">
                    <span />
                  </button>
                </div>
              </div>
              <div className="col-sm-8 ">
                <h4 className="m-0">Aardarsh Singh</h4>
                <span>Senior Executive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-6">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn'}}>
          <div className="fact-item bg-light rounded text-center  h-100 p-5">
            <i className="fa fa-certificate fa-4x text-danger mb-4" />
            <p className="mb-2">Years Experience</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">50</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeIn'}}>
          <div className="fact-item bg-light rounded text-center  h-100 p-5">
            <i className="fa fa-users fa-4x text-danger mb-4" />
            <p className="mb-2">Skilled Professionals</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">175</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeIn'}}>
          <div className="fact-item bg-light rounded text-center  h-100 p-5">
            <i className="fa fa-bread-slice fa-4x text-danger mb-4" />
            <p className="mb-2">Total Products</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">135</h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeIn'}}>
          <div className="fact-item bg-light rounded text-center h-100 p-5">
            <i className="fa fa-cart-plus fa-4x text-danger mb-4" />
            <p className="mb-2">Order Everyday</p>
            <h1 className="display-5 mb-0" data-toggle="counter-up">9357</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-xxl py-5 about_team">
    <div className="container">
      <div className="section-title text-center px-5">
        <h6 className="text-primary text-uppercase mb-2 text-danger">Our Creative Team</h6>
        <h1 className="display-5">Our Awesome Team</h1>
        <p className="px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-1.png" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href><i className="fab fa-facebook-f text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram text-danger" /></a>
              </div>
            </div>
            <div className="text-center border-0 bg-danger p-4">
              <h5 className="mb-0 text-white">Full Name</h5>
              <small className="text-white">Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-2.png" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href><i className="fab fa-facebook-f text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram text-danger" /></a>
              </div>
            </div>
            <div className="text-center border-0 bg-danger p-4">
              <h5 className="mb-0 text-white">Full Name</h5>
              <small className="text-white">Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-3.png" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href><i className="fab fa-facebook-f text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram text-danger" /></a>
              </div>
            </div>
            <div className="text-center border-0 bg-danger p-4">
              <h5 className="mb-0 text-white">Full Name</h5>
              <small className="text-white">Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s" style={{visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp'}}>
          <div className="team-item">
            <div className="overflow-hidden position-relative">
              <img className="img-fluid" src="img/team-4.png" alt="" />
              <div className="team-social">
                <a className="btn btn-square" href><i className="fab fa-facebook-f text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-twitter text-danger" /></a>
                <a className="btn btn-square" href><i className="fab fa-instagram text-danger" /></a>
              </div>
            </div>
            <div className="text-center border-0 bg-danger p-4 text-white">
              <h5 className="mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
