import React from "react";

type DisplaySnackbar = ({ message }: { message: string }) => void;

type SnackbarContext = {
  displaySnackbar: DisplaySnackbar;
};

/**
 * @description context for Snackbar's message
 */
export const SnackbarContext = React.createContext<SnackbarContext>({
  displaySnackbar: () => {
    return;
  },
});
