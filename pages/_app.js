import Navbar from "../component/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (<>
      <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      </ChakraProvider>
      </>
  )
}
