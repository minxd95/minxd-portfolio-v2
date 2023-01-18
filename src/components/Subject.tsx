import React from "react";

const Subject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-4xl font-bold py-24 flex flex-col gap-9 animate-subject">
      {children}
    </div>
  );
};

export default Subject;
