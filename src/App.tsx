import { Route, Routes } from "react-router-dom";
import { useEffect, useState, lazy, Suspense, useMemo } from "react";
import { CircularProgress } from "@heroui/progress";

// Replace static imports with lazy imports
const IndexPageLazy = lazy(() => import("@/pages/index"));
const DocsPageLazy = lazy(() => import("@/pages/docs"));
const PricingPageLazy = lazy(() => import("@/pages/pricing"));
const BlogPageLazy = lazy(() => import("@/pages/blog"));
const AboutPageLazy = lazy(() => import("@/pages/about"));

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useMemo(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const x =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y =
        "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          style={{
            position: "fixed",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            backgroundColor: "rgb(255, 69, 51)",
            backdropFilter: "blur(10px)",
            pointerEvents: "none",
            transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
            transition: "transform 0.1s linear",
            zIndex: 9999,
          }}
        />
      )}

      <Suspense
        fallback={
          <div className="w-full h-screen text-white flex justify-center items-center">
            <CircularProgress size="lg" color="warning" strokeWidth={6} />
          </div>
        }
      >
        <Routes>
          <Route element={<IndexPageLazy />} path="/" />
          <Route element={<DocsPageLazy />} path="/docs" />
          <Route element={<PricingPageLazy />} path="/pricing" />
          <Route element={<BlogPageLazy />} path="/blog" />
          <Route element={<AboutPageLazy />} path="/about" />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
