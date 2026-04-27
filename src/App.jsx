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
        

          <Route path="counter1" element={<Counterwithusestate />} />
          <Route path="counter2" element={<ReducerCounter_ />} />
          <Route path="profile" element={<Staticprofile_ />} />

          <Route path="dynamic" element={<div className="container mt-4">
            <h2 className="mb-4">Student Profiles Cards</h2>
            <h4>Dyynamic React Component Assignment</h4>
            <div className="d-flex gap-3 flex-wrap">
              <DynamicProfileCard
                name="John Deo"
                role="Frontend Devloper"
                desc="I enjoy building clean and responsive user interfaces using react!"
                img={cloudImg}
              />

              <DynamicProfileCard
                name="Jennifer Martin"
                role="Backend Development Student"
                desc="I  enjoy building fast api using python and fastapi"
                img={batmanImg}
              />

              <DynamicProfileCard
                name="Thomas smith"
                role="Full stack Development student"
                desc="I enjoy building clean and responsive user interfaces and api using react"
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