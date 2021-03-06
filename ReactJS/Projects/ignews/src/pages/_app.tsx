import '../styles/global.scss'
import {Header} from "../components/Header";
import { Provider as NextAuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
      <NextAuthProvider session={pageProps.Session}>
        <Header />
        <Component {...pageProps} />
      </NextAuthProvider>
  )
}

export default MyApp
