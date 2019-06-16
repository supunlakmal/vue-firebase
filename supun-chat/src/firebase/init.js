import firebase from 'firebase';
import firestore from 'firebase/firestore';
  // Initialize Firebase
  var config = {
    apiKey: "fgbHJKHjbfgbgnbn",
    authDomain: "supun-chat.firebaseapp.com",
    databaseURL: "https://supun-chat.firebaseio.com",
    projectId: "supun-chat",
    storageBucket: "supun-chat.appspot.com",
    messagingSenderId: "465465654"
  };
  const firebaseApp =   firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots:true});
export default firebaseApp.firestore();