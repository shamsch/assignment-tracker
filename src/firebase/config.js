import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTzoSd6CWwCSp10ahpFs1KkCnfaLwjUJA",
  authDomain: "assignment-tracker-7048a.firebaseapp.com",
  projectId: "assignment-tracker-7048a",
  storageBucket: "assignment-tracker-7048a.appspot.com",
  messagingSenderId: "439558575065",
  appId: "1:439558575065:web:7d92424cfae3b5b65a7fc8"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const project = firebase.firestore()

export {project}