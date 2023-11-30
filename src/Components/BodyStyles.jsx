import  { useContext, useEffect } from "react";
import { ThemeContext } from "./utils/global.context";

const BodyStyles = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    
    return () => {
      document.body.classList.remove("light", "dark");
    };
  }, [theme]);

  return null;
};

export default BodyStyles;