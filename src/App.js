
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
    const [mode,setMode]=useState('light')
   const  toggleMode =()=>
    {
      if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
      }
    }
  return (
       <>
        <div>
        <Navbar title="TextUtils " aboutText="About" mode={mode} toggleMode={toggleMode}  />
        <div className="container my-2">
        <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">DarkMode</label>
</div>
        <TextForm heading="Enter text to analyze" mode={mode}/>
          </div>
      
        </div>
    </>
    );
}

export default App;
