// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCn1O_KoKtUVS1KFLeOZ7aXhiLWlMYVwjk',
  authDomain: 'insta-2-1fcff.firebaseapp.com',
  projectId: 'insta-2-1fcff',
  storageBucket: 'insta-2-1fcff.appspot.com',
  messagingSenderId: '831869615152',
  appId: '1:831869615152:web:c598c14b0c4768404f41f5',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
