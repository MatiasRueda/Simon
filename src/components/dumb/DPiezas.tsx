import { StyleSheet, View } from "react-native";
import DPieza from "./DPieza";

type Parametros = {
  elegido: string | false;
  presionables: boolean;
  press: (pieza: string) => void;
};

export default function DPiezas({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilos.componente}>
      <View style={estilos.fila}>
        <DPieza
          topLeft
          presionable={rest.presionables}
          color="#ffff00"
          elegido={rest.elegido === "#ffff00"}
          press={() => {
            rest.press("#ffff00");
          }}
        />
        <DPieza
          topRight
          presionable={rest.presionables}
          color="#0000ff"
          elegido={rest.elegido === "#0000ff"}
          press={() => {
            rest.press("#0000ff");
          }}
        />
      </View>
      <View style={estilos.fila}>
        <DPieza
          bottomLeft
          presionable={rest.presionables}
          color="#ff0000"
          elegido={rest.elegido === "#ff0000"}
          press={() => {
            rest.press("#ff0000");
          }}
        />
        <DPieza
          bottomRight
          presionable={rest.presionables}
          color="#008000"
          elegido={rest.elegido === "#008000"}
          press={() => {
            rest.press("#008000");
          }}
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
