import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB4q83rKIbyjCxc_2N-ZDAmT4prCHrbWWE",
  authDomain: "ecommerce-af028.firebaseapp.com",
  databaseURL: "https://ecommerce-af028.firebaseio.com",
  projectId: "ecommerce-af028",
  storageBucket: "",
  messagingSenderId: "899216912734",
  appId: "1:899216912734:web:0d682c74d637fbefbfdfcf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  console.log("algo");
  return auth.signInWithPopup(provider);
};

export default firebase;
