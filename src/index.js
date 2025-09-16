import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Firebase configuration - REPLACE WITH YOUR OWN CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyCk1c7S1-SRayX5x402qRt6Kmvi1eXTkhJI",
  authDomain: "alpha-note-274ac.firebaseapp.com",
  projectId: "alpha-note-274ac",
  storageBucket: "alpha-note-274ac.appspot.com",
  messagingSenderId: "683733177535",
  appId: "1:683733177535:web:3a3312c51ab980863ce20a",
  measurementId: "G-TV6C3Q316HT"
};

// Initialize Firebase
let firebaseApp;
try {
  firebaseApp = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
  document.getElementById('auth-status').textContent = 'Error initializing Firebase. Check console for details.';
  document.getElementById('auth-status').className = 'status not-logged-in';
}

// Initialize Firebase Authentication and get a reference to the service
let auth;
try {
  auth = getAuth(firebaseApp);
  console.log('Firebase Auth initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase Auth:', error);
  document.getElementById('auth-status').textContent = 'Error initializing Firebase Auth. Check console for details.';
  document.getElementById('auth-status').className = 'status not-logged-in';
}

// Listen for authentication state changes
if (auth) {
  onAuthStateChanged(auth, user => {
    const statusElement = document.getElementById('auth-status');
    
    if (user) {
      console.log('User is logged in:', user);
      statusElement.textContent = `Authenticated: ${user.email || user.displayName || 'User logged in'}`;
      statusElement.className = 'status logged-in';
    } else {
      console.log('No user is logged in');
      statusElement.textContent = 'Not authenticated. Implement login/signup to see user details.';
      statusElement.className = 'status not-logged-in';
    }
  }, error => {
    console.error('Error in auth state change:', error);
    const statusElement = document.getElementById('auth-status');
    statusElement.textContent = 'Authentication error. Check console for details.';
    statusElement.className = 'status not-logged-in';
  });
}
