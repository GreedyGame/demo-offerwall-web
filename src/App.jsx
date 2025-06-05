import Landing from "./components/Landing";
import Navbar from "./components/Navbar/Index";

const USER_ID = "test_nnn";

function App() {
  return (
    <div>
      <Navbar userId={USER_ID} />
      <Landing userId={USER_ID} />
    </div>
  );
}

export default App;
