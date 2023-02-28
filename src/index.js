import reactDOM from "react-dom";
import App from "./App";
import ResetCss from "./components/ResetCss";
import Layout from "./components/Layout";
const root = document.getElementById("root");
reactDOM.render(
  <>
    <ResetCss />
    <Layout>
      <App />
    </Layout>
  </>,
  root
);
