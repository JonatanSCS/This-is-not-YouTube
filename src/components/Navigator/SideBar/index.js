import React from "react";
import { NavLink } from "react-router-dom";

import { reverse } from "routes";

import SideBarToggle from "components/Navigator/components/SideBarToggle";

import "./styles.scss";

export default function SideBar(props) {
  return (
    props.isVisible && (
      <div id="SideBar">
        <div className="Toggle">
          <SideBarToggle onClick={props.toggleSidebar} />
        </div>
        <div className="Main Section">
          <ul>
            <li>
              <NavLink to={reverse("home")} activeClassName="activeNav" exact>
                <div className="Icon">
                  <i className="fas fa-home" />
                </div>
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={reverse("feed:trending")}
                activeClassName="activeNav"
              >
                <div className="Icon">
                  <i className="fas fa-fire" />
                </div>
                <span>Trending</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={reverse("feed:subscriptions")}
                activeClassName="activeNav"
              >
                <div className="Icon">
                  <i className="fab fa-youtube" />
                </div>
                <span>Subscriptions</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Section">
          <p className="Section__Title">Library</p>
          <ul>
            <li>
              <NavLink to={reverse("feed:history")} activeClassName="activeNav">
                <div className="Icon">
                  <i className="fas fa-history" />
                </div>
                <span>History</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={reverse("playlist", { playlist: "wl" })}
                activeClassName="activeNav"
              >
                <div className="Icon">
                  <i className="fas fa-clock" />
                </div>
                <span>Watch Later</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={reverse("playlist", { playlist: "lv" })}
                activeClassName="activeNav"
              >
                <div className="Icon">
                  <i className="fas fa-thumbs-up" />
                </div>
                <span>Liked videos</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Section big-icons">
          <p className="Section__Title">More from youtube</p>
          <ul>
            <li>
              <NavLink to={reverse("red")} activeClassName="activeNav">
                <div className="Icon">
                  <i className="fab fa-youtube" />
                </div>
                <span>YouTube Red</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={reverse("channel")} activeClassName="activeNav">
                <div className="Icon">
                  <i className="fas fa-film-alt" />
                </div>
                <span>YouTube Movies</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Section Subscriptions">
          <p className="Section__Title">Subscriptions</p>
        </div>
        <div className="Section big-icons">
          <ul>
            <li>
              <NavLink to={reverse("account")} activeClassName="activeNav">
                <div className="Icon">
                  <i className="fas fa-cog" />
                </div>
                <span>Settings</span>
              </NavLink>
            </li>
            <li>
              <button>
                <div className="Icon">
                  <i className="fas fa-question-circle" />
                </div>
                <span>Help</span>
              </button>
            </li>
            <li>
              <button>
                <div className="Icon">
                  <i className="fas fa-exclamation-square" />
                </div>
                <span>Send feedback</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="Terms">
          <ul>
            <li>Información</li>
            <li>Prensa</li>
            <li>Derechos de autor</li>
            <li>Creadores</li>
            <li>Publicidad</li>
            <li>Desarrolladores</li>
            <li>+Youtube</li>
          </ul>
          <ul>
            <li>Términos</li>
            <li>Privacidad</li>
            <li>Política y seguridad</li>
            <li>Probar las nuevas funciones</li>
          </ul>
          <p>© 2018 YouTube, LLC</p>
        </div>
      </div>
    )
  );
}
