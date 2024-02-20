import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import DTitulo from "../components/dumb/DTitulo";
import SJuego from "../components/smart/SJuego";
import SMenu from "../components/smart/SMenu";

export default function Inicio(): JSX.Element {
  return (
    <View style={estilo.componente}>
      <DTitulo />
      <SJuego />
      <SMenu />
    </View>
  );
}

const estilo = StyleSheet.create({
  componente: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
});
