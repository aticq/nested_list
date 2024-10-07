import { Suspense } from "react";

import GlobalStyle from "@/app/styles/GlobalStyle";

import { PageLoader } from "@/widgets/PageLoader";
import { MainPage } from "@/pages/MainPage";
import { Navbar } from "@/widgets/Navbar";

const App = () => {
  return (
    <div id="app">
      <GlobalStyle />
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <MainPage />
      </Suspense>
    </div>
  );
};

export default App;
