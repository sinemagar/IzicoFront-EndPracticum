import React from 'react'
import DaysCard from './Days'
import Dropdown from './DropDown'
import "../App.css"
import Button from './Mode/Button'
import { useTheme } from '../context/ThemeContext'

function Container() {

  //tema değişimi için
  const{theme}=useTheme();
  return (
    <div className={`app ${theme} `} >

      
      <Dropdown/>
      <DaysCard/>
      <hr/>
      <Button/>
     
    </div>
  )
}

export default Container
