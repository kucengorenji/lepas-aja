import styles from '../styles/Home.module.css';
import Navbar from './navigation-menu/Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
