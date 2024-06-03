import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-desktop-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-desktop-logo"
      />

      <ul className="nav-desktop-list">
        <li className="nav-list-option">Home</li>
        <li className="nav-list-option">Jobs</li>
      </ul>

      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
    <div className="nav-mobile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-mobile-logo"
      />
      <ul className="nav-mobile-list">
        <li className="nav-list-option">
          <AiFillHome className="nav-mobile-icon" />
        </li>
        <li className="nav-list-option">
          <BsFillBriefcaseFill className="nav-mobile-icon" />
        </li>
        <li className="nav-list-option">
          <FiLogOut className="nav-mobile-icon" />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
