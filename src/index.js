import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootreducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

//for render on auth ready
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

// const store = createStore(
//   rootReducer, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase})), // redux bindings for firestore
//   )
//   // compose(
//   //   applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),    
//   //   reactReduxFirebase(fbConfig), // redux binding for firebase
//   //   reduxFirestore(fbConfig), // redux bindings for firestore
//   // )
// );

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const profileSpecificProps = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false,
};

const rffProps = {
  firebase, 
  config: fbConfig && profileSpecificProps, //important!
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="center">
        {" "}
        <p>Loading...</p>
      </div>
    );
  return children;
}

ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();