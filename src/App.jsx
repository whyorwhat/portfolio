import {BrowserRouter} from "react-router-dom";
import AppContent from "@/global/AppContent.jsx";
import ScrollToTop from "@/global/ScrollToTop.jsx";

function App() {
  return (
      <BrowserRouter> {/* Se il sito fosse servito senza dominio custom: <BrowserRouter basename="/nome-repo"> */}
          {/* side-effect prima di tutto */}
          <ScrollToTop />

        <AppContent />
      </BrowserRouter>
  );
}

export default App;