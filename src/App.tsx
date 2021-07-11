import { BrowserRouter, Route } from "react-router-dom";
import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;
