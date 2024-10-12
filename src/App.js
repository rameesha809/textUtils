import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import About from './About';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setalert] = useState(null);
  const [cmode,setCmode] = useState(null);
  const showAlert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggle = () =>{
    
    if(mode==='dark'){
      setMode('light')
      setCmode('light')
      document.body.style.backgroundColor='white'
      document.getElementById("flexSwitchCheckDefault").checked = false;
      document.getElementById("flexSwitchCheckDefault2").checked = false;
      document.body.style.color='black'

    }else if(mode==='grey'){
      setMode('dark')
      setCmode('dark')
      document.getElementById("flexSwitchCheckDefault2").checked = false;
      document.getElementById("flexSwitchCheckDefault").checked = true;
      showAlert("Dark mode enabled","success");
      document.body.style.backgroundColor='#294d71'
      document.body.style.color='white'
      document.title='textutis-darkmode'

    }
    else{
      setMode('dark')
      setCmode('dark')
      document.getElementById("flexSwitchCheckDefault2").checked = false;
      document.getElementById("flexSwitchCheckDefault").checked = true;
      showAlert("Dark mode enabled","success");
      document.body.style.backgroundColor='#294d71'
      document.body.style.color='white'
      document.title='textutis-darkmode'

    }
  }
  const custom =  () =>{
    if(mode==='light'|| mode==='dark')
    {
      setCmode('grey')
      setMode('grey')
      showAlert("Custom mode enabled","success");
      document.body.style.backgroundColor='grey'
      document.body.style.color='black'
      document.getElementById("flexSwitchCheckDefault").checked = false;

      }else{
      setMode('light')
      setCmode('light')
      showAlert("Light mode enabled","success");
      document.getElementById("flexSwitchCheckDefault").checked = false;

      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      
    }
  }
  return (
    <>
    <Router>
     <Navbar title="Text Utility" mode={mode} togglemode={toggle} cm={cmode} custommode={custom}/>
     {console.log(cmode)}
     <Alert alert={alert}/>
     <div className="container">
      <Routes>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/" element={<Textform heading="Enter text to analyze" mode={mode}/>}/>
      </Routes>
     </div>
     </Router>
     </>
  );
}

export default App;
