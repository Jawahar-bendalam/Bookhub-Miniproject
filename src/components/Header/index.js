import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiMenu} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'

import './index.css'

class Header extends Component {
  state = {displayNavbar: false}

  onClickMenu = () => {
    this.setState(prevState => ({
      displayNavbar: !prevState.displayNavbar,
    }))
  }

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickCross = () => {
    this.setState({displayNavbar: false})
  }

  onClickWebsiteLogo = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    const {home, shelves} = this.props
    const activeHome = home ? 'active-tab' : ''
    const activeShelves = shelves ? 'active-tab' : ''
    const {displayNavbar} = this.state
    return (
      <div>
        <div className="header-container">
          <div className="header-website-logo1">
            <Link to="/" className="link">
              <img
                src="https://res.cloudinary.com/duulnkdtt/image/upload/v1662635742/Group_7731_oz95i8.png"
                alt="website logo"
                className="header-website-logo"
                onClick={this.onClickWebsiteLogo}
              />
            </Link>
          </div>
          <ul className="tabs-container">
            <Link to="/" className="link">
              <li className={`list-item bookshelves-tab ${activeHome}`}>
                Home
              </li>
            </Link>
            <Link to="/shelf" className="link">
              <li className={`list-item bookshelves-tab ${activeShelves}`}>
                Bookshelves
              </li>
            </Link>
            <li className="link">
              <button
                type="button"
                onClick={this.onClickLogout}
                className="logout-btn"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="header-navbar-responsive-container">
          <div className="header-nav-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/duulnkdtt/image/upload/v1662635742/Group_7731_oz95i8.png"
                alt="website logo"
                onClick={this.onClickWebsiteLogo}
              />
            </Link>
            <button
              type="button"
              className="icon-btn"
              onClick={this.onClickMenu}
            >
              <FiMenu className="menu-icon" />
            </button>
          </div>
          {displayNavbar && (
            <>
              <div className="ham-expand">
                <div className="header-navbar-tabs-container">
                  <Link className="link" to="/">
                    <h1 className={`home-tab ${activeHome}`}>Home</h1>
                  </Link>
                  <Link className="link" to="/shelf">
                    <h1 className={`bookshelves-tab ${activeShelves}`}>
                      BookShelves
                    </h1>
                  </Link>
                  <button
                    onClick={this.onClickLogout}
                    className="logout-btn"
                    type="button"
                  >
                    Logout
                  </button>
                </div>
                <div>
                  <button
                    onClick={this.onClickCross}
                    className="icon-btn"
                    type="button"
                  >
                    <RiCloseCircleFill className="cross-icon" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
