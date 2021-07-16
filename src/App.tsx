import { BrowserRouter, Route } from "react-router-dom";
import { NewRoom } from "./pages/NewRoom";

type AuthContextType = {
  user: object;
  signInWithGoogle: () => void;
};

export const AuthContext = createContext({} as AuthContextType);

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
