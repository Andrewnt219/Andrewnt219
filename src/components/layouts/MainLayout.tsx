import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";
import { HeadMeta } from "../head/HeadMeta";
import { GlobalNumbers, GlobalStyling } from "@src/constants/global.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";
import drop from "lodash/drop";
import { Snackbar } from "../ui/Snackbar";

type Props = {
  children: ReactNode;
};

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  /* SECTION Snack bar */
  // handle snackbar message
  const [snackbarMessages, setSnackbarMessages] = useState<string[]>([]);

  const displaySnackbar = (message: string) => {
    setSnackbarMessages((prevMessages) => prevMessages.concat(message));

    setTimeout(() => {
      setSnackbarMessages((prevMessages) => drop(prevMessages));
    }, GlobalNumbers.SnackbarDisplayDurationInMs);
  };
  /* !SECTION */

  return (
    <SnackbarContext.Provider value={{ displaySnackbar }}>
      <HeadMeta />

      <AppBar height={GlobalStyling.AppBarHeight} />

      <Main>{children}</Main>

      <Footer />

      {snackbarMessages.map((message) => (
        <Snackbar
          key={message + (Math.random() * 100).toString()}
          message={message}
        />
      ))}
    </SnackbarContext.Provider>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  padding: 0 5% 5rem 5%;
  min-height: calc(100vh - ${GlobalStyling.AppBarHeight});

  ${tw`z-10 bg-primary relative top-0 transition-colors duration-theme ease-theme`};
`;

export { MainLayout };
