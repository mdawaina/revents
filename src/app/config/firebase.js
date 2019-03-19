import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNKJ3hGSPFS-XivKDAA3f06Vr7qzQIHT4",
    authDomain: "revents-144d7.firebaseapp.com",
    databaseURL: "https://revents-144d7.firebaseio.com",
    projectId: "revents-144d7",
    storageBucket: "revents-144d7.appspot.com",
    messagingSenderId: "1068392671717"
}

/* const firebaseConfig = {
  apiKey: "AIzaSyC7WT9fGqBUIniI-J9Pc0HOHY9vBAau3Z4",
  authDomain: "revents-4c316.firebaseapp.com",
  databaseURL: "https://revents-4c316.firebaseio.com",
  projectId: "revents-4c316",
  storageBucket: "revents-4c316.appspot.com",
  messagingSenderId: "539611537160"
}
 */


firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;