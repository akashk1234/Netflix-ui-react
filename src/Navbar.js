import {React,useState,useEffect} from 'react'
import './Navbar.css'

function Navbar() {

    const [show,setShow]=useState(false)


    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>460){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    },[])
console.log(show);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
        <img
        style={{width:"160px"}}
        src='/logo.png'
        />
    </div>
  )
}

export default Navbar