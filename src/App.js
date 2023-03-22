import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	
} from 'react-router-dom';


function App() {
  const [alert , setAlert]=useState(null);

  const showalert=(message , type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [darktitle , setDarktitle]=useState("Enable DarkMode");


  const [mode , setmode]=useState('light'); // weather darkmode is enbled or not
  

  const togglemode=()=>{
   
   

    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#020926'
      showalert("Darkmode has been Enabled" , 'success');
      setDarktitle("Enable LightMode")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert("Darkmode has been Disabled" , 'success');
      setDarktitle("Enable Darkmode");
    }
    
  }
  return (
    <>
        <Router>


      <Navbar title="TextEditor" mode={mode} togglemode={togglemode}  darktitle={darktitle}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
      

      
        
      <Routes>
	<Route exact path='/' element={<TextFrom heading="Enter the text here to analyze" showalert={showalert} mode={mode}></TextFrom>}></Route>
	<Route exact path='/about' element={<About></About>}></Route>
	
</Routes>

       
          {/* <TextFrom heading="Enter the text here to analyze" showalert={showalert} mode={mode}></TextFrom>  */}
      
      
      
     

      </div>
        </Router>
        
    </>
  );
}

export default App;
