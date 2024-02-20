import { ColorValue, Pressable, StyleSheet, ViewStyle } from "react-native";
import { piezaPress } from "../../styles/estilos";

type Parametros = {
  topLeft?: boolean;
  topRight?: boolean;
  bottomLeft?: boolean;
  bottomRight?: boolean;
  elegido: boolean;
  color: ColorValue;
  presionable: boolean;
  press: () => void;
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
  };

  return (
    <Pressable
      style={({ pressed }) => [
        piezaPress(pressed, rest.elegido, rest.color),
        estilo,
      ]}
      onPress={rest.press}
      disabled={!rest.presionable}
    ></Pressable>
  );
}
