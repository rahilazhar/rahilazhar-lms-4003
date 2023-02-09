import React from 'react'
import "../CSS Files/Home.css"
import Grid from '../Components/Grid'
import Carousal from '../Components/Carousal'

export default function Home() {
  return (
    <>
    <div className="container-Home">
    <div className='bg-home-text'><h1 id='home'>Home</h1></div>
    <div className='bgimg'>
    <div><h1 id='inside-bg-img-text'>Learning Management System </h1></div></div>
    <Grid/>
    <div className='mid-bg-img'>
    </div>
    <Carousal/>
    
    
    </div>
    </>
  )
  }
