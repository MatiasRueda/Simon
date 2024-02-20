import { View, Text, StyleSheet } from "react-native";

type Parametros = {
  mostrar: boolean;
  memorizando: boolean;
};

export default function SExplicacion({ ...rest }: Parametros): JSX.Element {
  return (
    <View style={estilos.componente}>
      {rest.mostrar && (
        <Text style={estilos.texto}>
          {rest.memorizando ? "Preste atencion" : "Es su turno de elegir"}
        </Text>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    marginTop: 10,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    textAlign: "center",
    fontSize: 20,
  },
});
