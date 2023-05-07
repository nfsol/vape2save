import { BrowserRouter} from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
