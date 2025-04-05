// firebase.js
// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBFlpSbKzwpkayATrvJumUCQc-68sTccHY",
  authDomain: "limitless-auth-2e2ee.firebaseapp.com",
  projectId: "limitless-auth-2e2ee",
  storageBucket: "limitless-auth-2e2ee.appspot.com",
  messagingSenderId: "762209569696",
  appId: "1:762209569696:web:eef496896e9fb1b6f2f2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
