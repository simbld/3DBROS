import { AppProps } from "next/app";
import "../styles/_app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
