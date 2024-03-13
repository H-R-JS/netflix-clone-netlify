import "./SASS/navbar.scss";
import { Header } from "./Components/1Header/Header";
import { Router } from "./Components/Router/Router";
import { AuthContextProvider } from "./Components/Context/AuthContext";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Router />
      </AuthContextProvider>
    </div>
  );
}

export default App;
