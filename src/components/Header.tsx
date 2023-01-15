import React from "react";
import { mdiRocketLaunchOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "gatsby";

function Header() {
  return (
    <header className="sticky top-0 bg-white">
      <nav className="h-[72px] px-4 flex justify-between items-center mx-auto max-w-screen-xl font-bold">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <Icon path={mdiRocketLaunchOutline} size="24px" />
            </div>
            <span>MINSEOK SEO</span>
          </div>
        </Link>
        <div className="flex gap-7">
          <Link to="/">INTRODUCE</Link>
          <Link to="/works">WORKS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
