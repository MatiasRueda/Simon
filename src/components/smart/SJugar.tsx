import { Pressable, View, Text, StyleSheet } from "react-native";
import { UseSimon } from "../../hooks/useSimon";

export default function SJugar({ ...rest }: UseSimon): JSX.Element {
  const mostrarResultado = () => {
    rest.metodos.empezarMostrar();
  };

  return (
    <View style={estilos.componenteJugar}>
      {!rest.jugar && (
        <Pressable onPress={mostrarResultado}>
          <View style={estilos.componenteJugar}>
            <Text style={estilos.jugar}>Jugar</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    flex: 1,
    justifyContent: "center",
  },

  texto: {
    textAlign: "center",
  },
  componenteJugar: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  jugar: {
    textAlign: "center",
    width: 150,
    fontSize: 35,
    borderWidth: 2,
    borderColor: "black",
  },
});
