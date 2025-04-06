
// firebase.js بدون export
const firebaseConfig = {
  apiKey: "AIzaSyBFlpSbKzwpkayATrvJumUCQc-68sTccHY",
  authDomain: "limitless-auth-2e2ee.firebaseapp.com",
  projectId: "limitless-auth-2e2ee",
  storageBucket: "limitless-auth-2e2ee.appspot.com",
  messagingSenderId: "762209569696",
  appId: "1:762209569696:web:eef496896e9fb1b6f2f2c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
