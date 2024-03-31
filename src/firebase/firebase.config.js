// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjenTE7jOKhcuqkpqbMI2U2F01YmFjcY0",
  authDomain: "auth-react-firebsae.firebaseapp.com",
  projectId: "auth-react-firebsae",
  storageBucket: "auth-react-firebsae.appspot.com",
  messagingSenderId: "592693179579",
  appId: "1:592693179579:web:f2b6726063e6c3e16ee59e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
