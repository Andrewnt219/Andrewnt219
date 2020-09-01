import React, { ReactElement, ReactNode } from "react";
import { AppBar } from "./AppBar";
import { Footer } from "./Footer";
import tw, { styled } from "twin.macro";
import { HeadMeta } from "../head/HeadMeta";
import { GlobalNumbers, GlobalStyling } from "@src/constants/global.constants";
import { SnackbarContext } from "@src/contexts/Snackbar.context";
import { Snackbar } from "../ui/Snackbar";
import { AnimatePresence } from "framer-motion";
import { usePopup } from "@src/hooks";

type Props = {
  children: ReactNode;
};

/**
 * @description renders shared layout between pages
 */
function MainLayout({ children }: Props): ReactElement {
  /* SECTION Snack bar */
  const [snackbarMessages, queueSnackbarMessages] = usePopup<{
    message: string;
  }>(GlobalNumbers.SnackbarDisplayDurationInMs);
  /* !SECTION Snack bar */

  return (
    <SnackbarContext.Provider
      value={{ displaySnackbar: queueSnackbarMessages }}
    >
      <HeadMeta />

      <AppBar height={GlobalStyling.AppBarHeight} />

      <Main>{children}</Main>

      <Footer />

      <AnimatePresence>
        {snackbarMessages.map(({ message, id }) => (
          <Snackbar key={id} message={message} />
        ))}
      </AnimatePresence>
    </SnackbarContext.Provider>
  );
}

type MainProps = {};
const Main = styled.main<MainProps>`
  padding: 0 5% 5rem 5%;
  min-height: calc(100vh - ${GlobalStyling.AppBarHeight});

  ${tw`z-10 bg-primary relative top-0`};
`;

export { MainLayout };
