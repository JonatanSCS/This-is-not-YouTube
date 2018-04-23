import React from 'react'

import SideBarToggle from 'components/Navigator/components/SideBarToggle'

import './styles.scss'

export default function SideBar(props) {
  return props.isVisible && (
    <div id="SideBar">
      <div className="Toggle">
        <SideBarToggle onClick={props.toggleSidebar} />
      </div>
      <div className="Main Section">
        <ul>
          <li>
            <div className="Icon">
              <i className="fas fa-home"></i>
            </div>
            <span>Inicio</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-fire"></i>
            </div>
            <span>Tendencias</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fab fa-youtube"></i>
            </div>
            <span>Suscripciones</span>
          </li>
        </ul>
      </div>
      <div className="Section">
        <p className="Section__Title">Biblioteca</p>
        <ul>
          <li>
            <div className="Icon">
              <i className="fas fa-history"></i>
            </div>
            <span>Historial</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-clock"></i>
            </div>
            <span>Ver más tarde</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-thumbs-up"></i>
            </div>
            <span>Videos que me gustan</span>
          </li>
        </ul>
      </div>
      <div className="Section big-icons">
        <p className="Section__Title">Más de youtube</p>
        <ul>
          <li>
            <div className="Icon">
              <i className="fab fa-youtube"></i>
            </div>
            <span>YouTube Red</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-film-alt"></i>
            </div>
            <span>Películas de YouTube</span>
          </li>
        </ul>
      </div>
      <div className="Section Subscriptions">
        <p className="Section__Title">Suscripciones</p>
      </div>
      <div className="Section big-icons">
        <ul>
          <li>
            <div className="Icon">
              <i className="fas fa-cog"></i>
            </div>
            <span>Configuración</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-question-circle"></i>
            </div>
            <span>Ayuda</span>
          </li>
          <li>
            <div className="Icon">
              <i className="fas fa-exclamation-square"></i>
            </div>
            <span>Enviar sugerencias</span>
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
}
