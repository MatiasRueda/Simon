import { View, Text, StyleSheet, Pressable } from "react-native";
import DPiezas from "../dumb/DPiezas";
import DNivel from "../dumb/DNivel";
import useSimon from "../../hooks/useSimon";

export default function SJuego(): JSX.Element {
  const simon = useSimon();

  const mostrarResultado = () => {
    simon.metodos.empezarMostrar();
  };

  return (
    <View style={estilos.componente}>
      <DNivel nivel={simon.nivel} />
      <DPiezas elegido={simon.mostrarResultado && simon.piezas[simon.indice]} />
      <View style={estilos.componenteJugar}>
        {!simon.jugar && (
          <Pressable onPress={mostrarResultado}>
            <View style={estilos.componenteJugar}>
              <Text style={estilos.jugar}>Jugar</Text>
            </View>
          </Pressable>
        )}
      </View>
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
