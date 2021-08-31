import { Router } from 'react-router';
import './App.css';
import { AuthProvider } from './compontens/login/AuthProvider';
import { Navigation } from './compontens/Navigation/navigation';
import { Routes } from './Routes/Routes';

function App() {
  return (
    <AuthProvider>
  <Router>
    <Navigation/>
    <Routes/>
  </Router>
  </AuthProvider>
  );
}

export default App;
