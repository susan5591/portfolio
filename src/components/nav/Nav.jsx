import React,{useEffect} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {FaBriefcase} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNow,setActiveNow] = useState('#header')
  const [data,setData] = useState(0)
  
  const po = ()=>{
    let y = window.pageYOffset        
    setData(y)
    const arr = ['portfolio','header','about','experience','services','contact']
    arr.map((item)=>{
      let of=document.getElementById(item).offsetTop      
      let t=document.getElementById(item).getBoundingClientRect().height      
      let he = of+t
      if((y>=of-64)&&(y<he)){
        setActiveNow('#'+item)
        return item
      }
      return item
    })
  }
  useEffect(()=>{   
    window.addEventListener('scroll',po)
  },[data])
  return (
    <nav>
      <a href="#" className={activeNow==='#header'?'active':''}><AiOutlineHome/></a>
      <a href="#about" className={activeNow==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" className={activeNow==='#experience'?'active':''}><BiBook/></a>
      <a href="#services"  className={activeNow==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#portfolio"  className={activeNow==='#portfolio'?'active':''}><FaBriefcase/></a>
      <a href="#contact"  className={activeNow==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav