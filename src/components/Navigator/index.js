import React from "react";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";

import BaseComponent from "utils/BaseComponent";

import createRoutes from "routes";

import SideBar from "./SideBar";

import IconButon from "./components/IconButton";
import SideBarToggle from "./components/SideBarToggle";
import AccountMenu from "./components/AccountMenu";

import { updateUserData } from "reducers/user/actions";

import "./styles.scss";

const singInButtonStyles = {
  background: "none",
  color: "#FC2230",
  cursor: "pointer",
  fontSize: "14px",
  margin: "0 0 0 15px",
  padding: "8px",
  textTransform: "uppercase",
  width: "auto",
  fontWeight: "500",
  fontFamily: "inherit"
};

export class Navigator extends BaseComponent {
  constructor() {
    super();

    this.state = {
      sidebar: {
        isVisible: true
      },
      accountMenu: {
        isVisible: true
      }
    };

    this._bind(
      "_handleSearchFormSubmit",
      "_toggleSideBar",
      "_responseGoogle",
      "_toggleAccountMenu"
    );
  }

  _handleSearchFormSubmit(e) {
    e.preventDefault();
  }

  _toggleSideBar(e) {
    e.preventDefault();
    this.setState(prevState => {
      return {
        sidebar: {
          isVisible: !prevState.sidebar.isVisible
        }
      };
    });
  }

  _toggleAccountMenu() {
    this.setState(prevState => {
      return {
        accountMenu: {
          isVisible: !prevState.accountMenu.isVisible
        }
      };
    });
  }

  _responseGoogle({ profileObj }) {
    this.props.updateUserData(profileObj);
  }

  _renderProfileData() {
    if (this.props.isLoading) {
      console.log("Cargando loader");
    } else {
      const backgroundImage = {
        backgroundImage: `url(${this.props.user.toJS().imageUrl})`
      };
      return !!this.props.user.size ? (
        <div
          id="NavigatorUserImage"
          style={backgroundImage}
          onClick={this._toggleAccountMenu}
        />
      ) : (
        <GoogleLogin
          id="LoginButton"
          clientId="1007222126926-m8qeggtrec3gbe80t7i96mp4p090hsp7.apps.googleusercontent.com"
          buttonText="Sign In"
          onSuccess={this._responseGoogle}
          onFailure={this._responseGoogle}
          style={singInButtonStyles}
        />
      );
    }
  }

  render() {
    return (
      <div id="Navigator">
        <div className="Navbar">
          <SideBarToggle onClick={this._toggleSideBar} />
          <form
            onSubmit={this._handleSearchFormSubmit}
            className="Navbar__SearchContainer"
          >
            <div className="Navbar__SearchContainer__Field">
              <input type="text" placeholder="Buscar" />
            </div>
            <button className="Navbar__SearchContainer__Enter">
              <i className="far fa-search" />
            </button>
          </form>
          <div className="Navbar__User">
            <ul>
              <li>
                <IconButon iconClass="fas fa-video-plus" />
              </li>
              <li>
                <IconButon iconClass="fas fa-th" />
              </li>
              <li>
                <IconButon iconClass="far fa-ellipsis-v" />
              </li>
            </ul>
            {this._renderProfileData()}
            {this.state.accountMenu.isVisible && <AccountMenu />}
          </div>
        </div>
        <div className="Container">
          <SideBar
            isVisible={this.state.sidebar.isVisible}
            toggleSidebar={this._toggleSideBar}
          />
          <div
            className={`Container__Scene ${this.state.sidebar.isVisible
              ? "visible"
              : ""}`}
          >
            {createRoutes()}
          </div>
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

const mapDispatchToProps = dispatch => {
  return {
    updateUserData: user => dispatch(updateUserData(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);
