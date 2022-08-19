import {createContext,useState,useEffect, useContext} from 'react'

const ThemeContext = createContext();




export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState(localStorage.getItem('theme')||'light')

//sayfa yenilediğinde en son seçileni localde tut
    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    const values={theme,setTheme};

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}


export const useTheme = () => useContext(ThemeContext)

//export  {useTheme, ThemeProvider} ;
