import { useTheme } from '../context/ThemeContext'

function Header() {
    const { theme } = useTheme()
  return (
    <div>Active Theme(Header):{theme} </div>
  )
}

export default Header
