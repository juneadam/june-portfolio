import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);

  useEffect(() => {
    const updateResolution = () => {
      setScreenWidth(window.screen.width);
      setScreenHeight(window.screen.height);
    };

    updateResolution();
  }, []);

  return { screenWidth, screenHeight };
}

export default useScreenSize;
