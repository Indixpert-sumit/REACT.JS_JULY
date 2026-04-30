import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { FcFolder } from "react-icons/fc";
import { LuFolderCode } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

const RbBreadCrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Dynamic breadcrumbs logic
  const breadcrumbs = [
    { name: "Home", path: "/", icon: <FcFolder className="me-1" /> },
    ...pathParts.map((part, index) => {
      const path = "/" + pathParts.slice(0, index + 1).join("/");
      const name = part.charAt(0).toUpperCase() + part.slice(1);
      return { name, path, icon: <LuFolderCode className="me-1" /> };
    }),
  ];

  return (
    <Breadcrumb 
      className="d-flex align-items-center" 
      listProps={{ className: "align-items-center" }}
    >
     
      
      <Breadcrumb.Item active className="d-inline-flex align-items-center">
        <FcFolder className="me-1" /> Home <span><IoIosArrowForward />
</span>
      </Breadcrumb.Item>

      <Breadcrumb.Item active  className="d-inline-flex align-items-center">
        <FcFolder className="me-1" /> Library<span><IoIosArrowForward />
</span>
      </Breadcrumb.Item>

      <Breadcrumb.Item active className="d-inline-flex align-items-center">
        <LuFolderCode className="me-1" /> <span>To-Do-List</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default RbBreadCrumb;