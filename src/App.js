import { useState, useEffect } from "react";
import "./App.css";
import router from './Router'
import { RouterProvider } from "react-router-dom";


function App() {

  
const [user, setUser] = useState({username:"salah", isAdmin: true});

useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user));
}, [user]);

console.log(JSON.parse(localStorage.getItem('user')));
  return (<RouterProvider router={router} />)
}

export default App;
