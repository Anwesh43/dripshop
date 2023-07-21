import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskContainer from './components/container/TasksContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/tasks" element = {<TaskContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
