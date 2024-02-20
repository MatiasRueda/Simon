import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import DTitulo from "../components/dumb/DTitulo";
import SSimon from "../components/smart/SSimon";
import SMenu from "../components/smart/SMenu";
import SMensaje from "../components/smart/SMensaje";
import SimonContext from "../context/SimonContext";

export default function Inicio(): JSX.Element {
  return (
    <SimonContext>
      <View style={estilo.componente}>
        <DTitulo />
        <SSimon />
        <SMenu />
        <SMensaje />
      </View>
    </SimonContext>
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
