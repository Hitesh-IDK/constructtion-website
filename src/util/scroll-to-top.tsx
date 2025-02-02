import { PropsWithChildren, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Wrapper({ children }: PropsWithChildren) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}
