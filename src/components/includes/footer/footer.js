import React from 'react';

const Footer = (props) => {
    return (
<footer className="page-footer font-small special-color-dark pt-4">
  <div style={{backgroundColor: "#263238", padding: '20px 40px'}}>
    <div className="row">
      <div className="col-md-6 mb-0">
        <form className="form-inline">
          <input className="form-control form-control-sm mr-3 w-75"type="text" placeholder="Search"
            aria-label="Search" />
          <i className="fas fa-search" aria-hidden="true"></i>
        </form>
      </div>
      <div className="col-md-6 mb-0">
        <form className="input-group">
          <input type="text" className="form-control form-control-sm" placeholder="Your email"
            aria-label="Your email" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-sm btn-outline-white my-0" type="button" style={{color:"white"}}>
                Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="footer-copyright text-center py-3" style={{backgroundColor: "#1e282d", color: 'white'}}>
      © 2020 Copyright:
    <a href="/"> louissiana.com</a>
  </div>
</footer>
    );
}

export default Footer;