import './App.css';
import {ThemeProvider} from './context/ThemeContext';
//import Button from './components/Button';
//import Header from './components/Header';
import Container from './components/Container';
import {UserProvider} from './context/UserContext';


function App() {
  return (
    <ThemeProvider>
     <UserProvider>
     <Container/>
     </UserProvider>
     
    </ThemeProvider>
  );
}

export default App;
