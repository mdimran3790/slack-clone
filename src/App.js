import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function App() {
  //  const [user,setUser]=useState(null);
   const [{user},dispatch]=useStateValue();

  return (
    <div className="App">
      <Router>
        {!user?(
           <Login/>
        ):(
          <>
          <Header />
          <div className="app__body">
             <Sidebar/>
             {/* React router -> chat screen */}
             <Routes>
              <Route path="/room/:roomId" element={ <h1>Chat screen</h1> } Component={Chat}/>
              <Route path="/" element={ <h1>Welcome</h1>}/>
             </Routes>
          </div>
          </>
        )
}
      </Router>
    </div>
  );
}

export default App;
