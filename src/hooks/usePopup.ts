import drop from "lodash/drop";
import { useState } from "react";

type QueueItem = {
  id: number;
};
type Return<T> = [(T & QueueItem)[], (item: T) => void];

/**
 * @description add and remove items from popup queue
 * @returns [items in queue, queue items to list]
 */
export const usePopup = <T extends object>(
  displayTimeInMs: number
): Return<T> => {
  // handle displaying items in queue
  const [itemsInQueue, setItemsInQueue] = useState<(T & QueueItem)[]>([]);

  const queueItemToPopup = (item: T) => {
    // NOTE create a consistent id across renders for messages
    setItemsInQueue((prevItems) =>
      prevItems.concat({ ...item, id: Math.random() })
    );

    // remove the the added item after a short period
    setTimeout(() => {
      setItemsInQueue((prevItems) => drop(prevItems));
    }, displayTimeInMs);
  };

  return [itemsInQueue, queueItemToPopup];
};
