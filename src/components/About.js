import React, { useState } from 'react'


export default function About() {
    const [mystyle , setmystyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btntext , setbtntext]=useState("Enable Dark Mode");

     const darkmode=()=>{
         if(mystyle.color==='black'){
             setmystyle({
                 color:'white',
                 backgroundColor:'black',
                 border:'1px solid white'
                })
                setbtntext("Enable Light Mode");
        }
        else{
            setmystyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtntext("Enable Dark Mode");
        }
    }
  return (
    <>
    <div classNameName="container" style={mystyle}>

        <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Text-Editor provides you a facility to manipulate your text and performs the following operations like Emails extraction , conversion of text to Uppercase or Lowercase and Remove extra spaces in your text</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Text Editor is absolutely free to use...</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Admin
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>Name:Harshit jain ||</strong> 
        <strong>Contact no:8768787398</strong>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="container">
    <button className='btn btn-primary my-3' onClick={darkmode}>{btntext}</button>
    </div>
    </>
  )
}
