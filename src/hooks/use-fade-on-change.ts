import { useEffect, useState } from "react";

export default function useFadeOnChange<T>(key: T, durationMs: number) {
  const [isVisible, setIsVisible] = useState(true);
  const [prevKey, setPrevKey] = useState(key);

  if (key !== prevKey) {
    setPrevKey(key);
    setIsVisible(false);
  }

  useEffect(() => {
    if (isVisible) return;
    const timeout = setTimeout(() => setIsVisible(true), durationMs);
    return () => clearTimeout(timeout);
  }, [isVisible, durationMs]);

  return isVisible;
}
