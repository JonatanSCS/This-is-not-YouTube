import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default function IconButton(props) {
  return (
    <button id="IconButton" onClick={props.onClick}>
      <i className={props.iconClass}></i>
    </button>
  )
}

IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired,
  onClick: PropTypes.func
}
