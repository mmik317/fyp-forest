import * as ReactDOM from "react-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports"

import Form from "./components/form"
import Admin from "./components/admin"
import Map from "./components/map"
import "./App.css";

// Amplify.configure({
//   ...awsExports
// });



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/admin" element={<Admin />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
  </BrowserRouter>,
      
      {/* <Map/> */}
    </div>
  );
}

export default App;
