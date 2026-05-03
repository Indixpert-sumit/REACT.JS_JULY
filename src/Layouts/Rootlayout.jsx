import { Outlet, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Button, Col } from "react-bootstrap";

const RootLayout = () => {
  return (
    
    <div className="container-fluid bg-light min-vh-100 p-4">
      
      <div className="row g-4">
        

        <nav className="col-md-3">
          <div>
            <Button >Bootstrap  Components</Button>
          </div>
 <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Non-Intractive components</Accordion.Header>
        <Accordion.Body>
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
              <NavLink to="/todolist">
                Todo-list
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/table">
               RB_Badge
              </NavLink>
            </li>
               <li className="nav-item">
              <NavLink to="/breadcrumb">
               RB_Breadcumb
              </NavLink>
            </li>
                <li className="nav-item">
              <NavLink to="/buttons">
               RB_Buttons
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink to="/button_group">
               RB_Buttons_Group
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/Basic_card">
               Basic_card
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/RB_Images">
              RB_Images
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/RB_Listgroup">
              RB_Listgroup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/RB_Figure">
              RB_Figure
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/RB_pagination">
              RB_pagination
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/RB_progressbar">
              RB_progressbar
              </NavLink>
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Intractive components</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          

          
        </nav>
        <Col>
          <main >
            <div className="card shadow-sm border-0 min-vh-100">
              <div className="card-body">
                <Outlet />
              </div>
            </div>
          </main>
        </Col>
      </div>
    </div>
  );
};

export default RootLayout;