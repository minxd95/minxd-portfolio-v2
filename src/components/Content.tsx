import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-12 animate-[fade-in_1s_0.5s_ease_backwards]">
      {children}
    </div>
  );
};

export default Content;
