import React, { useState, useEffect } from "react";

export default function useMediaQuery(screenSize: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(screenSize); // returns a MediaQueryList object

    if (media?.matches !== matches) {
      setMatches(media?.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [matches, screenSize]);

  return matches;
}
