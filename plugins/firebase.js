import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
  apiKey: "AIzaSyAlYn5EVpb1uWZabQ9J6MrvR7tjxkBnUwE",
  authDomain: "nuxt-share-155e0.firebaseapp.com",
  projectId: "nuxt-share-155e0",
  storageBucket: "nuxt-share-155e0.appspot.com",
  messagingSenderId: "816403190363",
  appId: "1:816403190363:web:55ae2410f990276cb6a57e",
 measurementId: "G-45BTN8SXQ7"
    }
  )
}

export default firebase