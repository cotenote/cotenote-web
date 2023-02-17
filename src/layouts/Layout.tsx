import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return <div>header{children}footer</div>;
}

export default Layout;
