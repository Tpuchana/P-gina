import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyA8EahPOk4SlaPR_w40JKxrokyzqmYtEms",
    authDomain: "tumusica-2c9df.firebaseapp.com",
    projectId: "tumusica-2c9df",
    storageBucket: "tumusica-2c9df.firebasestorage.app",
    messagingSenderId: "1025953473217",
    appId: "1:1025953473217:web:fbb242a0baa24b11a96a40"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
