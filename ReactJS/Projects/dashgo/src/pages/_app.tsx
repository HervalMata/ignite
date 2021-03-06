import { AppProps} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext'
import {makeServer} from "../services/mirage";

if (process.env.NODE_ENV === 'development') {
    makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
        <ChakraProvider resetCSS theme={theme}>
            <SidebarDrawerProvider>
                <Component {...pageProps} />
            </SidebarDrawerProvider>
        </ChakraProvider>
      )
}

export default MyApp
