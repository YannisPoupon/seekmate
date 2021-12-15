import firebase from 'firebase/compat/app'
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyD_BHBnlJJdp6i-sM1rhq30jbth9yr9-Fc",
  authDomain: "seekteam-b9156.firebaseapp.com",
  projectId: "seekteam-b9156",
  storageBucket: "seekteam-b9156.appspot.com",
  messagingSenderId: "584397465345",
  appId: "1:584397465345:web:a9e109e1c2aa2ace219d00"
}).auth();