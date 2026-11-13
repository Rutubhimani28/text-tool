"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

// HilltopAds banner zone.
const BANNER_SRC =
  "https://simplistic-walk.com/bNX.V_sZdkGJlb0/YTWacL/PeFmm9luZZ/U/lQkTPcTTcW2OMFjyIf3RNfT/cRtqN/zIY/yoM_jBc/2nMGQD";

// Rails need ~300px ad + gutters on both sides of the widest page content (1152px).
const WIDE_QUERY = "(min-width: 1800px)";

// null on the server / first render so nothing is injected before we know the layout.
function useMediaQuery(query: string): boolean | null {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => null,
  );
}

const useIsWide = () => useMediaQuery(WIDE_QUERY);

function BannerSlot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const s = document.createElement("script");
    (s as HTMLScriptElement & { settings?: object }).settings = {};
    s.src = BANNER_SRC;
    s.async = true;
    s.referrerPolicy = "no-referrer-when-downgrade";
    el.appendChild(s);
    return () => {
      el.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="min-h-[250px] min-w-[300px]" />;
}

/** Left and right banners in the free space beside the page content (wide screens only). */
export function SideBanners() {
  const isWide = useIsWide();
  if (!isWide) return null;

  const rail = "pointer-events-none absolute inset-y-0 w-[300px]";
  return (
    <>
      <aside aria-label="Advertisement" className={`${rail} left-2`}>
        <div className="pointer-events-auto sticky top-28">
          <BannerSlot />
        </div>
      </aside>
      <aside aria-label="Advertisement" className={`${rail} right-2`}>
        <div className="pointer-events-auto sticky top-28">
          <BannerSlot />
        </div>
      </aside>
    </>
  );
}

/** Single centered banner used when the screen is too narrow for side rails. */
export function InlineBanner() {
  const isWide = useIsWide();
  if (isWide !== false) return null;

  return (
    <aside aria-label="Advertisement" className="flex justify-center px-4 py-6">
      <BannerSlot />
    </aside>
  );
}

// Medium-wide screens (below the full-page rails) where a narrow hero leaves ~300px free on each side.
const FLANK_QUERY = "(min-width: 1366px) and (max-width: 1799.98px)";

/**
 * Left and right banners flanking a narrow, centered hero.
 * Put it inside a `relative` section; it fills the empty space beside the hero text.
 */
export function FlankBanners() {
  const matches = useMediaQuery(FLANK_QUERY);
  if (!matches) return null;

  const slot = "absolute top-1/2 z-10 w-[300px] -translate-y-1/2";
  return (
    <>
      <aside aria-label="Advertisement" className={`${slot} left-4`}>
        <BannerSlot />
      </aside>
      <aside aria-label="Advertisement" className={`${slot} right-4`}>
        <BannerSlot />
      </aside>
    </>
  );
}
