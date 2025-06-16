import Landing from "./components/Landing";
import Navbar from "./components/Navbar/Index";

const USER_ID = "<your_user_id>";
const APP_ID = "<your_app_id>";

function App() {
  return (
    <div>
      <Navbar userId={USER_ID} />
      <Landing userId={USER_ID} appId={APP_ID} />
    </div>
  );
}

export default App;
