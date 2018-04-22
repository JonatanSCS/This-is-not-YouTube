import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default function IconButton(props) {
  return (
    <button id="IconButton">
      <i className={props.iconClass}></i>
    </button>
  )
}

IconButton.propTypes = {
  iconClass: PropTypes.string.isRequired
}
