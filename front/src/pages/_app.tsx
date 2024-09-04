import { AppProps } from "next/app";
import "../styles/_app.scss";
import { Provider } from "react-redux";
import { store } from "../store/store";

/**
 * Composant racine de l'application Next.js.
 * @param {AppProps} param0 - Propriétés de l'application.
 * @returns {JSX.Element} Composant enveloppé avec le Provider Redux.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
