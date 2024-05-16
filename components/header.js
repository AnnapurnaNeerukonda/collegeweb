import { Container, Nav, Navbar, NavDropdown, Modal, Form, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mainMenu as menuLinks } from '../config';
import { useState } from 'react';
import LoginModal from '../pages/Login';

const MenuItem = ({ title, path, subMenu, id }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false); // Move state up to Header component

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleMenuItemClick = (path) => {
    if (path === '/leftnavbar') {
      router.push('/leftnavbar');
    } else {
      router.push(path);
    }
  };

  if (subMenu) {
    const activeChild = subMenu.find((item) => router.pathname === item.path);
    return (
      <NavDropdown title={title} id={`nav-dropdown-${id}`} active={!!activeChild}>
        {subMenu.map((item, index) => (
          <DropdownItem {...item} key={index} />
        ))}
      </NavDropdown>
    );
  }

  if (title === 'Login') {
    return (
      <>
        <Nav.Item>
          <Nav.Link onClick={handleLoginClick}>{title}</Nav.Link>
        </Nav.Item>
        <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      </>
    );
  }

  return (
    <Nav.Item>
      <Link href={path} passHref>
        <Nav.Link active={router.pathname === path} onClick={() => handleMenuItemClick(path)}>
          {title}
        </Nav.Link>
      </Link>
    </Nav.Item>
  );
};


const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter();

  if (divider) {
    return <NavDropdown.Divider />;
  }

  return (
    <Link href={path} passHref>
      <NavDropdown.Item active={router.pathname === path}>{title}</NavDropdown.Item>
    </Link>
  );
};

const Header = () => {
  const router = useRouter();

  const handleMenuClick = (path) => {
    router.push(path);
  };
  return (
    <Navbar style={{ backgroundColor: "#ADD8E6" }} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            src="/images/svecw-logo.png"
            height="40"
            className="d-inline-block align-top"
            alt="Navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="justify-content-between " style={{ fontWeight: "bold" }}>
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;