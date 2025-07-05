import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // ✅ Import the default export
import AuthForm from './AuthForm';

const Dashboard = () => {
  const { user } = useContext(AuthContext); // ✅ Get user state

  if (!user) {
    return (
      <div className="App">
        <h1>Login or Register</h1>
        <p>Please log in or register to view available jobs.</p>
        <AuthForm isLogin={false} /> {/* ✅ Show Register form */}
        <br />
        <AuthForm isLogin={true} /> {/* ✅ Show Login form */}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Available Jobs</h1>
      <p>No jobs found or loading...</p>
    </div>
  );
};

export default Dashboard;