import React from 'react'
import s from "./Home.module.css"

import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"

export default function Home() {
  return (
    <div className={s.home}>
        <Navbar/>
        <Footer/>
    </div>
  )
}
