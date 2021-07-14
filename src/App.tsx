import { BrowserRouter, Route } from "react-router-dom";
import { NewRoom } from "./pages/NewRoom";

export const AuthContext = createContext({} as any);

function App() {
  const [user, setUser] = useState();

  function signInWithGoogle() {}

  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </BrowserRouter>
  );
}

export default App;
