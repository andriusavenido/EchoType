import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider } from './context/AuthContext.jsx';
import { ActivePageContextProvider } from './context/ActivePageContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ActivePageContextProvider>
       <AuthContextProvider> 
        <App /> 
        </AuthContextProvider>
    </ActivePageContextProvider>
      
   
  </React.StrictMode>,
)
