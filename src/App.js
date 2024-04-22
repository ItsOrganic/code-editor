// App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./components/firebase";
import { onAuthStateChanged } from "firebase/auth"

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Once auth state is determined, setLoading to false
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Render loading indicator while auth state is being determined
  if (loading) {
    return <div>Loading...</div>;
  }

  // If user is authenticated, render the Landing component, otherwise redirect to login
  return (
    <Router>
      <Routes>
        {user ? (
          <Route path="/" element={<Landing user={user} />} />
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

