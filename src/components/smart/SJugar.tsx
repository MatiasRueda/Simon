import { Pressable, View, Text, StyleSheet } from "react-native";
import { UseSimon } from "../../hooks/useSimon";

export default function SJugar({ ...rest }: UseSimon): JSX.Element {
  const mostrarResultado = () => {
    rest.metodos.empezarMostrar();
  };

  return (
    <View style={estilos.componente}>
      {!rest.jugar && (
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "black" : "white",
            },
            estilos.componenteJugar,
          ]}
          onPress={mostrarResultado}
        >
          {({ pressed }) => (
            <Text
              style={[{ color: pressed ? "white" : "black" }, estilos.jugar]}
            >
              Jugar
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: 100,
    width: 200,
  },

  texto: {
    textAlign: "center",
  },

  componenteJugar: {
    height: 100,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
  },

  jugar: {
    fontSize: 45,
  },
});
