import { LOGO_URL } from "../utils/contants";

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand" href="#">
                  <img src={LOGO_URL} alt="Logo" className="logo" style={{ height: "50px" }} />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Cart</a></li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Header;