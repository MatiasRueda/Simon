import { StyleSheet, Text } from "react-native";

export default function DNivel({ nivel }: { nivel: number }): JSX.Element {
  return <Text style={estilos.nivel}>{`Nivel ${nivel}`}</Text>;
}

const estilos = StyleSheet.create({
  nivel: {
    textAlign: "center",
    fontSize: 23,
    marginTop: 10,
  },
});
