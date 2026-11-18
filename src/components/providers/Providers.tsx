"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Toaster } from "sonner";
import { useSyncExternalStore, type ReactNode } from "react";

function subscribe(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function Providers({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  const content = (
    <MotionConfig reducedMotion="user">
      <Tooltip.Provider delayDuration={200}>
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "var(--c-ink)",
              color: "var(--c-paper)",
              border: "none",
              borderRadius: "14px",
              fontFamily: "var(--font-body)",
            },
          }}
        />
      </Tooltip.Provider>
    </MotionConfig>
  );

  if (reduced) return content;

  return (
    <ReactLenis root options={{ lerp: 0.12, anchors: true }}>
      {content}
    </ReactLenis>
  );
}
