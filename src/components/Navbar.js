import React, { useState } from 'react';
//* Router
import { Link } from 'react-router-dom';
// *Styles
import { Nav, Ul, Li, Times } from './NavbarStyledComponents';
//* Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  return (
    <>
      <Nav closeMenu={closeMenu}>
        <Ul>
          <Li>
            <Link to='/'>home</Link>
          </Li>

          <Li>
            <Link to='/authors'>authors</Link>
          </Li>
          <Li>
            <Link to='/categories'>categories</Link>
          </Li>
          <Li>
            <Link to='/quotes'>quotes</Link>
          </Li>
          <Li>
            <Link to='/contact-me'>contact</Link>
          </Li>
        </Ul>
      </Nav>
      <Times closeMenu={closeMenu} onClick={() => setCloseMenu(!closeMenu)}>
        {!closeMenu ? (
          <i className='bi bi-x-lg'></i>
        ) : (
          <i style={{ color: 'black' }} className='bi-list'></i>
        )}
      </Times>
    </>
  );
};

export default Navbar;
