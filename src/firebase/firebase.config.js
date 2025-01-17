// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBOOzT89KA9lUSQmQoW10ySkkHwM2ckJBs',
  authDomain: 'newsprotal-b01d8.firebaseapp.com',
  projectId: 'newsprotal-b01d8',
  storageBucket: 'newsprotal-b01d8.firebasestorage.app',
  messagingSenderId: '35748962531',
  appId: '1:35748962531:web:a3b872a4de2ded712225d6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
export default Auth;
