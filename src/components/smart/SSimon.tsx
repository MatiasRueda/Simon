import { View, StyleSheet } from "react-native";
import DPiezas from "../dumb/DPiezas";
import useSimon from "../../hooks/useSimon";
import SJugar from "./SJugar";
import { PIEZA } from "../../logic/simon";
import { useSimonContext } from "../../context/SimonContext";
import SNivel from "./SNivel";

export default function SSimon(): JSX.Element {
  const simonContext = useSimonContext();
  const simon = useSimon();

  const gano = (): void => {
    simonContext.agregarMensajes({
      mensajeTitulo: "Felicidades Ganaste!",
      mensajeBoton: "Siguiente nivel",
    });
    simon.metodos.siguienteNivel();
  };

  const perdio = (): void => {
    simonContext.agregarMensajes({
      mensajeTitulo: "Perdiste",
      mensajeBoton: "Volver a jugar",
    });
    simon.metodos.reiniciar();
  };

  const eleccion = (pieza: string): void => {
    const resultado = simon.metodos.coinciden(pieza as PIEZA);
    if (resultado === undefined) return;
    resultado ? gano() : perdio();
  };

  return (
    <View style={estilos.componente}>
      <SNivel mostrar={simon.jugar && !simon.memorizando} nivel={simon.nivel} />
      <DPiezas
        press={eleccion}
        presionables={simon.jugar && !simon.memorizando}
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
