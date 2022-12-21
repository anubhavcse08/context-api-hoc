import Menu from "./components/Menu";
import SetThemeColor from "./components/SetThemeColor";
import ProviderTheme from "./utils/ProviderTheme";

function App() {
  return (
    <ProviderTheme>
      <h1>App Component</h1>
      <Menu />
      <br />
      <SetThemeColor />
    </ProviderTheme>
  );
}

export default App;
