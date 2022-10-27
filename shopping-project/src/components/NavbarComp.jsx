import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavbarComp() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <FontAwesomeIcon icon={faShop} /> SHOP
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav >
                {/**로그인이 되었을때 출력될 컴포넌트 */}
                <NavLink className="nav-link" to="/mypage">
                  {}님의 MyPage
                </NavLink>
                <Button variant="outline-light">Logout</Button>{" "}
              </Nav>
            ) : (
              <div>
                {/** 로그인이 되지 않았을때 출력될 컴포넌트 */}
                <Button variant="outline-light">Login</Button>{" "}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
