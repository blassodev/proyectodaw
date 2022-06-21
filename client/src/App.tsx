import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import MediaApp from './pages/MediaApp';
import { AuthProvider } from './context/Auth';
import RequireAuth from './routes/RequireAuth';

const App: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' />
        <Route path='login' element={<Login />} />
        <Route
          path='mediapp'
          element={
            <RequireAuth>
              <MediaApp />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
