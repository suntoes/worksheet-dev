import { initializeApp, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

let config = {
  apiKey: 'AIzaSyDt6RQD0zEh60DAub_iNFrRp24kzm9pduk',
  authDomain: 'suntoes-firebase.firebaseapp.com',
  databaseURL:
    'https://suntoes-firebase-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'suntoes-firebase',
  storageBucket: 'suntoes-firebase.appspot.com',
  messagingSenderId: '14913016638',
  appId: '1:14913016638:web:df40bc6d054f4c9c5e526f',
  measurementId: 'G-8R62NKSFGL'
}

function initializeAppIfNecessary() {
  try {
    return getApp()
  } catch (any) {
    return initializeApp(config)
  }
}

export const app = initializeAppIfNecessary()
export const auth = getAuth(app)
export const database = getFirestore(app)
