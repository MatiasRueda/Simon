import { ColorValue, StyleSheet, View, ViewStyle } from "react-native";
import aumentarBrillo from "../../auxiliar/brillo";

type Parametros = {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  elegido: boolean;
  color: ColorValue;
};

const estilos = StyleSheet.create({
  componente: {
    height: 125,
    width: 125,
  },
});

export default function DPieza({ ...rest }: Parametros): JSX.Element {
  const estilo: ViewStyle = {
    ...estilos.componente,
    borderTopLeftRadius: rest.topLeft ? 125 : undefined,
    borderTopRightRadius: rest.topRight ? 125 : undefined,
    borderBottomLeftRadius: rest.bottomLeft ? 125 : undefined,
    borderBottomRightRadius: rest.bottomRight ? 125 : undefined,
    backgroundColor: rest.elegido
      ? aumentarBrillo(rest.color as string, 50)
      : rest.color,
  };

  return <View style={estilo}></View>;
}
