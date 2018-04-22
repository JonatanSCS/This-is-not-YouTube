import React from 'react'

import IconButon from './components/IconButton'

import './styles.scss'

const YOUTUBE_LOGO = require('assets/logos/complete_youtube.svg')

export default function Navigator() {
  const _handleSearchFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id="Navigator">
      <div className="Navbar">
        <div className="Navbar__Menu">
          <IconButon iconClass="far fa-bars"/>
          <div className="Navbar__Menu__Logo">
            <img src={YOUTUBE_LOGO} alt="YouTube Logo"/>
            <span>mx</span>
          </div>
        </div>
        <form onSubmit={_handleSearchFormSubmit} className="Navbar__SearchContainer">
          <div className="Navbar__SearchContainer__Field">
            <input type="text" placeholder="Buscar" />
          </div>
          <button className="Navbar__SearchContainer__Enter">
            <i className="far fa-search"></i>
          </button>
        </form>
        <div className="Navbar__User">
          <ul>
            <li>
              <IconButon iconClass="fas fa-video-plus"/>
            </li>
            <li>
              <IconButon iconClass="fas fa-th"/>
            </li>
            <li>
              <IconButon iconClass="far fa-ellipsis-v"/>
            </li>
          </ul>
          <p>Iniciar Sesión</p>
        </div>
      </div>
    </div>
  )
}
