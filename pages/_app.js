import '../styles/style.css'
import '../assets/css/core/persian-fonts.css'
import Layout from '../Layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>

      <Component {...pageProps} />

    </Layout>



  )
  
  
}

export default MyApp
