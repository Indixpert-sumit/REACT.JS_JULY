import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./Layouts/Rootlayout";
import Counterwithusestate from "./pages/Counterwithusestate";
import ReducerCounter_ from "./pages/Reducercounter";
import Staticprofile_ from "./pages/Staticprofile";
import DynamicProfileCard from "./pages/Dynamicprofile";

import batmanImg from "./assests/batman.svg";
import cloudImg from "./assests/cloud.svg";
import lazy from "./assests/lazy.svg";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* 1. Standard Routes */}
          <Route path="counter1" element={<Counterwithusestate />} />
          <Route path="counter2" element={<ReducerCounter_ />} />
          <Route path="profile" element={<Staticprofile_ />} />

          {/* 2. FIX: Move the <div> and Cards into the 'element' prop */}
          <Route 
            path="dynamic" 
            element={
              <div className="container mt-4">
                <h2 className="mb-4">Team Profiles</h2>
                <div className="d-flex gap-3 flex-wrap">
                  <DynamicProfileCard 
                    name="Sumit" 
                    role="Frontend Dev" 
                    desc="I love React!" 
                    img={cloudImg} 
                  />

                  <DynamicProfileCard 
                    name="Bruce" 
                    role="Batman" 
                    desc="I am the night." 
                    img={batmanImg} 
                  />
                  
                  <DynamicProfileCard 
                    name="gayitri" 
                    role="Designer" 
                    desc="I build beautiful UIs." 
                    img={lazy}
                  />
                </div>
              </div>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;