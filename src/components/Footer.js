import React from 'react'

function Footer() {
  return (
    <div>
      {/* footer */}
<div className="container-fluid text-light px-0 footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: '1rem', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeIn', background: '#4A4747'}}>
<div className="container py-5">
  <div className="row g-5">
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Litpix Studio</h4>
      <p className="mb-2">Welcome to the largest broadband and Internet services provider where you can choose the best
        plan ever.</p>
      {/* <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
      <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p> */}
      <div className="d-flex pt-2">
        <a className="btn text-white btn-social" href><i className="fab fa-facebook-f" /></a>
        <a className="btn text-white btn-social" href><i className="fab fa-twitter" /></a>
        <a className="btn text-white  btn-social" href><i className="fab fa-skype" /></a>
        <a className="btn text-white btn-social" href><i className="fab fa-linkedin-in" /></a>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Useful Links</h4>
      <a className="btn btn-link" href>Area Converage</a>
      <a className="btn btn-link" href>How We Deliver</a>
      <a className="btn btn-link" href>Customer Support</a>
      <a className="btn btn-link" href>Careers</a>
    </div>
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Get In Touch</h4>
      <div className="d-flex  "> <a className href> <i className="text-danger bi bi-geo-alt me-3" /></a>
        <p>No. 12, Ribon Building,
          Walse street, Australia.</p>
      </div>
      <div className="d-flex  "> <a className href> <i className="text-danger bi bi-tablet-fill me-3" /></a>
        <p>(800) 216 2020</p>
      </div>
      <div className="d-flex  "> <a className href> <i className="text-danger bi bi-envelope me-3" /></a>
        <p>info@example.com</p>
      </div>
    </div>
    <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Newsletter</h4>
      <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
      <div className="position-relative mx-auto" style={{maxWidth: '400px'}}>
        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Email Address" />
        <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2"><i className="bi bi-envelope" /></button>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid px-0 border-top">
  <div className="container py-3 ">
    <div className="copyright">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          © <a className href="#">© 2022 Telecommunications Website Design By Aardarsh Singh</a>, All Right Reserved.
        </div>
        <div className="col-md-6 text-center text-md-end">
          <a className="me-4" href>Terms of Use</a>
          <a className href target="_blank">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

    </div>
  )
}

export default Footer
