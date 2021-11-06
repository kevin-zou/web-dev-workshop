// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLy_yc64qUFvByO8uO-w0cHifbbAUW4w0",
  authDomain: "hackcamp-cafe.firebaseapp.com",
  projectId: "hackcamp-cafe",
  storageBucket: "hackcamp-cafe.appspot.com",
  messagingSenderId: "566287504596",
  appId: "1:566287504596:web:dc13ca6d2d2be6a9c85741",
  measurementId: "G-2530P5DJMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export firestore
const firestore = {
  getMenuItems: async () => {
    const menuItemsCollection = collection(db, 'menuItems');
    const snapshot = await getDocs(menuItemsCollection);
    const menuItems = snapshot.docs.map(doc => doc.data());
    return menuItems;
  } 
}

export default firestore;
