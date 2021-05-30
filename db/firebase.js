import firebase from "firebase";
import "firebase/firestore";
import firebaseConfig from "../config/firebaseConfig";
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

export default {
  firebase,
  db,
};
