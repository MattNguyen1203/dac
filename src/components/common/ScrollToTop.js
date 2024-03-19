"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0)
    
  }, []);
  return null;
}