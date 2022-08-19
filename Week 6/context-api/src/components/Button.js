
import { useTheme } from '../context/ThemeContext';


function Button() {
    //app.js -> ThemeContext.Provider value={"dark"} dark'a ulaşıldı
    const { theme, setTheme } = useTheme()

    const changeButtonText = theme === "light" ? "dark" : "light";

    return (
        <div>
            Active Theme: {theme}
            <br />
            <button onClick={() => setTheme(changeButtonText)}>
                {`${changeButtonText} Mode`}
            </button>
        </div>
    )
}

export default Button
