import Container from "./Container";
import { ColorProvider } from "./contexts/ColorsContext";

function App() {
  return (
    <ColorProvider>
      <Container />
    </ColorProvider>
  );
}

export default App;
