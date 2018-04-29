import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import createReducer from "reducers";
import registerServiceWorker from "registerServiceWorker";

import Navigator from "components/Navigator";

import { updateUserData } from "reducers/user/actions";

export const history = createBrowserHistory();

const store = createStore(
  createReducer(),
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history))
);

// const profile = auth2.currentUser.get().getBasicProfile()
// console.log(profile.getImageUrl());

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init().then(auth2 => {
        if (auth2.isSignedIn.get())
          this.props.updateUserData(auth2.currentUser.get().getBasicProfile());
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Navigator isLoading={this.state.isLoading} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserData: user => dispatch(updateUserData(user))
  };
};

const ConnectedApp = connect(null, mapDispatchToProps)(App);

if (process.env.NODE_ENV !== "test") {
  ReactDOM.render(
    <ConnectedApp store={store} />,
    document.getElementById("YouTube")
  );
  registerServiceWorker();
}
