import React from "react";

const Subject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-12 text-4xl font-bold sm:py-24 flex flex-col gap-9 animate-subject">
      {children}
    </div>
  );
};

export default Subject;
