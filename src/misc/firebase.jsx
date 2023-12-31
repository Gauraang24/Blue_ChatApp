import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyAs5RFZqZ9z7XmI6WXYXfaVRhGAwzxIKzo",
  authDomain: "blue-aae75.firebaseapp.com",
  projectId: "blue-aae75",
  storageBucket: "blue-aae75.appspot.com",
  messagingSenderId: "610492602230",
  appId: "1:610492602230:web:ef2e7c29df261a75db0c57"
}

const app = firebase.initializeApp(config)
export const auth = app.auth()
export const database = app.database()
export const storage = app.storage()