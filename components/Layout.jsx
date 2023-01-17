import { Footer, Navbar } from ".";

import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Willcommerce</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
