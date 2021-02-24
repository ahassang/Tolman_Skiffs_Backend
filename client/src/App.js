import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import NewSkiff from './components/NewSkiff';
import AllSkiffs from './components/AllSkiffs';
import OneSkiff from './components/OneSkiff';
import EditSkiff from './components/EditSkiff';


function App() {
  const NotFound = () => {
    return (
      <div>Route not Found</div>

    )
  }
  return (
    <div className="App">
      <Router>
        <AllSkiffs path="/skiff" />
        <NewSkiff path="/skiff/new" />
        <OneSkiff path="/skiff/:id" />
        <EditSkiff path="/skiff/:skiffId/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
