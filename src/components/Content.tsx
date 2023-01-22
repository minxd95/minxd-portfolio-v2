import React from "react";

const Content = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="animate-content">{children}</div>;
};

export default Content;
