import { ColorValue, TextStyle, ViewStyle } from "react-native";
import aumentarBrillo from "../auxiliar/brillo";
import { PIEZA } from "../logic/simon";

export const botonPress = (pressed: boolean): ViewStyle => {
  return {
    backgroundColor: pressed ? "black" : "white",
  };
};

export const textoPress = (pressed: boolean): TextStyle => {
  return { color: pressed ? "white" : "black" };
};

export const piezaPress = (
  pressed: boolean,
  elegido: boolean,
  color: ColorValue
): ViewStyle => {
  return {
    backgroundColor:
      pressed || elegido ? aumentarBrillo(color as string, 50) : color,
  };
};
