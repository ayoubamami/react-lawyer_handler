import { useState } from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Clients from "./pages/Clients";
import TimeTable from "./pages/TimeTable";
import Settings from "./pages/Settings";
import Archive from "./pages/archive";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
import { Routes, Route } from "react-router-dom";
import Sessions from "./pages/Sessions";
import ColTable from "./components/ColTable";




function App() {
   const test = 1 ;
  
  return (
    <>
    {test === 1 ? ( 
     <div>     
      <h1>testing</h1>
      <Test />
     </div>
    
    ) :(
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>)}
    </>
  );
}

export default App;
