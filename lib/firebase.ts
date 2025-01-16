
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = { 
    apiKey : "AIzaSyDjB9J77JWairjFmpHLiMRmuX7HARF_Ex8" , 
    authDomain : "simulaai-54b3d.firebaseapp.com" , 
    projectId : "simulaai-54b3d" , 
    storageBucket : "simulaai-54b3d.firebasestorage.app" , 
    messagingSenderId : "828100350391" , 
    appId : "1:828100350391:web:f8d4e89a731096b7e51832" , 
    measurementId : "G-FGRLG9WYRL" 
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Firebase Authentication
export const auth = getAuth(app);

// Exporta a instância do app para outros serviços, se necessário
export default app;