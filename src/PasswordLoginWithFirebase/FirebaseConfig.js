import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDoRkO6udyWuAUP1YNMTqrsrnjH8xeP2E",
  authDomain: "task-154fa.firebaseapp.com",
  projectId: "task-154fa",
  storageBucket: "task-154fa.appspot.com",
  messagingSenderId: "1066858175914",
  appId: "1:1066858175914:web:efbebef92a5c871dcd9fd3",
  measurementId: "G-QLTTNNM9K8",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
