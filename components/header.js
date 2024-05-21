"use client";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { mainMenu as menuLinks } from '../config';
import LoginModal from '../pages/Login';
import styles from '../styles/Navbar.module.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MenuItem = ({ title, path, subMenu }) => {
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };
  const handleMenuItemClick = (path) => {
    router.push(path);
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      // Close the menu after clicking an item in mobile view
      setShowMenu(false);
    }
  };

  if (subMenu) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button style={{fontWeight:"500"}} className="text-white font-bold">{title}</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={styles['dropdown-menu-content']}>
          {subMenu.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (title === 'Login') {
    return (
      <>
        <NavigationMenuItem>
          <button style={{fontWeight:"500"}} onClick={handleLoginClick} className="text-white font-bold">{title}</button>
        </NavigationMenuItem>
        <LoginModal show={showLoginModal} onHide={() => setShowLoginModal(false)} />
      </>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        href={path}
        className={`text-white font-bold ${router.pathname === path ? 'underline' : ''}`}
        onClick={() => handleMenuItemClick(path)}
      >
        {title}
      </Link>
    </NavigationMenuItem>
  );
};

const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter();

  if (divider) {
    return <div className="border-t my-1" />;
  }

  return (
    <Link href={path} className={`block px-4 py-2 mt-4 text-white dropdown-item ${router.pathname === path ? 'bg-gray-800' : ''}`}>
      {title}
    </Link>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleMenuClick = (path) => {
    router.push(path);
    setShowMenu(false); // Close the menu after clicking an item
  };

  return (
    <NavigationMenu className={`${styles.navbar} bg-lightblue fixed w-full mt-0`}>
      <div className={`${styles['navbar-content']} mx-auto px-4 sm:px-6 lg:px-8 w-screen h-20`}>
        <div className="flex items-center">
          <img
            src="/images/svecw-logo.png"
            alt="Navbar"
            className={`${styles.navbarimg} mr-4`}
          />
        </div>
        <div className="lg:hidden">
          <button
            className="text-white mt-4"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {showMenu && (
            <div className={`${styles.bglightblue} ${styles.navbarmenu} flex flex-col items-start  text-white absolute top-20 left-0 w-full pl-4`}>
              {menuLinks.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:items-center text-white">
          <NavigationMenuList className="flex flex-col lg:flex-row">
            {menuLinks.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))}
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Header;
