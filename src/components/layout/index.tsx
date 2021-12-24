import { Page } from "@geist-ui/react";
import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Page
      style={{
        width: "100%",
        maxWidth: "1000px",
        paddingTop: "1rem",
      }}
    >
      <Header />
      <Page.Content>{children}</Page.Content>
      <Footer />
    </Page>
  );
};

export default Layout;
