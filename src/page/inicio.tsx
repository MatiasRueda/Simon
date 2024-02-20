import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import DTitulo from "../components/dumb/DTitulo";
import SSimon from "../components/smart/SSimon";
import SMenu from "../components/smart/SMenu";
import SMensaje from "../components/smart/SMensaje";
import SimonContext from "../context/SimonContext";
import { LinearGradient } from "expo-linear-gradient";

export default function Inicio(): JSX.Element {
  return (
    <SimonContext>
      <LinearGradient
        colors={["#F7CE68", "#FBAB7E"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={estilo.componente}
      >
        <DTitulo />
        <SSimon />
        <SMenu />
        <SMensaje />
      </LinearGradient>
    </SimonContext>
  );
}

const estilo = StyleSheet.create({
  componente: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
