import { CssBaseline, GeistProvider } from "@geist-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import "@fontsource/outfit/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider>
      <CssBaseline />
      <DefaultSeo {...defaultSEOConfig} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}

export default MyApp;
