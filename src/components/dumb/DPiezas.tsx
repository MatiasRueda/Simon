import { StyleSheet, View } from "react-native";
import DPieza from "./DPieza";

export default function DPiezas(props: {
  elegido: string | false;
}): JSX.Element {
  return (
    <View style={estilos.componente}>
      <View style={estilos.fila}>
        <DPieza topLeft color="#ffff00" elegido={props.elegido === "#ffff00"} />
        <DPieza
          topRight
          color="#0000ff"
          elegido={props.elegido === "#0000ff"}
        />
      </View>
      <View style={estilos.fila}>
        <DPieza
          bottomLeft
          color="#ff0000"
          elegido={props.elegido === "#ff0000"}
        />
        <DPieza
          bottomRight
          color="#008000"
          elegido={props.elegido === "#008000"}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  fila: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
