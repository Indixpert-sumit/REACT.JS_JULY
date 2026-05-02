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
import Todolist from "./pages/Todolist";
import EmployeeTable from "./pages/Rbbadge";
import RbBreadCrumb from "./pages/RB_Breadcrumb";
import RB_Buttons from "./pages/RB_Buttons";
import Button_Group from "./pages/RB_Buttongroup";
import Basic_card from "./pages/Cards";
import RB_images from "./pages/RB_Images";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>


          <Route path="counter1" element={<Counterwithusestate />} />
          <Route path="counter2" element={<ReducerCounter_ />} />
          <Route path="profile" element={<Staticprofile_ />} />
          <Route path="todolist" element={<Todolist />} />
          <Route path="table" element={<EmployeeTable />} />
          <Route path="breadcrumb" element={<RbBreadCrumb/>} />
          <Route path="buttons" element={<RB_Buttons/>} />
          <Route path="button_group" element={<Button_Group/>} />
          <Route path="Basic_card" element={<Basic_card/>} />
          <Route path="RB_images" element={<RB_images />} />

         
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;