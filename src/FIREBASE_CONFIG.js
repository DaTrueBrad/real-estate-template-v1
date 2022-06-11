import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBH_W1s5i7U9Ehi1LjuxJjVhgCBtovAUGo",
  authDomain: "real-estate-template-84b65.firebaseapp.com",
  projectId: "real-estate-template-84b65",
  storageBucket: "real-estate-template-84b65.appspot.com",
  messagingSenderId: "2192318371",
  appId: "1:2192318371:web:5c82d21fc1cb2259820416",
  measurementId: "G-ZNQ8DD7QDQ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage()
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db
export {firebaseConfig, storage}