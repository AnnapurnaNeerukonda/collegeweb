import Header from './header';
import { mainMenu, site } from '../config/index';

const Layout = ({ children }) => (
  <>
    <Header titleImage={site.titleImage} />
    <main>{children}</main>
  </>
);

export default Layout;
