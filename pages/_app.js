import "../styles/globals.css";
import Layout from "../hoc/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Layout />
    </>
  );
}

export default MyApp;
