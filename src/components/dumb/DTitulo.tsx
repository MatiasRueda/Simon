import { Text, StyleSheet } from "react-native";

export default function DTitulo(): JSX.Element {
  return <Text style={estilo.titulo}>Simon Dice</Text>;
}

const estilo = StyleSheet.create({
  titulo: {
    marginTop: 10,
    fontSize: 30,
    textAlign: "center",
  },
});
