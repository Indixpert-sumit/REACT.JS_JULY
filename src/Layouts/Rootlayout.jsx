import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const RootLayout = () => {
  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">
        
        <nav className="col-md-3 col-lg-2 d-md-block bg-white border-end shadow-sm p-4">
          
          <div className="d-grid gap-2">
            <button className="btn btn-primary text-start mb-3">Bootstrap Components</button>
          </div>

          <ul className="nav flex-column gap-2"> 
            <li className="nav-item">
              <NavLink 
                to="/counter1" 
              >
                → Counter useState
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/counter2" 
              >
                 Counter Reducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/profile" 
              >
                 Static Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/dynamic" 
              >
                 Dynamic Profile
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-5 bg-light">
          <div className="bg-white p-5 rounded shadow-sm border min-vh-100">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default RootLayout;