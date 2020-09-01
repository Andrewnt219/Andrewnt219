import { UsePopupReturns } from "@src/hooks";
import React from "react";

type SnackbarContext = {
  queueSnackbarMessage: UsePopupReturns<{ message: string }>[1];
};

/**
 * @description context for Snackbar's message
 */
export const SnackbarContext = React.createContext<SnackbarContext>({
  queueSnackbarMessage: () => {
    return;
  },
});
