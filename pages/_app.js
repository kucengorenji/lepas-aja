import '../styles/globals.css';
import Layout from '../components/Layout';
import '../config/firebase.config.js';
import AuthStateChangeProvider from '../context/auth';
import { UserProvider } from '../context/user';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthStateChangeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthStateChangeProvider>
    </UserProvider>
  );
}

export default MyApp;
