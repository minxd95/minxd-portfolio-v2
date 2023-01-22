import React, { useState } from "react";
import { mdiMenu, mdiRocketLaunchOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "gatsby";

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isMenuSlideOut, setIsMenuSlideOut] = useState(false);

  return (
    <header className="sticky top-0 bg-white z-50">
      <nav className="relative h-[72px] px-4 flex justify-between items-center mx-auto max-w-screen-xl font-bold">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <Icon path={mdiRocketLaunchOutline} size="24px" />
            </div>
            <span>MINSEOK SEO</span>
          </div>
        </Link>
        <div className="hidden sm:flex gap-7">
          <Link to="/">INTRODUCE</Link>
          <Link to="/works">WORKS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <button
          className="flex justify-center items-center sm:hidden w-10 h-10"
          onClick={() => {
            if (!isShowMenu) {
              setIsShowMenu(true);
            } else {
              setIsMenuSlideOut(true);
              setTimeout(() => {
                setIsShowMenu(false);
                setIsMenuSlideOut(false);
              }, 300);
            }
          }}
        >
          <Icon path={mdiMenu} size="24px" />
        </button>
        {isShowMenu && (
          <div
            className={`rounded-b-lg bg-white z-40 flex sm:hidden absolute right-0 top-[72px] w-32 flex-col ${
              !isMenuSlideOut ? "animate-menu-in" : "animate-menu-out"
            }`}
          >
            <ul>
              <MenuItem to="/" text="INTRODUCE" />
              <MenuItem to="/works" text="WORKS" />
              <MenuItem to="/contact" text="CONTACT" />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

const MenuItem = ({ to, text }: { to: string; text: string }) => {
  return (
    <li className="w-full h-12 flex items-center px-4">
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default Header;
