import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Slot from "./routes/Slot";
import Accepted from "./routes/Accepted";
import NotFound from "./routes/NotFound";

import { AuthProvider } from './contexts/AuthContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt-8b4y3dAOemsIwX0obm-URfDcYYq-Pg",
  authDomain: "chowllenge.firebaseapp.com",
  projectId: "chowllenge",
  storageBucket: "chowllenge.appspot.com",
  messagingSenderId: "333844702777",
  appId: "1:333844702777:web:386365469f0b9b0391cfe8",
  measurementId: "G-C5QZEXP9QC"
};


export default function Index(){

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth();

  return(
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login a={auth} p={provider}/>} />
          <Route path="/slot" element={<Slot a={auth} d={db}/>}/>
          <Route path="/accepted" element={<Accepted a={auth} d={db}/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    );
};
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
