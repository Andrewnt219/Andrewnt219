import { AnimatePresence } from "framer-motion";
import React, { ReactElement, useState } from "react";
import { Hamburger } from "./Hamburger";
import { MobileNavigationItems } from "./MobileNavigationItems";

type Props = {};

function MobileNavigation({}: Props): ReactElement {
  // control menu open state
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  return (
    <>
      <AnimatePresence>
        {menuIsOpened && (
          <MobileNavigationItems
            onNavItemClicked={() => setMenuIsOpened(false)}
          />
        )}
      </AnimatePresence>
      <Hamburger isOpened={menuIsOpened} setIsOpened={setMenuIsOpened} />
    </>
  );
}

export { MobileNavigation };
