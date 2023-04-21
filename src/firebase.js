import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAekVCuNUb_C_s0kPDd6wqs6vXrEvMvriA",
    authDomain: "example-first-f5f00.firebaseapp.com",
    projectId: "example-first-f5f00",
    storageBucket: "example-first-f5f00.appspot.com",
    messagingSenderId: "496890786188",
    appId: "1:496890786188:web:0caf7337795ed7ad3d66a9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;