import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";


function App() {
  return (
    <div>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          {/* <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        {/* <Toaster /> */}
      </div>
      
    </div>
  );
}

export default App;
