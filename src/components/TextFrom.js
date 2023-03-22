import React from 'react'
import { useState } from 'react'

export default function TextFrom(props) {
    const [text , settext]=useState('enter your text here...');
    const [emails , setemails]=useState([])
    const handleonChange=(event)=>{
        settext(event.target.value);
    
    }
    const handleuppercaseclick=()=>{
      settext(text.toUpperCase());
      props.showalert("Converted to Uppercase" , 'success');
    }
    const handlelowercaseclick=()=>{
        settext(text.toLowerCase());
        props.showalert("Converted to Lowercase" , 'success');
      }
      const handleEmailExtractor=()=>{
        
          const regex = /[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g;
          const matches = text.match(regex);
          if(matches.length>0){

            setemails(matches);
            props.showalert("Emails collected successfully " , 'success');
          }
          else{
           props.showalert("No emails in text " , 'danger');
          }
        
        }
         

        
        
      
        
      const handleRemoveExtraSpaces=()=>{
        const test =text;

const removeExtraSpace = (s) => s.trim().split(/ +/).join(' ');

settext(removeExtraSpace(test));
props.showalert("Extra spaces removed successfully" , 'success');
      }


      const handleLineBreaks=()=>{
        let str=text;
       settext( str.replace( /[\r\n]+/gm, " " ))
       props.showalert("Removed Line Breaks successfully " , 'success');
        
      }
      
  return (
    <>
        
<div  style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
<hr />
   
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#0248a3':'white' , color:props.mode==='dark'?'white':'black'}} onChange={handleonChange} id="myBox" cols="30" rows="10">
      
    </textarea>
</div>
<button className='btn btn-primary mx-3 my-3' onClick={handleuppercaseclick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3 my-3' onClick={handlelowercaseclick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-3 my-3' onClick={handleLineBreaks}>Remove Line Breaks</button>
<button className='btn btn-primary mx-3 my-3' onClick={handleEmailExtractor}>Extract E-mails</button>
<button className='btn btn-primary mx-3 my-3' onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>




   <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 style={{'border':'2px solid' , borderColor:props.mode==='dark'?"white" : "black" , 'display':'flex' , 'justifyContent':'center' , 'width':'50%' , 'padding':'1%' , 'borderRadius':'10px' , 'fontFamily':'serif'}}>Your text summary</h1>

    <h4 style={{padding:'10px'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</h4>
    <hr />
    <h5 style={{padding:'10px'}}>Time required to read:   {0.008*text.split(" ").length} minutes</h5>
    <hr />
    <div>
      <h4 style={{padding:'10px'}}>Emails collected</h4>
     <div className="emailss" style={{'padding':'10px'}}>
     {emails.map((email , index)=><li key={index}>{email}</li>)}
     </div> 
    </div>
   </div> 
    
    </>

  )
}

