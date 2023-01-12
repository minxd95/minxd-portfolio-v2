import React from "react";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white mx-auto px-4 max-w-screen-md min-h-[calc(100vh-144px)]">
      {children}
    </main>
  );
}

export default Main;
