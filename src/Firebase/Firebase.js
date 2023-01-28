
import { initializeApp } from "firebase/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEjzaRUSizK-ESC1LUm1HqDQ-9bHbjUiU",
  authDomain: "jiomart-50989.firebaseapp.com",
  projectId: "jiomart-50989",
  storageBucket: "jiomart-50989.appspot.com",
  messagingSenderId: "71378898297",
  appId: "1:71378898297:web:d9f78ad0f281ef4ac933a8",
  measurementId: "G-Z0P2XZ9RBL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
