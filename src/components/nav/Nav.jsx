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
  const [activeNow,setActiveNow] = useState('#')
  const [data,setData] = useState(0)

  const po = ()=>{
    var temp = document.getElementById('header')
    var temp1 = document.getElementById('about')
    var temp2 = document.getElementById('experience')
    var temp3 = document.getElementById('services')
    var temp4 = document.getElementById('portfolio')
    var temp5 = document.getElementById('contact')

    const position = temp.offsetTop-128
    const position1 = temp1.offsetTop-128
    const position2 = temp2.offsetTop-128
    const position3 = temp3.offsetTop-128
    const position4 = temp4.offsetTop-128
    const position5 = temp5.offsetTop-128

    let y = window.pageYOffset
    setData(y)

    if(y>=0&&y<position1){
      return setActiveNow("#")
    }else if(y>position1&&y<position2){
      return setActiveNow("#about")
    }else if(y>position2&&y<position3){
      return setActiveNow("#experience")
    }else if(y>position3&&y<position4){
      return setActiveNow("#services")
    }else if(y>position4&&y<position5){
      return setActiveNow("#portfolio")
    }else{
      return setActiveNow("#contact")
    }
  }
  useEffect(()=>{   
    window.addEventListener('scroll',po)
  },[data])
  return (
    <nav>
      <a href="#" className={activeNow==='#'?'active':''}><AiOutlineHome/></a>
      <a href="#about" className={activeNow==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" className={activeNow==='#experience'?'active':''}><BiBook/></a>
      <a href="#services"  className={activeNow==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#portfolio"  className={activeNow==='#portfolio'?'active':''}><FaBriefcase/></a>
      <a href="#contact"  className={activeNow==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav