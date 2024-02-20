import { StyleSheet, Text, View } from "react-native";

export default function DMenu(): JSX.Element {
  return (
    <View style={estilo.componente}>
      <Text style={estilo.texto}></Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  componente: {
    position: "absolute",
    flex: 1,
    backgroundColor: "black",
  },

  texto: {
    color: "white",
  },
});
