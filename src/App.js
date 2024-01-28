import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null); 
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode has been Disabled", "Success");
    }
  };

  return (
    <>
      {/* <Navbar title= "Stark" aboutText= "About Us" />
      <Navbar/> */}
      {/* <Router> */}
      <Navbar title="Stark TextUtils" mode={mode} toggleMode= {toggleMode}/>
      <Alert alert={alert}/>

      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}></Route> */}

          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
     {/* </Routes> */}
     </div>
     {/* </Router> */}
        
      
    </>
  );
}

export default App;
