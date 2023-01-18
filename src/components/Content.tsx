import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col gap-12 animate-content">{children}</div>;
};

export default Content;
