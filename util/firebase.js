// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIoLDR0KIOkr5H-oaf3enEHCOUrZEcD5M",
  authDomain: "hackcamp-cafe-4e25f.firebaseapp.com",
  projectId: "hackcamp-cafe-4e25f",
  storageBucket: "hackcamp-cafe-4e25f.appspot.com",
  messagingSenderId: "105714849338",
  appId: "1:105714849338:web:acc08ed02db84d78130703",
  measurementId: "G-96E8G0T6K6"
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
  },

  placeOrder: async (order) => {
    await addDoc(collection(db, 'orders'), order);
  }
}

export default firestore;
