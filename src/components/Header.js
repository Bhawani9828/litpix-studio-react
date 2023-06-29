import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className='container-fluid bg-light text-dark px-0 py-2'>
        <div className='row gx-0 d-none d-lg-flex'>
          <div className='col-lg-7 px-5 text-start'>
            <div className='h-100 d-inline-flex align-items-center me-4'>
              <span className='fa fa-phone-alt me-2 top_icon' />
              <span>Customer Sign In</span>
            </div>
            <div className='h-100 d-inline-flex align-items-center'>
              <span className='far fa-envelope me-2 top_icon' />
              <span>info@example.com</span>
            </div>
          </div>
          <div className='col-lg-5 px-5 text-end'>
            <div className='h-100 d-inline-flex align-items-center mx-n2'>
              <span>Follow Us:</span>
              <a
                className='btn btn-link text-danger'
                href
              >
                <i className='fab fa-facebook-f ' />
              </a>
              <a
                className='btn btn-link text-danger'
                href
              >
                <i className='fab fa-twitter' />
              </a>
              <a
                className='btn btn-link text-danger'
                href
              >
                <i className='fab fa-linkedin-in' />
              </a>
              <a
                className='btn btn-link text-danger'
                href
              >
                <i className='fab fa-instagram' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className='navbar navbar-expand-lg bg-white navbar-light sticky-top p-0'>
        <a
          href='index.html'
          className='navbar-brand d-flex align-items-center px-4 px-lg-5'
        >
          <h1 className='m-0'>Litpix Studio</h1>
        </a>
        <button
          type='button'
          className='navbar-toggler me-4 collapsed'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          fdprocessedid='vhfkse'
          aria-expanded='false'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='navbar-collapse collapse'
          id='navbarCollapse'
          style={{}}
        >
          <div className='navbar-nav m-auto p-4 p-lg-0'>
            <Link
              to='/Home'
              className='nav-item nav-link active'
            >
              Home
            </Link>
            <Link
              to='/About'
              className='nav-item nav-link'
            >
              About
            </Link>
            <Link
              to='/Services'
              className='nav-item nav-link'
            >
              Services
            </Link>
            <Link
              to='/Packages'
              className='nav-item nav-link'
            >
              Packages
            </Link>
            <Link
              to='/Blog'
              className='nav-item nav-link'
            >
              Blog
            </Link>
            <Link
              to='/Contact'
              className='nav-item nav-link'
            >
              Contact
            </Link>
          </div>
          <Link
            to='/Contact'
            className=' book-a-table-btn text-white py-2 px-lg-4 rounded-0 d-none d-lg-block'
          >
            Get Started
            <i className='fa fa-arrow-right ms-3' />
          </Link>
        </div>
      </nav>

      {/* .navbar */}
    </div>
  );
}

export default Header;
