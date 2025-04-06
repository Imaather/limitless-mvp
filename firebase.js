// firebase.js

// استيراد المكتبات
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// بيانات المشروع من Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBFlpSbKzwpkayATrvJumUCQc-68sTccHY",
  authDomain: "limitless-auth-2e2ee.firebaseapp.com",
  projectId: "limitless-auth-2e2ee",
  storageBucket: "limitless-auth-2e2ee.appspot.com",
  messagingSenderId: "762209569696",
  appId: "1:762209569696:web:eef496896e9fb1b6f2f2c5"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// التوجيه التلقائي بعد تسجيل الدخول بناءً على الدور
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const role = userSnap.data().role;

      if (role === "client") {
        window.location.href = "client-dashboard.html";
      } else if (role === "provider") {
        window.location.href = "provider-dashboard.html";
      } else {
        window.location.href = "select-role.html";
      }
    } else {
      // لو المستخدم جديد بدون بيانات
      window.location.href = "select-role.html";
    }
  } else {
    // لم يتم تسجيل الدخول
    console.log("لم يتم تسجيل الدخول بعد");
  }
});

export { app, auth, db };