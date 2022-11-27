import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword,signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const { REACT_APP_API_KEY,REACT_APP_DOMAIN_KEY,
  REACT_APP_DB_URL,REACT_APP_PROJECT,REACT_APP_BUCKET,
  REACT_APP_MESSENGER_ID,REACT_APP_APPID,REACT_APP_MESSUREMENT_ID 
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_DOMAIN_KEY,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP_PROJECT,
  storageBucket: REACT_APP_BUCKET,
  messagingSenderId: REACT_APP_MESSENGER_ID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MESSUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const realDB = getDatabase(app);


const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

const getAuthFromServer = () =>{
    const authen = getAuth(app)
    return authen
}

export {auth,db,realDB,getAuthFromServer,logInWithEmailAndPassword,signInWithEmailAndPassword,logout};