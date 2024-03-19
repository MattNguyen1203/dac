'use client'
import { useEffect } from "react";
import { Router } from "next/router";

const useChangePage = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};

export default useChangePage;
