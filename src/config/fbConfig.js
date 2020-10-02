import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    //put your firebase config here
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseConfig
