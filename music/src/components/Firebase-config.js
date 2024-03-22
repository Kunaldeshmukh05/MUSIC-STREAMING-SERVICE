// Firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-Y1iax7f3WrAYStJIrIEycfpwv_SL5cY",
  authDomain: "music-streaming-service-5b99a.firebaseapp.com",
  projectId: "music-streaming-service-5b99a",
  storageBucket: "music-streaming-service-5b99a.appspot.com",
  messagingSenderId: "843242101331",
  appId: "1:843242101331:web:a3b390b10c2763ca5404a6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
