import { DisneyProvider } from '../hooks/DisneyContext'
import '../styles/globals.css'
import '../styles/colors.css'


function MyApp({ Component, pageProps }) {
  return (
  <DisneyProvider>
    <Component {...pageProps} />
  </DisneyProvider>
  )
}

export default MyApp
