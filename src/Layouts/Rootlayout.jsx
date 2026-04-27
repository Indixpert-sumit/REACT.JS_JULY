import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const RootLayout = () => {
  return (
    <div >
      <div className="row">

        <nav className="col-md-3 col-lg-2 d-md-block bg-white border-end shadow-sm p-4">

          <div className="d-grid gap-2">
            <Button >Bootstrap  Components</Button>
          </div>

          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <NavLink to="/counter1"
              >
                Counter useState
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/counter2"
              >
                Counter Reducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile"
              >
                Static Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dynamic"
              >
                Dynamic Profile
              </NavLink>
            </li>
          </ul>
        </nav>

        <main className="col-md-9 ">
          <div className=" min-vh-100">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
};

export default RootLayout;