import React from 'react';
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { v4 as uuidv4 } from "uuid";
import {  navs } from "../../config/config";
import {  nav} from "../Footer/index";
import  {  useState } from "react";

function Footer() {

  const [ setIsCollapsed] = useState(true);
  const handleNavClick = () => {
    setIsCollapsed(true);
  };

  return (
    <footer>
      <div class="news-hub">
    <div class="module medium">
      
      
      <ul>
        <Nav style={nav} className="mr-auto" onClick={handleNavClick}>
          <li>
            {navs.map((navItem) => (
              
              <LinkContainer to={navItem.page} key={uuidv4()}>
                <Nav.Link className="ml-2">{navItem.nav}</Nav.Link>
              </LinkContainer>
              
            ))}
            </li>
          </Nav>
          </ul>

      
    </div>
  </div>
    </footer>
  );
}

export default Footer;
//this is footer