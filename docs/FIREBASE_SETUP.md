# Firebase Setup Guide

This guide will help you set up Firebase for this authentication demo project.

## Creating a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter a project name (e.g., "firebase-auth-demo")
4. Accept the terms and conditions
5. Click "Create project"

## Registering Your Web App

1. In the Firebase Console, click the settings gear icon next to "Project Overview"
2. Select "Project settings"
3. Under "Your apps", click the web icon (</>) to create a new web app
4. Enter an app nickname (e.g., "firebase-auth-demo-web")
5. Optionally, check "Also set up Firebase Hosting"
6. Click "Register app"

## Adding Firebase SDK Configuration

After registering your app, Firebase will provide a code snippet with your app's Firebase configuration object. It will look like this:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

Copy this configuration object and replace the one in [src/index.js](file:///d:/firebase/src/index.js) with your own values.

## Enabling Authentication

1. In the Firebase Console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Choose a sign-in method (e.g., Email/Password, Google, etc.)
4. Click the pencil/edit icon next to the method you want to enable
5. Toggle "Enable" to on
6. Click "Save"

## Setting Up Development Environment

1. Clone this repository
2. Run `npm install` to install dependencies
3. Replace the Firebase configuration in [src/index.js](file:///d:/firebase/src/index.js) with your own
4. Run `npm run dev` to start the development server

## Security Rules

For a production application, you should configure security rules in the Firebase Console under "Firestore Database" or "Realtime Database" sections.

## Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Firebase JavaScript SDK Reference](https://firebase.google.com/docs/reference/js)