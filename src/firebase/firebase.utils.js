import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBTMK7Z0eSBpWrs40lbgu_bvdh9UsZwLEI',
  authDomain: 'crwn-db-d6ba5.firebaseapp.com',
  databaseURL: 'https://crwn-db-d6ba5.firebaseio.com',
  projectId: 'crwn-db-d6ba5',
  storageBucket: 'crwn-db-d6ba5.appspot.com',
  messagingSenderId: '181926690227',
  appId: '1:181926690227:web:637940ebad4e754735dfc6',
  measurementId: 'G-QJ8YGEFT72'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
