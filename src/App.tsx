import "./App.css";
import PlayerMocks from "./mocks/player";
import SinglePlayer from "./pages/SinglePlayer/SinglePlayer";

function App() {
  return (
    <main>
      <SinglePlayer player={PlayerMocks.player}/>
    </main>
  );
}

export default App;
