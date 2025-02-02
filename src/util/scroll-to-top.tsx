import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface props {
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Wrapper({ children, setIsOpen }: props) {
  const location = useLocation();
  useLayoutEffect(() => {
    console.log("Running");

    document.documentElement.scrollTo(0, 0);
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);
  return children;
}
