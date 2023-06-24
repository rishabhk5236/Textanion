import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';



function App() {
const[mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='black';
    showAlert('Dark mode enabled','success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert('Light mode enabled','success');
  }
}


  return (
    <>
    <Router>
    <Navbar title='Textaninon' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
      <Route exact path="/" element={<Textform heading='Enter text to analyze' mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    </Router>
    </>

  );
}

export default App;
