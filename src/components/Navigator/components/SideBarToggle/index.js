import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { reverse } from "routes";

import IconButon from "components/Navigator/components/IconButton";

import "./styles.scss";

const YOUTUBE_LOGO = require("assets/logos/complete_youtube.svg");

export default function SideBarToggle(props) {
  return (
    <div id="SideBarToggle">
      <IconButon iconClass="far fa-bars" onClick={props.onClick} />
      <NavLink to={reverse("home")} activeClassName="activeNav" exact>
        <div className="Logo">
          <img src={YOUTUBE_LOGO} alt="YouTube Logo" />
          <span>mx</span>
        </div>
      </NavLink>
    </div>
  );
}

SideBarToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};
