import React from 'react';
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div>
      <Navbar />
      <Add />
      <EmployeeList />
    </div>
    
  );
}

export default App;