import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={reverse("home")}>
                <div className="Icon">
                  <i className="fas fa-home" />
                </div>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={reverse("feed:trending")}>
                <div className="Icon">
                  <i className="fas fa-fire" />
                </div>
                <span>Trending</span>
              </Link>
            </li>
            <li>
              <Link to={reverse("feed:subscriptions")}>
                <div className="Icon">
                  <i className="fab fa-youtube" />
                </div>
                <span>Subscriptions</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section">
          <p className="Section__Title">Library</p>
          <ul>
            <li>
              <Link to={reverse("feed:history")}>
                <div className="Icon">
                  <i className="fas fa-history" />
                </div>
                <span>History</span>
              </Link>
            </li>
            <li>
              <Link to={reverse("playlist", { playlist: "wl" })}>
                <div className="Icon">
                  <i className="fas fa-clock" />
                </div>
                <span>Watch Later</span>
              </Link>
            </li>
            <li>
              <Link to={reverse("playlist", { playlist: "lv" })}>
                <div className="Icon">
                  <i className="fas fa-thumbs-up" />
                </div>
                <span>Liked videos</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section big-icons">
          <p className="Section__Title">More from youtube</p>
          <ul>
            <li>
              <Link to={reverse("red")}>
                <div className="Icon">
                  <i className="fab fa-youtube" />
                </div>
                <span>YouTube Red</span>
              </Link>
            </li>
            <li>
              <Link to={reverse("channel")}>
                <div className="Icon">
                  <i className="fas fa-film-alt" />
                </div>
                <span>YouTube Movies</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="Section Subscriptions">
          <p className="Section__Title">Subscriptions</p>
        </div>
        <div className="Section big-icons">
          <ul>
            <li>
              <Link to={reverse("account")}>
                <div className="Icon">
                  <i className="fas fa-cog" />
                </div>
                <span>Settings</span>
              </Link>
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
