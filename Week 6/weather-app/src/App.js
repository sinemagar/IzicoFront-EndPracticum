
import './App.css';
import Container from './components/Container';
import { ThemeProvider } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherProvider';

function App() {
  return (

    //weather provider
<WeatherProvider>
<ThemeProvider>
  
      <Container/>
   
      </ThemeProvider>
     
    </WeatherProvider>
  );
}

export default App;
