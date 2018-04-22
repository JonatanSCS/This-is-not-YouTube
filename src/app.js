import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import createReducer from 'reducers'
import createRoutes from 'routes'
import registerServiceWorker from 'registerServiceWorker'

export const history = createBrowserHistory()

const store = createStore(
  createReducer(),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history))
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {createRoutes()}
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

const ConnectedApp = connect(null, null)(App)

if (process.env.NODE_ENV !== 'test') {
  ReactDOM.render(
    <ConnectedApp store={store} />,
    document.getElementById('YouTube')
  )
  registerServiceWorker()
}
