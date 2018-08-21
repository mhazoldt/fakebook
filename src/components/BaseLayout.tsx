import * as React from 'react';
import '../styles/BaseLayout.css';
import Header from './Header';
import { withRouter, NavLink } from 'react-router-dom';


class BaseLayout extends React.Component<any, any> {

  public render() {

    return (
        <div>
            <Header />
            <div className="container">
              <div className="content-area pt-2">
                <div className="left-col">
                  <div className="link-container">
                    <i className="material-icons">view_stream</i>
                    <NavLink className="left-col-link" to="/" activeClassName="">Feed</NavLink>
                  </div>
                  <div className="link-container">
                    <i className="material-icons">account_box</i>
                    <NavLink className="left-col-link" to="/profile/1" activeClassName="">Profile</NavLink>
                  </div>
                </div>
                <div className="content">
                  {this.props.children}
                </div>
                <div className="right-col">
                  <div className="ad-text">Buy this</div>
                  <img className="ad-image pb-2" src='https://via.placeholder.com/150x150' />
                  <div className="ad-text">Quality items</div>
                  <img className="ad-image" src='https://via.placeholder.com/150x150' />
                </div>
              </div>
            </div>
        </div>
    );
  }
}


export default withRouter(BaseLayout);