 import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import SSRProvider from 'react-bootstrap/SSRProvider'
import Layout from '../components/layout'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer/>
    </SSRProvider>
  )
}

export default MyApp
