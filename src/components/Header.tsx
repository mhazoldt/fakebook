import * as React from 'react';
import '../styles/Header.css';


class Header extends React.Component {
  public render() {
    return (
      <nav>
        <div className="nav-wrapper blue">
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
    );
  }
}

export default Header;