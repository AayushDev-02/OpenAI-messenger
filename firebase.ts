import { getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwKfqdaaVsyyjTOO4jrtTB2XKAZmLe1l4",
  authDomain: "open-ai-messenger.firebaseapp.com",
  projectId: "open-ai-messenger",
  storageBucket: "open-ai-messenger.appspot.com",
  messagingSenderId: "460076526682",
  appId: "1:460076526682:web:6168bd738e23f368c23c63"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};