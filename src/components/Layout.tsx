import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
