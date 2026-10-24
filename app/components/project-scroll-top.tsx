"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ProjectScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.startsWith("/projects/")) {
      return;
    }

    // Preserve intentional section links such as:
    // /projects/minerva-sentinel#architecture
    if (window.location.hash) {
      return;
    }

    // Run after the new route has painted so browser/Next.js
    // scroll restoration cannot leave the page midway down.
    const frame = requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
