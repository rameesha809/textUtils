import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className='navbar-brand' to="/">{props.title}</Link>
        <ul className="navbar nav" >
        </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='dark'||props.mode=== 'grey'?'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark mode</label>
</div>
<div className={`form-check form-switch text-${props.cm==='grey'?'white':'grey'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.custommode} role="switch" id="flexSwitchCheckDefault2" />
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault2">Enable Custom mode</label>
</div>
    </nav>    
</>
  )
}