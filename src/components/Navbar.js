import React from 'react'



export default function Navbar(props) {
  
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
   <img src="data:image/png;base64,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" style={{height:'50px' , width:'50px'}} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
       
      </ul>
      


      
      <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
      
  <input onClick={()=>props.togglemode(null)} className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darktitle}</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}
