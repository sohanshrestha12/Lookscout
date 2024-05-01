import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const PageLayout = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 992);

    useEffect(() => {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth >= 992);
      };
      window.addEventListener("resize", handleResize);
    }, []);
  return (
    <>
      <Navbar isWideScreen={isWideScreen} />
      <div className={isWideScreen ? "container" : "container-fluid"}>
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
