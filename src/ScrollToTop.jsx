import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // scroll main content เมื่อเปลี่ยนหน้า
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname]);


  return null;
}

export default ScrollToTop;
