import "../styles/globals.css";
import "../styles/fonts.css";
import { Provider } from "react-wrap-balancer";
import Layout from "../components/BaseLayout";
import theme from "../lib/theme";
import { ThemeUIProvider } from "theme-ui";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeUIProvider>
  );
}

export default MyApp;
