import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./Components/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 160px)");
  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPages} />
    </div>
  );
}

export default App;
