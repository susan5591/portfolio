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
    const position = temp.getBoundingClientRect().height
    const position1 = temp1.getBoundingClientRect().height
    const position2 = temp2.getBoundingClientRect().height
    const position3 = temp3.getBoundingClientRect().height
    const position4 = temp4.getBoundingClientRect().height
    const position5 = temp5.getBoundingClientRect().height
    let a = position+position1;
    let b = a+position2;
    let c = b+position3;
    let d = c+position4;
    let e = d+position5;
    
    // console.log(position)
    // console.log(position1)
    // console.log(position2)
    // console.log(position3)
    // console.log(position4)
    // console.log(position5)
    
    let y = window.pageYOffset
    setData(y)
    // console.log(data)
    console.log(y)
    if(y>=0&&y<position){
      return setActiveNow("#")
    }else if(y>position&&y<a){
      return setActiveNow("#about")
    }else if(y>a&&y<b){
      return setActiveNow("#experience")
    }else if(y>b&&y<c){
      return setActiveNow("#services")
    }else if(y>c&&y<d){
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