import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSimonContext } from "../../context/SimonContext";

export default function SMenu(): JSX.Element {
  const simonContext = useSimonContext();
  const mostrarMenu = (): void => {
    simonContext.agregarMensajes({
      mensajeTitulo: "Esto es el menu",
      mensajeBoton: "Volver",
    });
  };

  return (
    <View style={estilos.componente}>
      <Pressable onPress={mostrarMenu}>
        <Text style={estilos.texto}>Menu</Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  componente: {
    height: 30,
    backgroundColor: "red",
  },
  texto: {
    textAlign: "center",
  },
});
