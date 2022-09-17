import React, { Suspense, lazy, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";
import { Toaster } from "react-hot-toast";
import "./App.css";

const NotFound = lazy(() => import("./components/frontend/pages/NotFound"));
const Landing = lazy(() => import("./components/frontend/landing/Landing"));
const Layout = lazy(() => import("./components/frontend/layout/Layout"));
const AboutUs = lazy(() => import("./components/frontend/pages/AboutUs"));
const Message = lazy(() => import("./components/frontend/pages/Message"));
const WhyUs = lazy(() => import("./components/frontend/pages/WhyUs"));
const AdmissionInfo = lazy(() => import("./components/frontend/pages/AdInfo"));
const Prospectus = lazy(() => import("./components/frontend/pages/Prospectus"));
const Scholarship = lazy(() =>
  import("./components/frontend/pages/Scholarship")
);
const ClassBook = lazy(() => import("./components/frontend/pages/ClassBook"));
const ResultHistory = lazy(() =>
  import("./components/frontend/pages/ResultHistory")
);
const News = lazy(() => import("./components/frontend/pages/News"));

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Suspense fallback={<FallbackLoading />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Wrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/whyus" element={<WhyUs />} />
            <Route exact path="/information" element={<AdmissionInfo />} />
            <Route exact path="/prospectus" element={<Prospectus />} />
            <Route exact path="/scholarship" element={<Scholarship />} />
            <Route exact path="/classbooks" element={<ClassBook />} />
            <Route exact path="/result" element={<ResultHistory />} />
            <Route exact path="/news" element={<News />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Wrapper>
    </Suspense>
  );
}

export default App;
