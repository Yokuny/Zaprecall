import { createRoot } from "react-dom/client";
import App from "./App";
import ResetCss from "./components/ResetCss";
import Displace from "./components/Displace";
const dom = document.getElementById("root");
const root = createRoot(dom);
root.render(
  <>
    <ResetCss />
    <Displace>
      <App />
    </Displace>
  </>
);
