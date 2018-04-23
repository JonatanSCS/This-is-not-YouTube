import React from 'react'
import BasePureComponent from 'utils/BasePureComponent'

import SideBar from './SideBar'

import IconButon from './components/IconButton'
import SideBarToggle from './components/SideBarToggle'

import './styles.scss'


export default class Navigator extends BasePureComponent {
  constructor() {
    super()

    this.state = {
      sidebar: {
        isVisible: true
      }
    }

    this._bind('_handleSearchFormSubmit', '_toggleSideBar')
  }

  _handleSearchFormSubmit(e) {
    e.preventDefault()
  }

  _toggleSideBar(e) {
    e.preventDefault()
    this.setState(prevState => {
      return {
        sidebar: {
          isVisible: !prevState.sidebar.isVisible
        }
      }
    })
  }

  render() {
    return (

      <div id="Navigator">
        <div className="Navbar">
          <SideBarToggle onClick={this._toggleSideBar} />
          <form onSubmit={this._handleSearchFormSubmit} className="Navbar__SearchContainer">
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
        <SideBar isVisible={this.state.sidebar.isVisible} toggleSidebar={this._toggleSideBar}/>
      </div>
    )
  }
}
