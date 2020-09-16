import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBopSCDwvMnRka6UmnHl-cBggSVs3T-auw",
  authDomain: "welcome-home-f1f37.firebaseapp.com",
  databaseURL: "https://welcome-home-f1f37.firebaseio.com",
  projectId: "welcome-home-f1f37",
  storageBucket: "welcome-home-f1f37.appspot.com",
  messagingSenderId: "584932731101",
  appId: "1:584932731101:web:bf1aee4a7714a46e52d334",
  measurementId: "G-F4QHPSBEY3"
};

const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp, app };
