// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2dUxX15EUo4PWmms7MoNVv1c6qM3U708',
  authDomain: 'react-simple-authenticat-28f36.firebaseapp.com',
  projectId: 'react-simple-authenticat-28f36',
  storageBucket: 'react-simple-authenticat-28f36.appspot.com',
  messagingSenderId: '287027140923',
  appId: '1:287027140923:web:813439340683a347deff1e',
  measurementId: 'G-NL93HXEYZ8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
