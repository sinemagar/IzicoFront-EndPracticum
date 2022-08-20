//import { ButtonBase } from '@material-ui/core';
import React from 'react'
import { useTheme } from '../../context/ThemeContext'

function Button() {

    const {theme,setTheme}= useTheme();
    const changeButtonText =theme==="light" ? "dark" : "light";
  return (
    <div>
      <br/>
      <button className='mt-5' onClick={()=>setTheme(changeButtonText)}>
      {`${changeButtonText} Mode`}
      </button>
    
    </div>
  )
}

export default Button
