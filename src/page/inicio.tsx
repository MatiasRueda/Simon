import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import DTitulo from "../components/dumb/DTitulo";
import SSimon from "../components/smart/SSimon";
import SMensaje from "../components/smart/SMensaje";
import { LinearGradient } from "expo-linear-gradient";
import { useSimonContext } from "../context/SimonContext";
import SBotonMenu from "../components/smart/SBotonMenu";
import SMenu from "../components/smart/SMenu";

export default function Inicio(): JSX.Element {
  const simonContext = useSimonContext();

  return (
    <LinearGradient
      colors={simonContext.color}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={estilo.componente}
    >
      <DTitulo />
      <SSimon />
      <SBotonMenu />
      <SMenu />
      <SMensaje />
    </LinearGradient>
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
