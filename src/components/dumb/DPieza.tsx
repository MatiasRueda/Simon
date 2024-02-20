import {
  ColorValue,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import aumentarBrillo from "../../auxiliar/brillo";

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
        {
          backgroundColor:
            pressed || rest.elegido
              ? aumentarBrillo(rest.color as string, 50)
              : rest.color,
        },
        estilo,
      ]}
      onPress={rest.press}
      disabled={!rest.presionable}
    ></Pressable>
  );
}
