import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { mainMenu as menuLinks } from '../config';
import { useState } from 'react';
import LoginModal from '../pages/Login';
import styles from '../styles/navbar.module.css'


const MenuItem = ({ title, path, subMenu, id }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };
  const handleMenuItemClick = (path) => {
    router.push(path);
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
      <a
        href={path}
        className={`nav-link ${router.pathname === path ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          handleMenuItemClick(path);
        }}
      >
        {title}
      </a>
    </Nav.Item>
  );
};
const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter();
  if (divider) {
    return <NavDropdown.Divider />;
  }
  return (
    <a
      href={path}
      className={`dropdown-item ${router.pathname === path ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        router.push(path);
      }}
    >
      {title}
    </a>
  );
};


const Header = () => {
  const router = useRouter();

  return (
    <Navbar className={styles.navbar} expand="lg" style={{ backgroundColor: "#ADD8E6" }}>
      <Container fluid>
        <Navbar.Brand className={styles.navbarBrand}>
          <img
            src="/images/svecw-logo.png"
            className={`${styles.navbarimg} d-inline-block align-top`}
            alt="Navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="justify-content-between" style={{ fontWeight: "bold" }}>
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