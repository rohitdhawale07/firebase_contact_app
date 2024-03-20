import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyABO7znO9r0CmRTdIRYLVQ9DdoPDzcBQEs",
  authDomain: "fir-contact-app-e2ac2.firebaseapp.com",
  projectId: "fir-contact-app-e2ac2",
  storageBucket: "fir-contact-app-e2ac2.appspot.com",
  messagingSenderId: "388180610569",
  appId: "1:388180610569:web:ebf1e672801eaa7bf2b2d8",
  measurementId: "G-6T1KKM9WP4",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
