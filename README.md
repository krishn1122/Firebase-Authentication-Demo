# Firebase Authentication Demo

A simple and clean implementation of Firebase Authentication for web applications. This project demonstrates user login and sign-up functionality using Firebase services.

## Features

- User authentication with Firebase
- Real-time authentication state monitoring
- Minimal and clean implementation
- Easy to extend and customize

## Prerequisites

- Node.js (v14 or higher recommended)
- A Firebase account and project
- Basic knowledge of HTML, CSS, and JavaScript

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/firebase-auth-demo.git
cd firebase-auth-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Register your web app in the Firebase project settings
3. Copy your Firebase configuration object
4. Replace the configuration in [src/index.js](file:///d:/firebase/src/index.js) with your own

### 4. Development

```bash
npm run dev
```

This will start the development server and watch for changes.

### 5. Build for Production

```bash
npm run build
```

The built files will be available in the `dist/` directory.

## Project Structure

```
firebase-auth-demo/
├── src/
│   ├── index.html
│   └── index.js
├── dist/
├── docs/
├── package.json
├── webpack.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## Firebase Configuration

To use this project with your own Firebase project, replace the configuration object in [src/index.js](file:///d:/firebase/src/index.js):

```javascript
const firebaseApp = initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
});
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](file://d:\firebase\CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.


## Acknowledgments

- Firebase documentation and examples
- Webpack documentation
