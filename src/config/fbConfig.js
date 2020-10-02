import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDu-Aa2hvMylFcrISdOxlIvme6MqnQxdLo",
    authDomain: "marioplan-e4135.firebaseapp.com",
    databaseURL: "https://marioplan-e4135.firebaseio.com",
    projectId: "marioplan-e4135",
    storageBucket: "marioplan-e4135.appspot.com",
    messagingSenderId: "647013726243",
    appId: "1:647013726243:web:dd6af0f3b1583aafb75996"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseConfig