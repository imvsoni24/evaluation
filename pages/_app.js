import Navbar from "../component/navbar";

export default function App({ Component, pageProps }) {
  return (<>
      <Navbar/>
      <Component {...pageProps} />
      </>
  )
}
