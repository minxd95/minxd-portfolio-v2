import React from "react";

const Content = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  return <div className="flex flex-col gap-20 animate-content">{children}</div>;
};

export default Content;
