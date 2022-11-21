import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, {useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {


const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showalert =(message, type)=>{
  setAlert({
    msg : message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

const toggleMode = ()=>{
  if(mode=='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#515354';
    document.body.style.color = '#ffffff';
    showalert("Dark mode has been applied !", "success" );
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = 'black';
    showalert("Light mode has been applied !", "success" );

  }
}
  return (
  <>
   {/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}></Alert>

<div className="container my-5">
      {/* <Routes> */}
              {/* <Route exact path="/about" element={<About/>}>
                
              </Route>
              <Route exact path="/" element={<Textform showalert={showalert} heading="Text Changer" mode={mode}/>}>
              </Route>
        </Routes> */}
  <Textform showalert={showalert} heading="Text Changer" mode={mode}/>

</div>
{/* 
</Router> */}
  </>
  );
}

export default App;
