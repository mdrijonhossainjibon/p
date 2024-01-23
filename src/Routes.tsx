import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Frame2 = React.lazy(() => import("pages/Frame2"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const Frame1 = React.lazy(() => import("pages/Frame1"));
const Frame = React.lazy(() => import("pages/Frame"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame" element={<Frame />} />
          <Route path="/frame1" element={<Frame1 />} />
          <Route path="/frametwo" element={<FrameTwo />} />
          <Route path="/frame2" element={<Frame2 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
