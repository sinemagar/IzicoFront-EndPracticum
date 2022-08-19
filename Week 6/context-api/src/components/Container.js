
import Header from './Header'
import Button from './Button'
import {useTheme} from '../context/ThemeContext'
import '../App.css';
import Profile from './Profile';




function Container() {
    const {theme}=useTheme()
   // console.log("theme:",theme);
  return (
    <div className={`app ${theme} `}>
       <Header/>
      <hr/>
      <Button/>
      <hr/>
      <Profile/>
    </div>
  )
}

export default Container
