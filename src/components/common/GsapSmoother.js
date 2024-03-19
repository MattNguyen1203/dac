"use client";
import useChangePage from "@/hooks/useChangePage";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
export default function GsapSmoother() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.9px)" });
  useChangePage()
  useEffect(() => {
      if (!isMobile) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
        ScrollSmoother.create({
          smooth: 0.8,
          effects: true,
          smoothTouch: 0.1,
        });
      }
  }, []);
  return<></>
}
