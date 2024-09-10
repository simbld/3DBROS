import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "@store/store";
import "@styles/_app.scss";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorProvider } from "@contexts/errorContext";
import { LoadingProvider } from "@contexts/loadingContext";

/**
 * Composant racine de l'application Next.js.
 * @param {AppProps} param0 - Propriétés de l'application.
 * @returns {JSX.Element} Composant enveloppé avec le Provider Redux et autres contextes.
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorProvider>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </ErrorProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
