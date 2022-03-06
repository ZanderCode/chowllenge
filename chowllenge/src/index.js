import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login";
import Slot from "./routes/Slot";
import Accepted from "./routes/Accepted";
import History from "./routes/History";
import NotFound from "./routes/NotFound";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "./fb/firebase"

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/slot" element={<Slot />} />
              <Route path="/history" element={<History />} />
              <Route path="/accepted" element={<Accepted />} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
