import SimonContext from "./src/context/SimonContext";
import Inicio from "./src/page/inicio";

export default function App() {
  return (
    <SimonContext>
      <Inicio />
    </SimonContext>
  );
}
