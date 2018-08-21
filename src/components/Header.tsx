import * as React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  state = { showMobileNav: false }

  public render() {
    return (
      <div>
        <div className="desktop-nav">
          <nav>
            <div className="nav-wrapper blue hide-on-med-and-down">
              <div className="container">
                <a className="brand-logo"><i className="material-icons">people</i>Fakebook</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                    <div className="user-icon">
                      <i className="material-icons">message</i>
                      <div className="p-1">&nbsp;</div>
                    </div>
                  </li>
                  <li>
                    <div className="user-icon">
                      <i className="material-icons">person</i>
                      <div className="p-1">Bret</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </nav>
        </div>

        <div className="mobile-nav">
          <nav>
            <div className="nav-wrapper blue">
              <div className="container">
                <a className="brand-logo" onClick={() => this.setState({ showMobileNav: !this.state.showMobileNav }) as any}><i className="material-icons">people</i>Fakebook</a>
              </div>
            </div>

            {this.state.showMobileNav &&
              <div className="mobile-nav-links">
                <div className="mobile-nav-link p-2">
                  <div className="user-icon">
                    <i className="material-icons">person</i>
                    <div className="p-1">Bret</div>
                  </div>
                </div>
                <div className="mobile-nav-link p-2">
                  <div className="user-icon">
                    <i className="material-icons">message</i>
                    <div className="p-1">Messages</div>
                  </div>
                </div>
                <div className="mobile-nav-link p-2">
                  <div className="link-container">
                    <i className="material-icons">view_stream</i>
                    <NavLink className="left-col-link" to="/" activeClassName="" style={{color: 'white'}} onClick={() => this.setState({ showMobileNav: !this.state.showMobileNav }) as any}>Feed</NavLink>
                  </div>
                </div>
                <div className="mobile-nav-link p-2" style={{borderBottom: '1px solid white'}}>
                  <div className="link-container">
                    <i className="material-icons">account_box</i>
                    <NavLink className="left-col-link" to="/profile/1" activeClassName="" style={{color: 'white'}} onClick={() => this.setState({ showMobileNav: !this.state.showMobileNav }) as any}>Profile</NavLink>
                  </div>
                </div>
              </div>
            }

          </nav>
        </div>
      </div>
    );
  }
}

export default Header;