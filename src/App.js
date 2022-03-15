import Form from "./components/form"
import Map from "./components/map"
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold text-center mt-20 mb-10">
        Forest Change Detection Using Deep Learning
      </h1>
      <Form/>
      <Map/>
    </div>
  );
}

export default App;
