import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDgfAc7b8U6SZrQnGDgsn33FOIwL1FfRNs',
  authDomain: 'disneyplus-clone-4588f.firebaseapp.com',
  projectId: 'disneyplus-clone-4588f',
  storageBucket: 'disneyplus-clone-4588f.appspot.com',
  messagingSenderId: '15314353328',
  appId: '1:15314353328:web:4f6b23724eec6f4d814f75'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;