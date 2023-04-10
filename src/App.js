import GameDetail from "./components/GameDetail";
import GolbalStyle from "./components/GolobalStyle";
import Home from "./pages/Home";

function App() {
 return (
      <div className="box">
        <GolbalStyle />
        <GameDetail/>
        <Home />
      </div>
  );
}

export default App;
