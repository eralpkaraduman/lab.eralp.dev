// Based on: https://usehooks.com/useEventListener/

import { useRef, useEffect } from "react";

type UseEventListenerEventHandler = (e: Event) => void;

const useEventListener = (
  eventName: string,
  handler: UseEventListenerEventHandler,
  element: HTMLElement | Window = window
) => {
  const savedHandler = useRef<UseEventListenerEventHandler | null>(null);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;
    const eventListener = (event: Event) => savedHandler?.current?.(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};

export default useEventListener;
