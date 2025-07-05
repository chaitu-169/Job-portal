import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext'; // ✅ Import named export

function App() {
  return (
    <Router>
      <AuthProvider> {/* ✅ Wrap with AuthProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<AuthForm isLogin />} />
          <Route path="/register" element={<AuthForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;