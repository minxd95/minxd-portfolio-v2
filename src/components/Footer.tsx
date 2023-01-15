import React from "react";

function Footer() {
  return (
    <footer className="bg-white w-full h-[144px] mt-24">
      {/* <div>
        Design inspired by{" "}
        <a href="https://benadam.me/" target="_blank" rel="noreferrer">
          Ben Adam
        </a>
      </div> */}
      <div className="h-full max-w-screen-md mx-auto px-4 flex items-center">
        <p className="font-medium">
          Copyright 2023. Minseok Seo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
