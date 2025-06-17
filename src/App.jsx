import Landing from "./components/Landing";
import Navbar from "./components/Navbar/Index";

const USER_ID = "<your_user_id>";
const APP_ID = "<your_app_id>";
const SANDBOX = true;

function App() {
  return (
    <div>
      <Navbar userId={USER_ID} />
      <Landing userId={USER_ID} appId={APP_ID} sandbox={SANDBOX} />
    </div>
  );
}

export default App;
