import { View, StyleSheet } from "react-native";
import DPiezas from "../dumb/DPiezas";
import DNivel from "../dumb/DNivel";
import useSimon from "../../hooks/useSimon";
import SJugar from "./SJugar";

export default function SJuego(): JSX.Element {
  const simon = useSimon();

  return (
    <View style={estilos.componente}>
      <DNivel nivel={simon.nivel} />
      <DPiezas
        elegido={simon.mostrarResultado && simon.metodos.piezaActual()}
      />
      <SJugar {...simon} />
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    flex: 1,
    justifyContent: "center",
  },

  texto: {
    textAlign: "center",
  },
  componenteJugar: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  jugar: {
    textAlign: "center",
    width: 150,
    fontSize: 35,
    borderWidth: 2,
    borderColor: "black",
  },
});
