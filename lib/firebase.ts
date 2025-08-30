// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwhvFOwrAPdEYSFKQ72LWdH3b2N073EhQ",
  authDomain: "mypr-a464b.firebaseapp.com",
  projectId: "mypr-a464b",
  storageBucket: "mypr-a464b.firebasestorage.app",
  messagingSenderId: "378414729393",
  appId: "1:378414729393:web:ab6de9ca5dada7bcdb3a90",
  measurementId: "G-Z1LDYTGDFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
