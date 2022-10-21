import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC79NklXcclh4RZMfrrxKDfQ2qNEq2Fcg8",
  authDomain: "ema-john-2257d.firebaseapp.com",
  projectId: "ema-john-2257d",
  storageBucket: "ema-john-2257d.appspot.com",
  messagingSenderId: "902882562971",
  appId: "1:902882562971:web:7db7f7cde9a042a0fb073e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**
 * apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
 */
