import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mainMenu as menuLinks, site } from '../config';

const MenuItem = ({ title, path, subMenu, id }) => {
  const router = useRouter();

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

  return (
    <Nav.Item>
      <Link href={path} passHref>
        <Nav.Link active={router.pathname === path}>{title}</Nav.Link>
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
  return (
    <Navbar style={{backgroundColor:"#ADD8E6"}} expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            src={site.titleImage}
            height="40"
            className="d-inline-block align-top"
            alt="Navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-light">
          <Nav className="justify-content-between ">
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