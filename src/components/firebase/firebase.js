import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbqr293G4MiPsc5ofYbXRoGYndsTbE20M",
  authDomain: "samvaad-chat.firebaseapp.com",
  projectId: "samvaad-chat",
  storageBucket: "samvaad-chat.appspot.com",
  messagingSenderId: "366326650289",
  appId: "1:366326650289:web:9b981e6da614d4f4af1990",
};
export const auth = firebase.initializeApp(firebaseConfig).auth();
