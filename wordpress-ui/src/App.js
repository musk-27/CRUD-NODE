import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Posts from "./pages/posts"; 
import Calendar from "./pages/calendar"; 
import CreatePost from "./pages/CreatePost"; // Import CreatePost component

function App() {
  return (
    <Router>
      <div className="flex xl:pt-0 pt-10 md:pt-0">
        <Sidebar />
        <div className="flex-1 xl:p-4 lg:p-4 md:p-4 p-2">
          <Routes>
            <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/create-post" element={<CreatePost />} /> {/* New route for CreatePost */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
