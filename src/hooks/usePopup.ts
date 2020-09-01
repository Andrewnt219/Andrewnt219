import drop from "lodash/drop";
import { useCallback, useState } from "react";

type PopupItem = {
  id: number;
};
export type UsePopupReturns<T> = [(T & PopupItem)[], (item: T) => void];

/**
 * @description add and remove items from popup queue
 * @returns [items in queue, queue items to list]
 */
export const usePopup = <T extends object>(
  displayTimeInMs: number
): UsePopupReturns<T> => {
  // handle displaying items in queue
  const [itemsInQueue, setItemsInQueue] = useState<(T & PopupItem)[]>([]);

  const queueItemToPopup = useCallback(
    (item: T) => {
      // NOTE create a consistent id across renders for messages
      setItemsInQueue((prevItems) =>
        prevItems.concat({ ...item, id: Math.random() })
      );

      // remove the the added item after a short period
      setTimeout(() => {
        setItemsInQueue((prevItems) => drop(prevItems));
      }, displayTimeInMs);
    },
    [displayTimeInMs]
  );

  return [itemsInQueue, queueItemToPopup];
};
