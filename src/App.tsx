import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './app/login';
import RegisterPage from './app/register';
import HomePage from './app/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;