
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDc7sqg3ozxM2o4werUxGUm5DnnwEn6seQ",
    authDomain: "olx-clone-52ae7.firebaseapp.com",
    projectId: "olx-clone-52ae7",
    storageBucket: "olx-clone-52ae7.appspot.com",
    messagingSenderId: "326112469790",
    appId: "1:326112469790:web:4de3661b1d5b0918a95f0f"
  };




const init = initializeApp(firebaseConfig);
export const auth = getAuth(init)
export const firebase = getFirestore(init)

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 