import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Footer } from './compontens/Footer/footer';
import { AuthProvider } from './compontens/login/AuthProvider';
import { Navigation } from './compontens/Navigation/navigation';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <>
    <AuthProvider>
  <Router>
    <Navigation/>
    <Routes/>
  </Router>
  </AuthProvider>
   <Footer/>
   </>
  );
}

export default App;
