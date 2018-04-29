import React from "react";
import { connect } from "react-redux";

import BaseComponent from "utils/BaseComponent";

import "./styles.scss";

export class AccountMenu extends BaseComponent {
  render() {
    console.log(this.props.user.toJS());
    const backgroundImage = {
      backgroundImage: `url(${this.props.user.toJS().imageUrl})`
    };
    return (
      <div className="AccountMenu">
        <div className="AccountMenu__User">
          <div className="AccountMenu__User__Image" style={backgroundImage} />
          <div className="AccountMenu__User__Name">
            <p>Jonatan Santa Cruz</p>
            <span>jonatanscs97@gmail.com</span>
          </div>
        </div>
        <div className="AccountMenu__Section">
          <ul>
            <li>
              <div className="Icon">
                <i className="fas fa-user-circle" />
              </div>
              <span>My channel</span>
            </li>
            <li>
              <div className="Icon">
                <i className="fas fa-play-circle" />
              </div>
              <span>Creator Studio</span>
            </li>
            <li>
              <div className="Icon">
                <i className="far fa-user-circle" />
              </div>
              <span>Switch account</span>
            </li>
            <li>
              <div className="Icon">
                <i className="far fa-sign-out" />
              </div>
              <span>Sign Out</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.get("user")
  };
};

export default connect(mapStateToProps)(AccountMenu);
