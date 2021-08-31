import { Router } from 'react-router';
import './App.css';
import { AuthProvider } from './compontens/login/AuthProvider';
import { Navigation } from './compontens/Navigation/navigation';
import { Frontpage } from './pages/Frontpage/FrontPage';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <Frontpage/>
  //   <AuthProvider>
  // <Router>
  //   <Navigation/>
  //   <Routes/>
  // </Router>
  // </AuthProvider>
  );
}

export default App;
